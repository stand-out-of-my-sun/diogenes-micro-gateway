# Diogenes Autonomous Microservice Gateway (`diogenes-micro-gateway`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Autonomous Microservice Gateway** (`https://diogenes-micro-gateway.corinth.workers.dev`) is an account-less, multi-protocol AI & Web3 edge gateway delivering **106 Total Live Capabilities**:
1. **Account-Less Access to the Complete Google Gemini Suite (45 Models) & Autonomous Agents**: Instant pay-per-request access to **Antigravity Agent**, **Deep Research Pro**, **Nano Banana Pro (Gemini 3 Pro Image)**, **Nano Banana**, **Gemini 4 Argon**, and **Gemini 3.1 Pro** with zero API keys, zero accounts, and zero monthly subscriptions.
2. **61 Live Autonomous Edge Microservices**: Pre-execution SQL/code/MCP security guardrails, smart contract vulnerability audits, Solana/EVM token risk oracles, HTTP 402 invoice fraud verification, and cross-chain bridge routing settled via **Bitcoin Lightning (L402)**, **Solana USDC (x402)**, **Base EVM USDC (MPP)**, and **Streamable HTTP MCP (`/mcp`)**.
3. **9 Dedicated EVE: Frontier Sui Move Microservices**: Sui Move Smart Assembly coder & auditor, Smart Gate route & toll planner, Lagrange Network Node gigajoule (GJ) optimizer, SSU Automated Market Maker, Killmail threat intelligence, Smart Turret target matrix, Vault zkLogin character verifier, Constellation sovereignty fuel radar, and Sui Programmable Transaction Block (PTB) simulator.

---

## Newly Released Batch of Edge Microservices

| Microservice | Endpoint | Price | Capability |
| :--- | :--- | :--- | :--- |
| **Autonomous Agent Action-Trace Semantic Loop & Token-Burn Circuit Breaker** | `POST /api/v1/agent/loop-circuit-breaker` | $0.02 USDC (x402) | Analyzes an autonomous agent's recent N tool-call signatures, error codes, and state hashes to detect cyclic retries, A/B oscillation deadlocks, and runaway token burn, returning a deterministic circuit-breaker verdict and pivot strategy. |
| **EVE Frontier & Sui Move Programmable Transaction Block (PTB) Drain & Hot-Potato Auditor** | `POST /api/v1/eve-frontier/sui-ptb-simulator` | 150 sats (L402) | Statically audits Sui Programmable Transaction Block (PTB) command arrays (SplitCoins, MoveCall, MergeCoins, TransferObjects) before signing to detect hidden coin drains, unauthorized object transfers, and unconsumed HotPotato receipts. |
| **MCP sampling/createMessage Reverse-Injection & Quota-Hijack Firewall** | `POST /api/v1/agent/mcp-sampling-guard` | 100 sats (L402) | Audits inbound MCP sampling/createMessage requests from connected MCP servers before the host client executes them, enforcing token caps, blocking systemPrompt overrides, and flagging covert CoT manipulation. |
| **Indirect Prompt-Injection, Invisible Unicode & Exfiltration-Beacon Tool Output Scrubber** | `POST /api/v1/agent/tool-output-firewall` | 75 sats (L402) | Sanitizes untrusted external tool outputs before they enter an agent's LLM context window, stripping invisible Unicode tag smuggling (U+E0000-U+E007F), zero-width joiners, markdown image exfiltration URLs, and embedded system-prompt overrides. |
| **MCP tools/list Rug-Pull & Mid-Session Schema Mutation Detector** | `POST /api/v1/agent/mcp-rugpull-diff` | 85 sats (L402) | Computes cryptographic structural fingerprints and semantic diffs between an agent's pinned MCP tools/list baseline and a live server tools/list response to catch mid-session MCP rug pulls and parameter tampering. |
| **Bitcoin UTXO Dust Consolidation & Mempool Fee-Window Optimizer** | `POST /api/v1/crypto/utxo-consolidation-planner` | 80 sats (L402) | Analyzes Bitcoin UTXO sets against live mempool fee percentiles to compute optimal batch consolidation windows and prevent dust lockups. |
| **Pre-Payment HTTP 402 (L402 / x402 / MPP) Challenge & Invoice Fraud Auditor** | `POST /api/v1/crypto/http402-challenge-verifier` | 60 sats (L402) | Decodes and audits raw HTTP 402 Payment Required challenges (L402 BOLT11 + Macaroon, x402 Solana Pay URIs, and MPP intents) before an agent wallet broadcasts funds, blocking invoice overcharges, hash mismatches, and spoofed token mints. |
| **Autonomous LLM Context Compaction & State-Loss Integrity Verifier** | `POST /api/v1/agent/context-compaction-verifier` | 90 sats (L402) | Audits pre-compaction and post-compaction agent state summaries to detect dropped constraints, wallet addresses, or pending tool IDs. |

---

## Model Context Protocol (MCP) & Public Directory Profiles

Diogenes Gateway exposes **21 production autonomous tools** natively via **Streamable HTTP** (`https://diogenes-micro-gateway.corinth.workers.dev/mcp`) for Cursor, Claude Desktop, Windsurf, VS Code, and autonomous agents:

- **Glama MCP Directory Profile**: [https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)
- **TensorBlock MCP Index Profile**: [https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
- **Official MCP Registry ID**: `io.github.stand-out-of-my-sun/diogenes-gateway`
- **Primary Streamable HTTP MCP Endpoint**: `https://diogenes-micro-gateway.corinth.workers.dev/mcp`
- **Glama Ownership Manifest**: `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/glama.json`
- **Report a Bug / Request a Service**: [GitHub Issues](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway/issues/new?labels=bug)

### TensorBlock & MCP Index Profile Metadata

| Field | Value |
| :--- | :--- |
| **Category** | `Security` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (No auth required for free tier, MCP discovery, or `?demo=true` previews; optional `L402`, `x402`, or `MPP` request headers for paid production calls) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/glama.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-micro-gateway/issues` |

### 1-Click Cursor / Claude Desktop Configuration (`mcp.json`)

```json
{
  "mcpServers": {
    "diogenes-gateway": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp"
    }
  }
}
```
