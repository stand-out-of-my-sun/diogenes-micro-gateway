# Diogenes Agent Core Essentials MCP (`diogenes-agent-core-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-agent-core-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-agent-core-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Diogenes Agent Core Essentials MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Microservice Gateway](https://diogenesgateway.com).

Instead of loading all 108 gateway endpoints into your LLM's context window, installing this package exposes **only the 10 specialized `agent-core` tools** needed for **Developer Tools**:

Curated 10-tool high-utility MCP package containing the most frequently called agent tools (clean markdown, SQL AST validation, malformed JSON repair, context pruning, mempool feerates, and PII redaction). 100% free developer tier.

---

## ⚡ 1-Click Install for Cursor, Claude Desktop, Zed & Windsurf

No API keys, user accounts, or local dependencies required. Zero setup — install via 1-line script or paste directly into your client config:

### 🚀 1-Line Terminal Auto-Installer
```bash
# Auto-configures Cursor, Claude Desktop, Zed, and Windsurf
curl -sSL "https://diogenesgateway.com/install.sh" | bash

# Or with your authenticated prepaid session key:
curl -sSL "https://diogenesgateway.com/install.sh?key=dg_sec_..." | bash
```

### 🖱️ Cursor IDE (`.cursor/mcp.json`)
Add to `.cursor/mcp.json` in your project root or global Cursor settings:

```json
{
  "mcpServers": {
    "diogenes-agent-core": {
      "transport": "streamable-http",
      "url": "https://diogenesgateway.com/mcp/agent-core"
    }
  }
}
```

### 🧠 Claude Desktop (`claude_desktop_config.json`)
Add to `claude_desktop_config.json` (Mac: `~/Library/Application Support/Claude/claude_desktop_config.json` | Windows: `%APPDATA%\Claude\claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "diogenes-agent-core": {
      "transport": "streamable-http",
      "url": "https://diogenesgateway.com/mcp/agent-core"
    }
  }
}
```

> **Prefer local stdio?** Run via npx:
> ```bash
> npx -y @stand-out-of-my-sun/diogenes-agent-core-mcp
> ```

---

## 💳 Instant Stripe Card Checkout & Prepaid Keys (`<0.1ms` Fast Path)

Need high-throughput execution without per-call on-chain latency or wallet confirmations?
- **Instant Fiat Checkout**: Top up via **Card, Apple Pay, or Google Pay** (\$5 Starter, \$20 Builder, \$100 Fleet with 10%–25% bonus credits) at [https://diogenesgateway.com/#prepay-checkout-widget](https://diogenesgateway.com#prepay-checkout-widget).
- **Session Keys (`dg_sec_...`)**: Pass `Authorization: Bearer dg_sec_...` for `<0.1ms` Cloudflare KV resolution, rate-limit exemption, and automatic sub-cent deduction.
- **Multi-Currency Isolated Balances**: Strict single-asset accounting across USD and 6 crypto rails. Zero cross-currency conversions.
- **15% Referral Credit Bonus**: Earn a 15% Referral Credit Bonus on referred users and agent swarms via `dg_ref_...`.

---

## Included Tools in `agent-core` (10 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `extract_clean_markdown` | `POST /api/v1/extract/clean-markdown` | Free Developer Tier (0 sats) | Converts raw HTML pages into clean, boilerplate-free, LLM-optimized Markdown with preserved hyperlinks and headings. Use when ingesting raw web documents or blog posts into agent context windows; for isolating tabular data into structured datasets, use parse_html_tables instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'html_content' ('conversion_mode' defaults to 'clean_semantic_article'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `validate_sql_query_ast` | `POST /api/v1/agent/sql-guard` | Free Developer Tier (0 sats) | Performs static AST syntax tree parsing on SQL statements to verify strictly read-only SELECT clauses and reject mutations, stacked queries, or comment bypasses. Use when verifying that an agent-authored SQL statement is strictly read-only before running it on a database; for screening non-SQL bash commands or general agent prompts, use verify_agent_command_safety instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'sql_statement' ('dialect' defaults to 'postgres'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `heal_malformed_json` | `POST /api/v1/dev/heal-json` | Free Developer Tier (0 sats) | Deterministic JSON syntax repair: normalizes quotes, unclosed brackets, and boolean literals into compliant RFC 8259 JSON structure without data deletion. Use when fixing syntax-broken JSON strings that fail JSON.parse(); for coercing field types and verifying properties on already-parseable JSON objects against a target JSON Schema, use enforce_json_schema_types instead. Read-only edge call (32 KB, 60 RPM): accepts 'malformed_json' (with enum defaults), uses '?demo=true' or L402 (15 sats); HTTP 400 if invalid. |
| `prune_context_skeleton` | `POST /api/v1/context/prune-skeleton` | Free Developer Tier (0 sats) | Compresses large source files, logs, or transcripts by 50\u201380% to fit an LLM context budget while preserving 100% of function/class/type signatures, imports, error frames, and query-matched lines. Use when shrinking oversized source files or logs before feeding them into an LLM prompt; for counting BPE tokens across prompt segments and calculating multi-model inference costs without altering text, use plan_context_token_budget instead. Read-only edge call (32 KB, 60 RPM): accepts 'content' (with enum defaults), uses '?demo=true' or L402 (10 sats); HTTP 400 if invalid. |
| `estimate_bitcoin_mempool_fees` | `POST /api/v1/mempool-fee` | Free Developer Tier (0 sats) | Fetches real-time Bitcoin mainnet mempool feerate recommendations in satoshis per virtual byte (sat/vB) across fastest, half-hour, hour, and economy confirmation tiers. Use when checking current Bitcoin L1 network congestion before broadcasting an on-chain BTC transaction; for calculating exact SegWit/Taproot UTXO batch consolidation vByte weights and dust thresholds, use plan_bitcoin_utxo_consolidation instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'confirmation_target', supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `synthesize_safe_regex` | `POST /api/v1/dev/regex-oracle` | Free Developer Tier (0 sats) | Synthesizes linear-time O(n) regular expressions free of catastrophic backtracking (ReDoS) and validates them against positive and negative test strings. Use when generating and verifying a regular expression pattern for input validation or lexical parsing; for repairing broken JSON syntax directly without writing custom regexes, use heal_malformed_json instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'description' ('flavor' defaults to 'ecmascript_js'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `redact_sensitive_pii` | `POST /api/v1/agent/scrub-pii` | Free Developer Tier (0 sats) | Redacts emails, phone numbers, SSNs, credit cards, API keys, and crypto private keys from text before logging or external transmission. Use when stripping personal data or secret credentials from prompts, logs, or outbound messages; for neutralizing indirect prompt injections and invisible Unicode in inbound tool responses, use sanitize_tool_output_stream instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'text' ('redaction_style' defaults to 'typed_token'), supports '?demo=true' or L402 (25 sats), and returns HTTP 400 if invalid. |
| `verify_agent_command_safety` | `POST /api/v1/agent/command-gate` | Free Developer Tier (0 sats) | Evaluates untrusted agent prompts, bash commands, and tool arguments to block prompt injection, destructive shell commands, and private-key exfiltration. Use when screening a general shell command or user prompt before autonomous agent execution; for statically validating SQL database queries at the AST level, use validate_sql_query_ast instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'payload' ('action_type' defaults to 'bash_command'), supports '?demo=true' or L402 (20 sats), and returns HTTP 400 if invalid. |
| `expand_search_queries` | `POST /api/v1/search/query-expansion` | Free Developer Tier (0 sats) | Generates targeted Boolean queries, semantic synonym variations, and sub-question expansions from an ambiguous prompt. Use when overcoming query vocabulary mismatches and expanding search recall across academic, code, or patent databases; for scoping queries to domain categories, use filter_domain_intelligence instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'base_query' ('expansion_strategy' defaults to 'boolean_operators'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `plan_context_token_budget` | `POST /api/v1/context/token-budget` | Free Developer Tier (0 sats) | Counts subword BPE tokens across prompt segments, detects high-priority instructions trapped in the 35%\u201372% Lost-in-the-Middle attention trough, and calculates USD/satoshi costs across frontier LLMs. Use when auditing prompt token budgets, reordering prompt sections for primacy/recency attention, or comparing model API costs; for actively compressing and stripping low-salience lines from a single large file, use prune_context_skeleton instead. Read-only edge call (32 KB, 60 RPM): accepts 'segments_json' (with enum defaults), uses '?demo=true' or L402 (10 sats); HTTP 400 if invalid. |

> **Free Account-Less Demo Mode**: Append `?demo=true` to any REST endpoint above for an instant HTTP 200 schema preview at zero cost.

---

## 🚀 Upgrade to Frontier AI Models & Autonomous Agent Pipelines

Looking for multi-model reasoning or live web retrieval? Pair `agent-core` with our paid Gemini Suite & Frontier Reasoning packages (51 models including Gemini 4 Argon, Gemini 3.1 Pro, DeepSeek R1, Qwen 2.5 Coder, Antigravity Agent, Deep Research Pro, and Web Scraping) starting at only 10 sats / 1 GRLC / \$0.01 with account-less pay-per-call micropayments:
👉 [Explore Full Gateway & Frontier AI Suite](https://diogenesgateway.com)

---

## Other Modular Diogenes MCP Packages

Install only the domain packages relevant to your workflow:

| Package | Scoped MCP Endpoint | Spoke Repository |
| :--- | :--- | :--- |
| **⭐ Agent Core Essentials (Curated Pack)** | `https://diogenesgateway.com/mcp/agent-core` | [`stand-out-of-my-sun/diogenes-agent-core-mcp`](https://github.com/stand-out-of-my-sun/diogenes-agent-core-mcp) |
| **1. Agent Guardrails & Sandbox (12 Tools)** | `https://diogenesgateway.com/mcp/agent-guardrails` | [`stand-out-of-my-sun/diogenes-agent-guardrails-mcp`](https://github.com/stand-out-of-my-sun/diogenes-agent-guardrails-mcp) |
| **2. Web3, DeFi & 402 Security (15 Tools)** | `https://diogenesgateway.com/mcp/web3-security` | [`stand-out-of-my-sun/diogenes-web3-security-mcp`](https://github.com/stand-out-of-my-sun/diogenes-web3-security-mcp) |
| **3. Gemini Suite & AI Agents (15 Tools)** | `https://diogenesgateway.com/mcp/gemini-suite` | [`stand-out-of-my-sun/diogenes-gemini-suite-mcp`](https://github.com/stand-out-of-my-sun/diogenes-gemini-suite-mcp) |
| **4. Context, Code & Solvers (15 Tools)** | `https://diogenesgateway.com/mcp/context-code-solver` | [`stand-out-of-my-sun/diogenes-context-code-solver-mcp`](https://github.com/stand-out-of-my-sun/diogenes-context-code-solver-mcp) |
| **5. Dev, Data & Workflow Utilities (14 Tools)** | `https://diogenesgateway.com/mcp/dev-utilities` | [`stand-out-of-my-sun/diogenes-dev-utilities-mcp`](https://github.com/stand-out-of-my-sun/diogenes-dev-utilities-mcp) |
| **6. Web Extraction, Readability & Markdown Engine (12 Tools)** | `https://diogenesgateway.com/mcp/web-scraping-engine` | [`stand-out-of-my-sun/diogenes-web-scraping-engine-mcp`](https://github.com/stand-out-of-my-sun/diogenes-web-scraping-engine-mcp) |
| **7. Neural Search, Grounded Research & Deep Intelligence (12 Tools)** | `https://diogenesgateway.com/mcp/neural-search-engine` | [`stand-out-of-my-sun/diogenes-neural-search-engine-mcp`](https://github.com/stand-out-of-my-sun/diogenes-neural-search-engine-mcp) |
| **8. Database Intelligence, SQL Engine & Schema Guard (12 Tools)** | `https://diogenesgateway.com/mcp/database-intelligence` | [`stand-out-of-my-sun/diogenes-database-intelligence-mcp`](https://github.com/stand-out-of-my-sun/diogenes-database-intelligence-mcp) |
| **9. Full Master Gateway (All 108 Services)** | `https://diogenesgateway.com/mcp` | [`stand-out-of-my-sun/diogenes-micro-gateway`](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway) |

---

## TensorBlock & MCP Index Profile Metadata

| Field | Value |
| :--- | :--- |
| **Category** | `Developer Tools` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenesgateway.com/mcp/agent-core` |
| **Manifest** | `https://diogenesgateway.com/.well-known/mcp/agent-core.json` |
| **Health Check** | `https://diogenesgateway.com/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional Stripe Card checkout or 6 crypto payment rails for production calls: dg_sec_... prepaid keys, L402, x402, Base MPP, Garlicoin 0-Conf, BSC WGRLC, XRPL XRP) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenesgateway.com/.well-known/tensorblock.json` & `https://diogenesgateway.com/.well-known/mcp/agent-core.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenesgateway.com/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-agent-core-mcp/issues` |
