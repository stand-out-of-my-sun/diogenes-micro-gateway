# Diogenes Developer, Data & Workflow Orchestration MCP (`diogenes-dev-utilities-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-dev-utilities-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-dev-utilities-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Developer, Data & Workflow Orchestration MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Autonomous Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 85 gateway endpoints into your LLM's context window, installing this package exposes **only the 14 specialized `dev-utilities` tools** needed for **Developer Tools**:

14 data extraction, schema healing & workflow orchestration tools: malformed JSON healer, JSON Schema type enforcer, unstructured entity extractor, tabular dataset cleaner, O(n) ReDoS-safe regex synthesizer, XML prompt compiler, Python script synthesizer, RFC summarizer, grounded web brief, context compaction verifier, MCP workflow router, escrow arbiter, MPP session planner, and x402 embedding generator.

---

## ⚡ 1-Click Install for Cursor & Claude Desktop

No API keys, user accounts, or local dependencies required. Zero setup — paste directly into your client config:

### 🖱️ Cursor IDE (`.cursor/mcp.json`)
Add to `.cursor/mcp.json` in your project root or global Cursor settings:

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

### 🧠 Claude Desktop (`claude_desktop_config.json`)
Add to `claude_desktop_config.json` (Mac: `~/Library/Application Support/Claude/claude_desktop_config.json` | Windows: `%APPDATA%\Claude\claude_desktop_config.json`):

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

> **Prefer local stdio?** Run via npx:
> ```bash
> npx -y @stand-out-of-my-sun/diogenes-dev-utilities-mcp
> ```

---

## Included Tools in `dev-utilities` (14 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `heal_malformed_json` | `POST /api/v1/agent/json-repair` | 50 sats (L402) | Repairs broken or truncated JSON strings by stripping markdown fences, removing trailing commas, balancing unclosed brackets/quotes, and converting Python literals (None/True/False) into valid RFC 8259 JSON. Use when fixing syntax-broken JSON strings that fail JSON.parse(); for coercing field types and pruning extra properties on already-parseable JSON objects against a target JSON Schema, use enforce_json_schema_types instead. Read-only edge call (32 KB, 60 RPM): accepts 'malformed_json' (with enum defaults), uses '?demo=true' or L402 (50 sats); HTTP 400 if invalid. |
| `enforce_json_schema_types` | `POST /api/v1/agent/schema-enforcer` | 75 sats (L402) | Validates a raw LLM output object against a target JSON Schema, automatically coercing mismatched scalar types (e.g. string '42' to integer 42), injecting schema defaults, and pruning undeclared hallucinated fields. Use when enforcing schema compliance and type safety on structured LLM outputs before passing them to typed APIs; for healing unparseable raw JSON text with broken quotes or trailing commas, use heal_malformed_json instead. Read-only edge call (32 KB, 60 RPM): accepts 'raw_output' (with enum defaults), uses '?demo=true' or L402 (75 sats); HTTP 400 if invalid. |
| `extract_structured_json_entities` | `POST /api/v1/ai/extract` | 150 sats (L402) | Extracts structured JSON records, named entities, dates, and financial figures from unstructured prose, emails, or HTML/Markdown dumps. Use when converting unstructured natural-language text into a structured JSON array of entities; for validating and coercing an existing JSON payload against a formal JSON Schema, use enforce_json_schema_types instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'text' ('extraction_target' defaults to 'general_entities_and_metrics'), supports '?demo=true' or L402 (150 sats), and returns HTTP 400 if invalid. |
| `clean_tabular_dataset` | `POST /api/v1/clean-data` | 100 sats (L402) | Deduplicates repetitive lines or records, normalizes Unicode whitespace, strips HTML/control noise, and canonicalizes tabular text or JSON arrays. Use when cleaning noisy scraped lists, CSV rows, or duplicate log lines before indexing or analysis; for extracting typed JSON fields from free-form prose paragraphs, use extract_structured_json_entities instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'data' ('normalization_mode' defaults to 'exact_match'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `synthesize_safe_regex` | `POST /api/v1/agent/regex-oracle` | 50 sats (L402) | Synthesizes linear-time O(n) regular expressions free of catastrophic backtracking (ReDoS) and validates them against positive and negative test strings. Use when generating and verifying a regular expression pattern for input validation or lexical parsing; for repairing broken JSON syntax directly without writing custom regexes, use heal_malformed_json instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'description' ('flavor' defaults to 'ecmascript_js'), supports '?demo=true' or L402 (50 sats), and returns HTTP 400 if invalid. |
| `compile_xml_agent_prompt` | `POST /api/v1/agent/prompt-compiler` | 100 sats (L402) | Compiles a raw task description into a structured XML system prompt (<role>, <context>, <objective>, <constraints>, <workflow>, <output_format>) engineered to prevent instruction drift. Use when authoring or upgrading a system prompt for an autonomous agent or sub-agent workflow; for mapping a task objective to a concrete sequence of MCP tool calls, use route_mcp_workflow_plan instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'task' ('prompt_style' defaults to 'anthropic_xml_tags'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `synthesize_python_automation_code` | `POST /api/v1/ai/code-gen` | 300 sats (L402) | Synthesizes PEP 8 compliant, self-contained Python 3 scripts, data parsers, and CLI utilities complete with type hints, docstrings, and inline assertion tests. Use when generating a standalone Python automation script or parser from a functional specification; for summarizing existing documentation or codebases into executive bullet points, use summarize_technical_document instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'prompt' ('dependency_policy' defaults to 'stdlib_only'), supports '?demo=true' or L402 (300 sats), and returns HTTP 400 if invalid. |
| `summarize_technical_document` | `POST /api/v1/ai/summarize` | 100 sats (L402) | Condenses long technical specifications, RFCs, research papers, or meeting transcripts into high-density executive bullet points preserving exact figures and decisions. Use when producing a human-readable executive summary of a single provided document; for researching a topic across the live web with Google Search citations, use synthesize_web_intelligence_brief instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'text' ('summary_format' defaults to 'executive_bullets'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `synthesize_web_intelligence_brief` | `POST /api/v1/agent/web-brief` | 200 sats (L402) | Synthesizes a real-time market or technical intelligence brief grounded in live Google Search, returning strict JSON ('executive_summary', 'key_developments', 'sentiment', 'sources'). Use when fetching a structured JSON market/news brief with live web citations and sentiment classification; for summarizing caller-supplied text offline without live web search, use summarize_technical_document instead. Read-only edge call (32 KB, 60 RPM): accepts 'topic' ('focus' defaults to 'technical_and_market_catalysts'), supports '?demo=true' or L402 (200 sats), and returns HTTP 400 if invalid. |
| `verify_context_compaction_fidelity` | `POST /api/v1/agent/context-compaction-verifier` | 90 sats (L402) | Audits a compacted conversation summary against the original full context to detect dropped user constraints, lost file paths, altered numbers, or missing pending tasks. Use when verifying that an LLM context-compaction summary retained all task-critical facts before truncating history; for generating a new executive summary from a raw technical document, use summarize_technical_document instead. Read-only edge call (32 KB, 60 RPM): accepts 'original_context' ('compacted_summary' defaults to 'standard'), supports '?demo=true' or L402 (90 sats), and returns HTTP 400 if invalid. |
| `route_mcp_workflow_plan` | `POST /api/v1/agent/mcp-router` | 100 sats (L402) | Maps a natural-language agent goal to an ordered sequence of Diogenes MCP tool calls with exact endpoint paths, JSON-RPC 2.0 payloads, and cumulative satoshi cost estimates. Use when planning which MCP tools to chain together to solve a multi-step objective within a satoshi budget; for compiling a static XML system prompt rather than an executable MCP tool call sequence, use compile_xml_agent_prompt instead. Read-only edge call (32 KB, 60 RPM): accepts 'objective' ('budget_preference' defaults to 'lowest_sats_deterministic'), uses '?demo=true' or L402 (100 sats); HTTP 400 if invalid. |
| `arbitrate_agent_deliverable_escrow` | `POST /api/v1/mpp/agent-escrow-arbiter` | 150 sats (MPP) | Evaluates a worker agent's submitted task deliverable against agreed contract acceptance criteria to issue a deterministic escrow settlement verdict ('RELEASE_FUNDS_TO_WORKER_AGENT', 'REQUEST_REVISION', or 'REFUND_CLIENT'). Use when settling multi-agent bounties or verifying subcontractor deliverables before releasing MPP/L402 escrow funds; for checking syntactic JSON Schema property types without evaluating semantic contract terms, use enforce_json_schema_types instead. Read-only call (32 KB, 60 RPM): accepts 'deliverable' (with enum defaults), uses '?demo=true' or MPP (150 sats); HTTP 400 if invalid. |
| `infer_mpp_streaming_session` | `POST /api/v1/mpp/session-infer` | 500 sats (MPP) | Initializes a Base USDC Machine Payments Protocol (MPP) metered inference session, allocating a streaming token quota and returning a step-by-step execution plan. Use when running session-metered agent planning settled via Base EVM MPP 'Payment-Challenge' headers; for mapping a task goal to L402 MCP tool calls without opening an MPP streaming session, use route_mcp_workflow_plan instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'task' ('token_quota_tier' defaults to 'compact_1024'), supports '?demo=true' or MPP (500 sats), and returns HTTP 400 if invalid. |
| `generate_x402_vector_embeddings` | `POST /api/v1/x402/embeddings` | 100 sats (x402) | Generates normalized high-dimensional semantic vector embeddings settled via Solana SPL USDC ('x402' protocol headers) for decentralized RAG pipelines. Use when computing text embeddings paid via Solana USDC x402 signatures rather than Bitcoin Lightning; for extracting discrete JSON entities from unstructured text, use extract_structured_json_entities instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'text' ('encoding_format' defaults to 'float_array'), supports '?demo=true' or x402 (100 sats), and returns HTTP 400 if invalid. |

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
