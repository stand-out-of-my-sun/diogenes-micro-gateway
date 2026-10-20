# Diogenes Developer, Data & Prompt Engineering Utilities MCP (`diogenes-dev-utilities-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-dev-utilities-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-dev-utilities-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Developer, Data & Prompt Engineering Utilities MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Autonomous Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 61 gateway endpoints into your LLM's context window, installing this package exposes **only the 7 specialized `dev-utilities` tools** needed for **Developer Tools**:

Deterministic developer & data reliability MCP utilities: malformed JSON syntax healer, linear-time O(n) ReDoS-safe regex synthesizer, XML system prompt compiler, strict JSON Schema enforcer, context compaction verifier, hallucination factuality auditor, and CSV/JSON data sanitizer.

---

## 1-Click Install (`mcp.json`) for Cursor, Claude Desktop & Windsurf

No API keys, user accounts, or local dependencies required. Add this scoped endpoint to `.cursor/mcp.json` or `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "diogenes-dev-utilities": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/dev-utilities"
    }
  }
}
```

---

## Included Tools in `dev-utilities` (7 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `json_repair` | `POST /api/v1/agent/json-repair` | 50 sats via L402 | Deterministically heals truncated or malformed JSON strings, unescaped quotes, and trailing commas. |
| `regex_oracle` | `POST /api/v1/agent/regex-oracle` | 50 sats via L402 | Synthesizes linear-time O(n) ReDoS-safe regular expressions with positive/negative test validation. |
| `agent_prompt_compiler` | `POST /api/v1/agent/prompt-compiler` | 100 sats via L402 | Compiles raw instructions into structured, hallucination-resistant XML system prompts with guardrails. |
| `agent_schema_enforcer` | `POST /api/v1/agent/schema-enforcer` | 75 sats via L402 | Enforces strict JSON Schema compliance, automatic type coercion, and extraneous field pruning on LLM outputs. |
| `context_compaction_verifier` | `POST /api/v1/agent/context-compaction-verifier` | 90 sats via L402 | Audits pre-compaction vs. post-compaction state summaries to ensure zero dropped constraints, wallet addresses, or IDs. |
| `hallucination_auditor` | `POST /api/v1/agent/hallucination-auditor` | 150 sats via L402 | Cross-references agent claims and numbers against provided source passages to compute grounded factuality scores. |
| `clean_tabular_data` | `POST /api/v1/clean-data` | 100 sats via L402 | Normalizes, deduplicates, and strips injection payloads from untrusted CSV and JSON tabular datasets. |

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
| **Category** | `Developer Tools` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/dev-utilities` |
| **Manifest** | `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/dev-utilities.json` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional `L402`, `x402`, or `MPP` request headers for production calls) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/dev-utilities.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-dev-utilities-mcp/issues` |
