# Diogenes Autonomous Microservice Gateway (`diogenes-micro-gateway`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Autonomous Microservice Gateway** (`https://diogenes-micro-gateway.corinth.workers.dev`) is an account-less, multi-protocol AI & Web3 edge gateway delivering:
1. **Account-Less Access to the Complete Google Gemini Suite (45 Models) & Autonomous Agents**: Instant pay-per-request access to **Antigravity Agent**, **Deep Research Pro**, **Nano Banana Pro (Gemini 3 Pro Image)**, **Nano Banana**, **Gemini 4 Argon**, and **Gemini 3.1 Pro** with zero API keys, zero accounts, and zero monthly subscriptions.
2. **85 Live Autonomous Edge Microservices**: Pre-execution SQL/code/MCP security guardrails, smart contract vulnerability audits, Solana/EVM token risk oracles, HTTP 402 invoice fraud verification, and cross-chain bridge routing settled via **Bitcoin Lightning (L402)**, **Solana USDC (x402)**, **Base EVM USDC (MPP)**, and **Streamable HTTP MCP (`/mcp`)**.
3. **14 Dedicated EVE: Frontier Sui Move Microservices**: Sui Move Smart Assembly coder & auditor, Smart Gate route & toll planner, Lagrange Network Node gigajoule (GJ) optimizer, SSU Automated Market Maker, Killmail threat intelligence, Smart Turret target matrix, Vault zkLogin character verifier, Constellation sovereignty fuel radar, and Sui Programmable Transaction Block (PTB) simulator.

---

## Newly Released Batch of Edge Microservices

| Microservice | Endpoint | Price | Capability |
| :--- | :--- | :--- | :--- |
| **Multi-Agent Task Deliverable & Contract Fulfillment Escrow Arbiter** | `POST /api/v1/mpp/agent-escrow-arbiter` | $0.05 USDC (MPP) | Evaluates a worker agent's submitted task deliverable against agreed contract acceptance criteria to issue a deterministic escrow settlement verdict ('RELEASE_FUNDS_TO_WORKER_AGENT', 'REQUEST_REVISION', or 'REFUND_CLIENT'). Use when settling multi-agent bounties or verifying subcontractor deliverables before releasing MPP/L402 escrow funds; for checking syntactic JSON Schema property types without evaluating semantic contract terms, use enforce_json_schema_types instead. Read-only call (32 KB, 60 RPM): accepts 'deliverable' (with enum defaults), uses '?demo=true' or MPP (150 sats); HTTP 400 if invalid. |
| **Autonomous Goal-to-MCP Tool Sequence Router & Cost Planner** | `POST /api/v1/agent/mcp-router` | 100 sats (L402) | Maps a natural-language agent goal to an ordered sequence of Diogenes MCP tool calls with exact endpoint paths, JSON-RPC 2.0 payloads, and cumulative satoshi cost estimates. Use when planning which MCP tools to chain together to solve a multi-step objective within a satoshi budget; for compiling a static XML system prompt rather than an executable MCP tool call sequence, use compile_xml_agent_prompt instead. Read-only edge call (32 KB, 60 RPM): accepts 'objective' ('budget_preference' defaults to 'lowest_sats_deterministic'), uses '?demo=true' or L402 (100 sats); HTTP 400 if invalid. |
| **Pre/Post Context Compaction Information Retention Verifier** | `POST /api/v1/agent/context-compaction-verifier` | 90 sats (L402) | Audits a compacted conversation summary against the original full context to detect dropped user constraints, lost file paths, altered numbers, or missing pending tasks. Use when verifying that an LLM context-compaction summary retained all task-critical facts before truncating history; for generating a new executive summary from a raw technical document, use summarize_technical_document instead. Read-only edge call (32 KB, 60 RPM): accepts 'original_context' ('compacted_summary' defaults to 'standard'), supports '?demo=true' or L402 (90 sats), and returns HTTP 400 if invalid. |
| **Strict JSON Schema Validator, Type Coercer & Field Pruner** | `POST /api/v1/agent/schema-enforcer` | 75 sats (L402) | Validates a raw LLM output object against a target JSON Schema, automatically coercing mismatched scalar types (e.g. string '42' to integer 42), injecting schema defaults, and pruning undeclared hallucinated fields. Use when enforcing schema compliance and type safety on structured LLM outputs before passing them to typed APIs; for healing unparseable raw JSON text with broken quotes or trailing commas, use heal_malformed_json instead. Read-only edge call (32 KB, 60 RPM): accepts 'raw_output' (with enum defaults), uses '?demo=true' or L402 (75 sats); HTTP 400 if invalid. |
| **Agent State Graph Differ, Belief Conflict Resolver & SHA-256 Hasher** | `POST /api/v1/agent/memory-checkpoint-diff` | 50 sats (L402) | Computes structural diffs between two agent state snapshots ('added_keys', 'mutated_keys', 'removed_keys'), flags boolean belief contradictions, generates an RFC 7396 JSON Merge Patch delta, and computes a canonical checkpoint hash. Use when checkpointing agent state or transmitting minimal RFC 7396 state deltas across multi-agent handoffs; for counting BPE tokens and auditing Lost-in-the-Middle prompt attention, use plan_context_token_budget instead. Read-only call (32 KB, 60 RPM): accepts 'previous_state_json' (with enum defaults), uses '?demo=true' or L402 (50 sats); HTTP 400 if invalid. |
| **Seeded Mulberry32 Monte Carlo Percentile, VaR & Tail-Risk Simulator** | `POST /api/v1/solver/monte-carlo-risk` | 70 sats (L402) | Runs a reproducible seeded Mulberry32 Monte Carlo simulation over uncertain cost, latency, or duration variables to compute P10/P50/P90/P95 percentiles, Value-at-Risk (VaR), and CVaR. Use when modeling stochastic uncertainty, tail risk (VaR/CVaR), and probability of meeting a budget or SLA target; for evaluating deterministic single-point algebraic formulas or exact NPV/IRR cashflows, use evaluate_deterministic_math instead. Read-only edge call (32 KB, 60 RPM): accepts 'variables_json' (with enum defaults), uses '?demo=true' or L402 (70 sats); HTTP 400 if invalid. |
| **JSON Schema & Function Signature Boundary-Value Test Vector Generator** | `POST /api/v1/code/boundary-test-vectors` | 65 sats (L402) | Synthesizes deterministic unit-test vectors from a JSON Schema or function signature covering valid equivalence partitions, numeric/length boundaries, and adversarial Unicode/null inputs. Use when generating exhaustive edge-case unit test payloads and fuzz vectors for an API endpoint or function; for healing and applying unified diffs or search/replace edits to source code, use apply_fuzzy_code_patch instead. Read-only edge call (32 KB, 60 RPM): accepts 'schema_or_signature_json' (with enum defaults), uses '?demo=true' or L402 (65 sats); HTTP 400 if invalid. |
| **OpenAPI 3.1, JSON Schema & MCP Contract Breaking-Change Detector** | `POST /api/v1/code/openapi-breaking-changes` | 75 sats (L402) | Compares baseline and candidate OpenAPI 3.1 specs, JSON Schemas, or MCP tool manifests to detect breaking changes (removed fields, new required inputs, narrowed enums, type mutations). Use when auditing API, JSON Schema, or MCP contract revisions for backward compatibility before deployment; for compiling new TypeScript, Zod, and Pydantic schemas from a single sample JSON payload, use compile_polyglot_type_schemas instead. Read-only edge call (32 KB, 60 RPM): accepts 'baseline_schema_json' (with enum defaults), uses '?demo=true' or L402 (75 sats); HTTP 400 if invalid. |

---

## 1-Click Modular MCP Packages

Instead of loading all 85 gateway endpoints into your LLM's context window at once, connect Cursor, Claude Desktop, Zed, or Windsurf to a **purpose-built domain package** (12–15 `verb_noun` tools each, `100%` schema description coverage, `outputSchema`, and zero tool shadowing):

| Domain Package | Scoped 1-Click MCP Endpoint | Dedicated Spoke Repository | Tools |
| :--- | :--- | :--- | :--- |
| **1. EVE: Frontier Sui Move Suite** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/eve-frontier` | [`stand-out-of-my-sun/diogenes-eve-frontier-mcp`](https://github.com/stand-out-of-my-sun/diogenes-eve-frontier-mcp) | **14 Tools** — Assembly state inspector, Tribe standings auditor, Move coder, Gate ACL compiler, PTB simulator, zkLogin, route planner, Lagrange GJ & siege sims, fuel radar, SSU pricer & arbitrage, killmail & turret matrix |
| **2. Agent Guardrails & Sandbox** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/agent-guardrails` | [`stand-out-of-my-sun/diogenes-agent-guardrails-mcp`](https://github.com/stand-out-of-my-sun/diogenes-agent-guardrails-mcp) | **12 Tools** — Command gate, SQL AST validator, Python sandbox, MCP manifest & rug-pull auditors, sampling firewall, output scrubber, PII redactor, loop breaker, A2A card verifier, egress SSRF guard, factuality auditor |
| **3. Web3, DeFi & 402 Security** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/web3-security` | [`stand-out-of-my-sun/diogenes-web3-security-mcp`](https://github.com/stand-out-of-my-sun/diogenes-web3-security-mcp) | **15 Tools** — EVM/Move contract auditor, Solana Anchor CPI scanner, SPL risk & liquidity, whale tracker, Jito fee estimator, EIP-712 & EVM calldata decoders, MEV evaluator, address poisoning, 402 verifier, UTXO planner, bridge comparator |
| **4. Gemini Suite & Autonomous Agents** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/gemini-suite` | [`stand-out-of-my-sun/diogenes-gemini-suite-mcp`](https://github.com/stand-out-of-my-sun/diogenes-gemini-suite-mcp) | **15 Tools** — All 45 Google Gemini models (Gemini 4 Argon, 3.1 Pro, 3.8 Flash), Antigravity Agent, Deep Research Pro, Computer Use, Grounded Search & Maps, Nano Banana Pro, Veo 3, Lyria 3, TTS & Live Audio |
| **5. Context, Code & Solvers** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/context-code-solver` | [`stand-out-of-my-sun/diogenes-context-code-solver-mcp`](https://github.com/stand-out-of-my-sun/diogenes-context-code-solver-mcp) | **15 Tools** — AST context pruner, BPE token budget planner, BM25+RRF+MMR reranker, fuzzy diff patcher, AST symbol & complexity analyzer, Tarjan cycle detector, stacktrace isolator, polyglot type compiler, OpenAPI breaking-change detector, boundary test generator, math/IRR, CPM scheduler, A/B judge, Monte Carlo VaR, memory differ |
| **6. Dev, Data & Workflow Utilities** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/dev-utilities` | [`stand-out-of-my-sun/diogenes-dev-utilities-mcp`](https://github.com/stand-out-of-my-sun/diogenes-dev-utilities-mcp) | **14 Tools** — Malformed JSON healer, JSON Schema type enforcer, entity extractor, dataset cleaner, O(n) ReDoS regex synthesizer, XML prompt compiler, Python synthesizer, RFC summarizer, web brief, compaction verifier, MCP router, escrow arbiter, MPP session & x402 embeddings |
| **7. Full Master Gateway** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp` | [`stand-out-of-my-sun/diogenes-micro-gateway`](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway) | **All 85 Tools** (`130` Total Capabilities) |

---

## Model Context Protocol (MCP) & Public Directory Profiles

Diogenes Gateway exposes **85 production autonomous tools** natively via **Streamable HTTP** (`https://diogenes-micro-gateway.corinth.workers.dev/mcp`) for Cursor, Claude Desktop, Windsurf, VS Code, and autonomous agents:

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
