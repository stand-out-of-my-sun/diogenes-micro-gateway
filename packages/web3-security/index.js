#!/usr/bin/env node
/**
 * Diogenes Web3, DeFi & HTTP 402 Security MCP
 * Zero-dependency stdio MCP bridge with instant local tools/list resolution.
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const GATEWAY_URL = process.env.DIOGENES_GATEWAY_URL || "https://diogenes-micro-gateway.corinth.workers.dev/mcp/web3-security";

let toolsList = [];
try {
  const manifestPath = path.join(__dirname, "tools_manifest.json");
  if (fs.existsSync(manifestPath)) {
    toolsList = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  }
} catch (e) {
  toolsList = [];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on("line", async (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  let req;
  try {
    req = JSON.parse(trimmed);
  } catch (e) {
    return;
  }

  if (req.method && req.method.startsWith("notifications/")) {
    return;
  }

  // 1. Instant local response for initialize
  if (req.method === "initialize") {
    const initResp = {
      jsonrpc: "2.0",
      id: req.id,
      result: {
        protocolVersion: req.params?.protocolVersion || "2024-11-05",
        capabilities: {
          tools: {
            listChanged: false
          }
        },
        serverInfo: {
          name: "diogenes-web3-security-mcp",
          version: "1.4.0"
        }
      }
    };
    process.stdout.write(JSON.stringify(initResp) + "\n");
    return;
  }

  // 2. Instant local response for tools/list
  if (req.method === "tools/list" && toolsList.length > 0) {
    const toolsResp = {
      jsonrpc: "2.0",
      id: req.id,
      result: {
        tools: toolsList
      }
    };
    process.stdout.write(JSON.stringify(toolsResp) + "\n");
    return;
  }

  // 3. Forward execution to live edge gateway
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(GATEWAY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Diogenes-MCP-Node-Bridge/1.4.0"
      },
      body: trimmed,
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    const text = await res.text();
    process.stdout.write(text.trim() + "\n");
  } catch (err) {
    const errResp = {
      jsonrpc: "2.0",
      id: req.id,
      error: {
        code: -32603,
        message: "Upstream edge gateway network error: " + err.message
      }
    };
    process.stdout.write(JSON.stringify(errResp) + "\n");
  }
});
