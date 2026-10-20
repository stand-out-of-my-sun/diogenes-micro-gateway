# Diogenes Gemini Suite & Autonomous Agents MCP (`diogenes-gemini-suite-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-gemini-suite-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-gemini-suite-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Gemini Suite & Autonomous Agents MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Autonomous Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 61 gateway endpoints into your LLM's context window, installing this package exposes **only the 7 specialized `gemini-suite` tools** needed for **AI & LLM Integration**:

Account-less MCP access to all 45 Google Gemini models (Gemini 4 Argon, Gemini 3.1 Pro, Gemini 3.8 Flash) and autonomous agents (Antigravity Agent, Deep Research Pro, Nano Banana Pro, Veo 3, Lyria 3) via L402, x402, and MPP.

---

## 1-Click Install (`mcp.json`) for Cursor, Claude Desktop & Windsurf

No API keys, user accounts, or local dependencies required. Add this scoped endpoint to `.cursor/mcp.json` or `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "diogenes-gemini-suite": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/gemini-suite"
    }
  }
}
```

---

## Included Tools in `gemini-suite` (7 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `gemini_universal_generate` | `POST /api/v1/ai/generate` | 150–250 sats / $0.14 USDC | Account-less inference across all 45 Google Gemini models (Gemini 4 Argon, Gemini 3.1 Pro, Gemini 3.8 Flash) with configurable thinking budgets. |
| `antigravity_autonomous_agent` | `POST /api/v1/ai/antigravity-agent` | 500 sats / $0.48 USDC | Executes multi-step autonomous agent reasoning, code synthesis, and tool orchestration via Google Antigravity Agent. |
| `deep_research_pro_dossier` | `POST /api/v1/ai/deep-research` | 1000 sats / $0.95 USDC | Synthesizes multi-hop grounded technical and market research dossiers with verified citations. |
| `nano_banana_pro_image_gen` | `POST /api/v1/ai/image-gen` | 350–600 sats / $0.33 USDC | Generates high-resolution images, diagrams, and UI assets using Nano Banana Pro (Gemini 3 Pro Image) and Nano Banana 2. |
| `veo3_and_lyria3_media_gen` | `POST /api/v1/ai/video-gen` | 500–1500 sats | Generates cinematic video clips via Veo 3 or studio audio tracks via Lyria 3. |
| `gemini_grounded_search_maps` | `POST /api/v1/ai/grounded-search` | 200 sats / $0.19 USDC | Real-time Google Search and Google Maps grounded reasoning returning structured JSON with source URLs. |
| `gemini_vector_embeddings` | `POST /api/v1/ai/embeddings` | 50 sats / $0.01 USDC | Generates 3072-dimensional semantic vector embeddings via Gemini Embedding 2 for RAG and agent memory. |

> **Free Account-Less Demo Mode**: Append `?demo=true` to any REST endpoint above for an instant HTTP 200 schema preview at zero cost.

---

## Other Modular Diogenes MCP Packages

Install only the domain packages relevant to your workflow:

| Package | Scoped MCP Endpoint | Spoke Repository |
| :--- | :--- | :--- |
| **1. Gemini Suite & Agents** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/gemini-suite` | [`stand-out-of-my-sun/diogenes-gemini-suite-mcp`](https://github.com/stand-out-of-my-sun/diogenes-gemini-suite-mcp) |
| **2. Agent Guardrails & Sandbox** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/agent-guardrails` | [`stand-out-of-my-sun/diogenes-agent-guardrails-mcp`](https://github.com/stand-out-of-my-sun/diogenes-agent-guardrails-mcp) |
| **3. Web3, DeFi & 402 Security** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/web3-security` | [`stand-out-of-my-sun/diogenes-web3-security-mcp`](https://github.com/stand-out-of-my-sun/diogenes-web3-security-mcp) |
| **4. EVE: Frontier Sui Move Suite** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/eve-frontier` | [`stand-out-of-my-sun/diogenes-eve-frontier-mcp`](https://github.com/stand-out-of-my-sun/diogenes-eve-frontier-mcp) |
| **5. Dev & Data Utilities** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/dev-utilities` | [`stand-out-of-my-sun/diogenes-dev-utilities-mcp`](https://github.com/stand-out-of-my-sun/diogenes-dev-utilities-mcp) |
| **6. Full Master Gateway (All 61 Services)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp` | [`stand-out-of-my-sun/diogenes-micro-gateway`](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway) |

---

## TensorBlock & MCP Index Profile Metadata

| Field | Value |
| :--- | :--- |
| **Category** | `AI & LLM Integration` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/gemini-suite` |
| **Manifest** | `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/gemini-suite.json` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional `L402`, `x402`, or `MPP` request headers for production calls) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/gemini-suite.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-gemini-suite-mcp/issues` |
