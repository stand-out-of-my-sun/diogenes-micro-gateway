# Diogenes Agent Guardrails & Command Sandbox MCP (`diogenes-agent-guardrails-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-agent-guardrails-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-agent-guardrails-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Agent Guardrails & Command Sandbox MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Autonomous Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 61 gateway endpoints into your LLM's context window, installing this package exposes **only the 8 specialized `agent-guardrails` tools** needed for **Security**:

Pre-execution security guardrails and command sandboxing for AI agents: bash/tool injection gate, MCP rugpull schema diff, MCP sampling firewall, indirect prompt-injection scrubber, loop circuit breaker, SQL AST guard, PII redactor, and ephemeral Python sandbox.

---

## 1-Click Install (`mcp.json`) for Cursor, Claude Desktop & Windsurf

No API keys, user accounts, or local dependencies required. Add this scoped endpoint to `.cursor/mcp.json` or `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "diogenes-agent-guardrails": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/agent-guardrails"
    }
  }
}
```

---

## Included Tools in `agent-guardrails` (8 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `guardrail_verify` | `POST /api/v1/agent/guardrail-verify` | 100 sats via L402 | Pre-execution security gate to detect prompt injection, destructive bash commands, wallet drain, and key exfiltration. |
| `mcp_rugpull_diff` | `POST /api/v1/agent/mcp-rugpull-diff` | 85 sats via L402 | Detects mid-session MCP tools/list rug-pulls, shadow parameter injections, and coercive description mutations. |
| `mcp_sampling_guard` | `POST /api/v1/agent/mcp-sampling-guard` | 100 sats via L402 | Audits inbound MCP sampling/createMessage requests to block systemPrompt hijacking and recursive quota drain. |
| `tool_output_firewall` | `POST /api/v1/agent/tool-output-firewall` | 75 sats via L402 | Sanitizes untrusted tool outputs, stripping invisible Unicode tags (U+E0000), markdown exfiltration beacons, and indirect prompt injections. |
| `agent_loop_circuit_breaker` | `POST /api/v1/agent/loop-circuit-breaker` | 70 sats / $0.02 USDC | Analyzes recent tool-call traces to trip a circuit breaker on cyclic retries, A/B deadlocks, and runaway token burn. |
| `sql_injection_ast_guard` | `POST /api/v1/agent/sql-guard` | 75 sats via L402 | Statically validates LLM-generated SQL queries via AST inspection to block SQLi tautologies, UNION leaks, and DROP/TRUNCATE. |
| `code_sandbox` | `POST /api/v1/mpp/code-sandbox` | $0.15 USDC via MPP | Executes untrusted Python snippets inside an ephemeral sandbox with static AST safety auditing. |
| `scrub_pii_firewall` | `POST /api/v1/scrub-pii` | 150 sats via L402 | Redacts emails, SSNs, phone numbers, API keys, and wallet seed phrases before external LLM calls. |

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
| **Category** | `Security` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/agent-guardrails` |
| **Manifest** | `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/agent-guardrails.json` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional `L402`, `x402`, or `MPP` request headers for production calls) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/agent-guardrails.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-agent-guardrails-mcp/issues` |
