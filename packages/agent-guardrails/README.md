# Diogenes Agent Guardrails & Command Sandbox MCP (`diogenes-agent-guardrails-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-agent-guardrails-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-agent-guardrails-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Agent Guardrails & Command Sandbox MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Autonomous Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 85 gateway endpoints into your LLM's context window, installing this package exposes **only the 12 specialized `agent-guardrails` tools** needed for **Security**:

12 TDQS 5.0/5.0 pre-execution and post-execution AI agent security tools: command injection gate, AST SQL validator, Python sandbox, MCP manifest & rug-pull auditors, sampling firewall, output scrubber, PII redactor, loop breaker, A2A card verifier, egress SSRF guard, and factuality auditor.

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

## Included Tools in `agent-guardrails` (12 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `verify_agent_command_safety` | `POST /api/v1/agent/guardrail-verify` | 100 sats (L402) | Evaluates untrusted agent prompts, bash commands, and tool arguments to block prompt injection, destructive shell commands, and private-key exfiltration. Use when screening a general shell command or user prompt before agent execution; for statically validating SQL database queries at the AST level, use validate_sql_query_ast instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'payload' ('action_type' defaults to 'bash_command'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `validate_sql_query_ast` | `POST /api/v1/agent/sql-guard` | 75 sats (L402) | Parses LLM-generated SQL statements to block DDL/DML mutations (DROP, DELETE, UPDATE, GRANT), stacked queries, and UNION/comment SQL injection payloads. Use when verifying that an agent-authored SQL query is strictly read-only before running it on a database; for screening non-SQL bash commands or general agent prompts, use verify_agent_command_safety instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'query' ('dialect' defaults to 'postgres'), supports '?demo=true' or L402 (75 sats), and returns HTTP 400 if invalid. |
| `execute_python_sandbox` | `POST /api/v1/mpp/code-sandbox` | 1500 sats (MPP) | Audits Python source code for forbidden syscalls (os, subprocess, socket, open, eval) and simulates isolated stdout execution. Use when running untrusted LLM-generated Python snippets inside an isolated sandbox; for checking shell commands or tool arguments without executing Python code, use verify_agent_command_safety instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'code' ('timeout_profile' defaults to 'fast_1s'), supports '?demo=true' or MPP (1500 sats), and returns HTTP 400 if invalid. |
| `audit_mcp_server_manifest` | `POST /api/v1/agent/mcp-manifest-auditor` | 150 sats (L402) | Scans an external MCP server's initial tools/list manifest to detect tool-name shadowing (read_file, bash) and hidden prompt-injection directives in descriptions. Use when vetting a newly discovered third-party MCP server before mounting it into an agent session; for comparing a previously pinned MCP baseline against a live mid-session tools/list response, use detect_mcp_schema_rugpull instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'manifest_json' ('audit_profile' defaults to 'strict'), supports '?demo=true' or L402 (150 sats), and returns HTTP 400 if invalid. |
| `detect_mcp_schema_rugpull` | `POST /api/v1/agent/mcp-rugpull-diff` | 85 sats (L402) | Computes structural diffs between a pinned baseline MCP tools/list snapshot and a live server response to catch mid-session description or schema tampering. Use when verifying that a connected MCP server has not mutated its tool definitions mid-session; for performing a first-time static security audit on a single MCP manifest, use audit_mcp_server_manifest instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'baseline_tools_json' ('current_tools_json' defaults to 'standard'), supports '?demo=true' or L402 (85 sats), and returns HTTP 400 if invalid. |
| `validate_mcp_sampling_request` | `POST /api/v1/agent/mcp-sampling-guard` | 100 sats (L402) | Audits inbound MCP sampling/createMessage callbacks from connected servers to block cross-server context snooping (includeContext='allServers') and token quota hijacking. Use when filtering a connected MCP server's request to sample the host LLM; for scrubbing text returned from a standard synchronous tools/call response, use sanitize_tool_output_stream instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'sampling_request_json' ('max_tokens_ceiling' defaults to '512'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `sanitize_tool_output_stream` | `POST /api/v1/agent/tool-output-firewall` | 75 sats (L402) | Sanitizes untrusted external tool or web-scrape outputs by stripping invisible Unicode Tag characters (U+E0000), neutralizing Markdown tracking image beacons, and defusing indirect prompt overrides. Use when cleaning raw third-party tool outputs or scraped web text before inserting it into the LLM context window; for redacting personal identifiable information (emails, SSNs, keys) from outbound text, use redact_sensitive_pii instead. Read-only edge call (32 KB, 60 RPM): accepts 'raw_tool_output' (with enum defaults), uses '?demo=true' or L402 (75 sats); HTTP 400 if invalid. |
| `redact_sensitive_pii` | `POST /api/v1/scrub-pii` | 150 sats (L402) | Redacts emails, phone numbers, SSNs, credit cards, API keys, and crypto private keys from text before logging or external transmission. Use when stripping personal data or secret credentials from prompts, logs, or outbound messages; for neutralizing indirect prompt injections and invisible Unicode in inbound tool responses, use sanitize_tool_output_stream instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'text' ('redaction_style' defaults to 'typed_token'), supports '?demo=true' or L402 (150 sats), and returns HTTP 400 if invalid. |
| `detect_agent_action_loop` | `POST /api/v1/agent/loop-circuit-breaker` | 70 sats (L402) | Analyzes an agent's recent tool-call trace to detect identical retry spins, A/B state oscillation, and runaway token burn. Use when monitoring multi-step agent execution loops to decide whether to continue or halt and escalate; for inspecting a single command payload for security threats before execution, use verify_agent_command_safety instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'action_trace_json' ('sensitivity' defaults to 'strict_2_repeats'), supports '?demo=true' or L402 (70 sats), and returns HTTP 400 if invalid. |
| `verify_a2a_agent_card` | `POST /api/v1/agent/a2a-card-verifier` | 90 sats (L402) | Verifies a remote agent's A2A /.well-known/agent.json discovery card, checking JWS/DID signature binding, endpoint HTTPS enforcement, and capability spoofing. Use when authenticating a peer autonomous agent before delegating subtasks or exchanging payments over A2A; for auditing an MCP tool server's tools/list manifest rather than a peer agent's A2A card, use audit_mcp_server_manifest instead. Read-only edge call (32 KB, 60 RPM): accepts 'agent_card_json' ('trust_policy' defaults to 'require_https_and_did'), supports '?demo=true' or L402 (90 sats), and returns HTTP 400 if invalid. |
| `audit_outbound_egress_url` | `POST /api/v1/agent/audit-egress-url` | 65 sats (L402) | Inspects outbound URLs and webhook targets before an agent makes HTTP requests to block cloud metadata SSRF (169.254.169.254), RFC1918 private networks, and query-string secret exfiltration. Use when validating a user-supplied or tool-supplied URL before fetching or posting data from an agent; for auditing local shell commands or general prompts, use verify_agent_command_safety instead. Read-only edge call (32 KB, 60 RPM): accepts 'target_url' ('egress_policy' defaults to 'block_private_and_metadata'), supports '?demo=true' or L402 (65 sats), and returns HTTP 400 if invalid. |
| `audit_response_factuality` | `POST /api/v1/agent/hallucination-auditor` | 150 sats (L402) | Cross-references factual claims, numbers, and citations in a draft agent response against retrieved source passages to flag unsupported hallucinations before delivery. Use when verifying that a generated answer is 100% grounded in source evidence before returning it to the user; for scrubbing inbound tool outputs for prompt-injection and invisible Unicode, use sanitize_tool_output_stream instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'claim' ('context' defaults to 'standard'), supports '?demo=true' or L402 (150 sats), and returns HTTP 400 if invalid. |

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
| **5. Context, Code & Solvers (15 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/context-code-solver` | [`stand-out-of-my-sun/diogenes-context-code-solver-mcp`](https://github.com/stand-out-of-my-sun/diogenes-context-code-solver-mcp) |
| **6. Dev, Data & Workflow Utilities (14 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/dev-utilities` | [`stand-out-of-my-sun/diogenes-dev-utilities-mcp`](https://github.com/stand-out-of-my-sun/diogenes-dev-utilities-mcp) |
| **7. Full Master Gateway (All 85 Services)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp` | [`stand-out-of-my-sun/diogenes-micro-gateway`](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway) |

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
