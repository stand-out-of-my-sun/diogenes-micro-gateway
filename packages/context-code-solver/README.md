# Diogenes Context Compression, Code Patching & Deterministic Solver MCP (`diogenes-context-code-solver-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-context-code-solver-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-context-code-solver-mcp)
[![M8ven Score](https://m8ven.ai/badge/mcp/stand-out-of-my-sun-diogenes-context-code-solver-mcp-16sosr?v=c134b43763bd8c6369b562ceee13381c)](https://m8ven.ai/mcp/stand-out-of-my-sun-diogenes-context-code-solver-mcp-16sosr?s=readme)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Context Compression, Code Patching & Deterministic Solver MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 121 gateway endpoints into your LLM's context window, installing this package exposes **only the 15 specialized `context-code-solver` tools** needed for **Context, Code & Deterministic Solvers**:

15 deterministic AI agent & developer tools: AST context skeleton pruner, BPE token budget planner, BM25+RRF+MMR hybrid reranker, self-healing fuzzy diff patcher, polyglot AST symbol & complexity analyzer, Tarjan circular dependency detector, stack-trace root-cause isolator, polyglot TypeScript/Zod/Pydantic compiler, Shunting-Yard math & IRR/NPV solver, Critical Path (CPM) scheduler, Welch/Bayesian A/B judge, RFC 7396 memory differ, OpenAPI breaking-change detector, boundary test-vector generator, and seeded Monte Carlo VaR/CVaR simulator.

---

## ⚡ 1-Click Install for Cursor & Claude Desktop

No API keys, user accounts, or local dependencies required. Zero setup — paste directly into your client config:

### 🖱️ Cursor IDE (`.cursor/mcp.json`)
Add to `.cursor/mcp.json` in your project root or global Cursor settings:

```json
{
  "mcpServers": {
    "diogenes-context-code-solver": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/context-code-solver"
    }
  }
}
```

### 🧠 Claude Desktop (`claude_desktop_config.json`)
Add to `claude_desktop_config.json` (Mac: `~/Library/Application Support/Claude/claude_desktop_config.json` | Windows: `%APPDATA%\Claude\claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "diogenes-context-code-solver": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/context-code-solver"
    }
  }
}
```

> **Prefer local stdio?** Run via npx:
> ```bash
> npx -y @stand-out-of-my-sun/diogenes-context-code-solver-mcp
> ```

---

## Included Tools in `context-code-solver` (15 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `prune_context_skeleton` | `POST /api/v1/context/smart-pruner` | 50 sats (L402) | Compresses large source files, logs, or transcripts by 50–80% to fit an LLM context budget while preserving 100% of function/class/type signatures, imports, error frames, and query-matched lines. Use when shrinking oversized source files or logs before feeding them into an LLM prompt; for counting BPE tokens across prompt segments and calculating multi-model inference costs without altering text, use plan_context_token_budget instead. Read-only edge call (32 KB, 60 RPM): accepts 'content' (with enum defaults), uses '?demo=true' or L402 (50 sats); HTTP 400 if invalid. |
| `plan_context_token_budget` | `POST /api/v1/context/token-budget-planner` | 30 sats (L402) | Counts subword BPE tokens across prompt segments, detects high-priority instructions trapped in the 35%–72% Lost-in-the-Middle attention trough, and calculates USD/satoshi costs across frontier LLMs. Use when auditing prompt token budgets, reordering prompt sections for primacy/recency attention, or comparing model API costs; for actively compressing and stripping low-salience lines from a single large file, use prune_context_skeleton instead. Read-only edge call (32 KB, 60 RPM): accepts 'segments_json' (with enum defaults), uses '?demo=true' or L402 (30 sats); HTTP 400 if invalid. |
| `rerank_hybrid_rag_chunks` | `POST /api/v1/context/hybrid-reranker` | 50 sats (L402) | Reranks and deduplicates candidate RAG or retrieval passages against a search prompt using Okapi BM25 (k1=1.5, b=0.75), Reciprocal Rank Fusion (RRF), and Maximal Marginal Relevance (MMR) Jaccard diversity filtering. Use when selecting the top-K highest-signal, non-redundant passages from vector search or grep results; for compressing a single contiguous source file while keeping its original line order, use prune_context_skeleton instead. Read-only edge call (32 KB, 60 RPM): accepts 'search_prompt' ('documents_json' defaults to 'standard'), uses '?demo=true' or L402 (50 sats); HTTP 400 if invalid. |
| `apply_fuzzy_code_patch` | `POST /api/v1/code/fuzzy-diff-patcher` | 75 sats (L402) | Applies unified diffs (@@ ... @@) or SEARCH/REPLACE blocks to source code using sliding-window token similarity to resolve drifted line numbers, align indentation, and verify bracket balance. Use when healing and applying a code edit or diff that failed exact line matching due to line-number drift or whitespace differences; for inspecting function signatures, call trees, and cyclomatic complexity without modifying code, use analyze_ast_symbol_graph instead. Read-only call (32 KB, 60 RPM): accepts 'original_code' (with enum defaults), uses '?demo=true' or L402 (75 sats); HTTP 400 if invalid. |
| `analyze_ast_symbol_graph` | `POST /api/v1/code/ast-symbol-graph` | 75 sats (L402) | Static lexer and AST parser only (zero execution or evaluation): extracts imports, exports, classes, interfaces, and functions with line numbers, intra-file call edges, McCabe cyclomatic complexity, and Halstead volume across TypeScript, Python, Rust, Go, and Move. Use when mapping internal functions, call graphs, and complexity hotspots of a source file before refactoring; for analyzing cross-file import DAGs and circular dependencies, use audit_module_dependency_cycles instead. Read-only call (32 KB, 60 RPM): accepts 'source_text' (with enum defaults), uses '?demo=true' or L402 (75 sats); HTTP 400 if invalid. |
| `audit_module_dependency_cycles` | `POST /api/v1/code/dependency-cycle-audit` | 75 sats (L402) | Runs Tarjan's Strongly Connected Components (SCC) algorithm on a module import map to detect circular dependencies, compute parallel topological build waves, and trace downstream change blast radius. Use when auditing multi-file import graphs for circular cycles or determining which downstream files must be re-tested after an edit; for extracting function-level symbols and cyclomatic complexity inside a single source file, use analyze_ast_symbol_graph instead. Read-only call (32 KB, 60 RPM): accepts 'modules_json' (with enum defaults), uses '?demo=true' or L402 (75 sats); HTTP 400 if invalid. |
| `isolate_stacktrace_root_cause` | `POST /api/v1/code/stacktrace-root-cause` | 50 sats (L402) | Parses noisy CI/terminal logs and multi-language stack traces (Node/TS, Python, Rust, Go), strips node_modules/stdlib frames to isolate the innermost failing user-code frame, and clusters repetitive logs into Drain templates. Use when triage-debugging test failures, crash dumps, or repetitive server error logs; for compressing general source code files or prose transcripts, use prune_context_skeleton instead. Read-only edge call (32 KB, 60 RPM): accepts 'raw_log' ('runtime_hint' defaults to 'auto_detect'), supports '?demo=true' or L402 (50 sats), and returns HTTP 400 if invalid. |
| `compile_polyglot_type_schemas` | `POST /api/v1/code/polyglot-type-compiler` | 60 sats (L402) | Inspects a sample JSON payload (inferring UUID, ISO-8601 datetime, email, integer vs float, and array item types) and compiles strict TypeScript interfaces, Zod schemas, Python Pydantic v2 models, and JSON Schema Draft 2020-12. Use when generating static type definitions and runtime validators in TypeScript and Python from a sample JSON response; for extracting existing function/class symbols and complexity metrics from source code, use analyze_ast_symbol_graph instead. Read-only call (32 KB, 60 RPM): accepts 'sample_json' (with enum defaults), uses '?demo=true' or L402 (60 sats); HTTP 400 if invalid. |
| `evaluate_deterministic_math` | `POST /api/v1/solver/deterministic-math` | 40 sats (L402) | Strict Shunting-Yard AST arithmetic parser with zero eval() or dynamic code execution: evaluates algebraic formulas and computes exact financial NPV, Newton-Raphson IRR, Kelly criterion, and dataset stats. Use when computing exact arithmetic formulas, cashflow NPV/IRR, or descriptive statistics without LLM floating-point guesswork; for running two-sample A/B hypothesis tests, use evaluate_ab_statistical_significance instead. Read-only edge call (32 KB, 60 RPM): accepts 'math_formula' ('precision_digits' defaults to '2_decimals'), uses '?demo=true' or L402 (40 sats); HTTP 400 if invalid. |
| `schedule_critical_path_tasks` | `POST /api/v1/solver/constraint-scheduler` | 80 sats (L402) | Solves a task dependency DAG via the Critical Path Method (CPM) to compute ES/EF/LS/LF, Total Float/Slack, optimal makespan, and the Critical Path. Use when scheduling dependent engineering milestones or workflow steps to find the minimum project duration and zero-slack bottleneck path; for detecting circular code imports and file blast radius without task durations, use audit_module_dependency_cycles instead. Read-only edge call (32 KB, 60 RPM): accepts 'tasks_json' ('time_unit' defaults to 'minutes'), supports '?demo=true' or L402 (80 sats), and returns HTTP 400 if invalid. |
| `evaluate_ab_statistical_significance` | `POST /api/v1/solver/statistical-ab-judge` | 60 sats (L402) | Computes Welch's two-sample t-test or two-proportion z-test, returning two-tailed p-values, Cohen's d effect size, relative lift %, and Bayesian P(Treatment > Control). Use when determining whether a prompt change, model benchmark, or A/B experiment produced a statistically significant improvement; for evaluating single algebraic formulas or NPV/IRR cashflows, use evaluate_deterministic_math instead. Read-only edge call (32 KB, 60 RPM): accepts 'control_json' ('treatment_json' defaults to 'standard'), supports '?demo=true' or L402 (60 sats), and returns HTTP 400 if invalid. |
| `detect_openapi_breaking_changes` | `POST /api/v1/code/openapi-breaking-changes` | 75 sats (L402) | Compares baseline and candidate OpenAPI 3.1 specs, JSON Schemas, or MCP tool manifests to detect breaking changes (removed fields, new required inputs, narrowed enums, type mutations). Use when auditing API, JSON Schema, or MCP contract revisions for backward compatibility before deployment; for compiling new TypeScript, Zod, and Pydantic schemas from a single sample JSON payload, use compile_polyglot_type_schemas instead. Read-only edge call (32 KB, 60 RPM): accepts 'baseline_schema_json' (with enum defaults), uses '?demo=true' or L402 (75 sats); HTTP 400 if invalid. |
| `generate_boundary_test_vectors` | `POST /api/v1/code/boundary-test-vectors` | 65 sats (L402) | Synthesizes deterministic unit-test vectors from a JSON Schema or function signature covering valid equivalence partitions, numeric/length boundaries, and adversarial Unicode/null inputs. Use when generating exhaustive edge-case unit test payloads and fuzz vectors for an API endpoint or function; for healing and applying unified diffs or search/replace edits to source code, use apply_fuzzy_code_patch instead. Read-only edge call (32 KB, 60 RPM): accepts 'schema_or_signature_json' (with enum defaults), uses '?demo=true' or L402 (65 sats); HTTP 400 if invalid. |
| `simulate_monte_carlo_risk` | `POST /api/v1/solver/monte-carlo-risk` | 70 sats (L402) | Runs a reproducible seeded Mulberry32 Monte Carlo simulation over uncertain cost, latency, or duration variables to compute P10/P50/P90/P95 percentiles, Value-at-Risk (VaR), and CVaR. Use when modeling stochastic uncertainty, tail risk (VaR/CVaR), and probability of meeting a budget or SLA target; for evaluating deterministic single-point algebraic formulas or exact NPV/IRR cashflows, use evaluate_deterministic_math instead. Read-only edge call (32 KB, 60 RPM): accepts 'variables_json' (with enum defaults), uses '?demo=true' or L402 (70 sats); HTTP 400 if invalid. |
| `diff_agent_memory_checkpoint` | `POST /api/v1/agent/memory-checkpoint-diff` | 50 sats (L402) | Computes structural diffs between two agent state snapshots ('added_keys', 'mutated_keys', 'removed_keys'), flags boolean belief contradictions, generates an RFC 7396 JSON Merge Patch delta, and computes a canonical checkpoint hash. Use when checkpointing agent state or transmitting minimal RFC 7396 state deltas across multi-agent handoffs; for counting BPE tokens and auditing Lost-in-the-Middle prompt attention, use plan_context_token_budget instead. Read-only call (32 KB, 60 RPM): accepts 'previous_state_json' (with enum defaults), uses '?demo=true' or L402 (50 sats); HTTP 400 if invalid. |

> **Free Account-Less Demo Mode**: Append `?demo=true` to any REST endpoint above for an instant HTTP 200 schema preview at zero cost.

---

## Other Modular Diogenes MCP Packages

Install only the domain packages relevant to your workflow:

| Package | Scoped MCP Endpoint | Spoke Repository |
| :--- | :--- | :--- |
| **1. EVE: Frontier Sui Move Suite (14 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/eve-frontier` | [`stand-out-of-my-sun/diogenes-eve-frontier-mcp`](https://github.com/stand-out-of-my-sun/diogenes-eve-frontier-mcp) |
| **2. Agent Guardrails & Sandbox (12 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/agent-guardrails` | [`stand-out-of-my-sun/diogenes-agent-guardrails-mcp`](https://github.com/stand-out-of-my-sun/diogenes-agent-guardrails-mcp) |
| **3. Web3, DeFi & 402 Security (15 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/web3-security` | [`stand-out-of-my-sun/diogenes-web3-security-mcp`](https://github.com/stand-out-of-my-sun/diogenes-web3-security-mcp) |
| **4. Gemini Suite & AI Agents (15 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/gemini-suite` | [`stand-out-of-my-sun/diogenes-gemini-suite-mcp`](https://github.com/stand-out-of-my-sun/diogenes-gemini-suite-mcp) |
| **5. Context, Code & Solvers (15 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/context-code-solver` | [`stand-out-of-my-sun/diogenes-context-code-solver-mcp`](https://github.com/stand-out-of-my-sun/diogenes-context-code-solver-mcp) |
| **6. Dev, Data & Workflow Utilities (14 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/dev-utilities` | [`stand-out-of-my-sun/diogenes-dev-utilities-mcp`](https://github.com/stand-out-of-my-sun/diogenes-dev-utilities-mcp) |
| **7. Web Extraction, Readability & Markdown Engine (12 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/web-scraping-engine` | [`stand-out-of-my-sun/diogenes-web-scraping-engine-mcp`](https://github.com/stand-out-of-my-sun/diogenes-web-scraping-engine-mcp) |
| **8. Neural Search, Grounded Research & Deep Intelligence (12 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/neural-search-engine` | [`stand-out-of-my-sun/diogenes-neural-search-engine-mcp`](https://github.com/stand-out-of-my-sun/diogenes-neural-search-engine-mcp) |
| **9. Database Intelligence, SQL Engine & Schema Guard (12 Tools)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/database-intelligence` | [`stand-out-of-my-sun/diogenes-database-intelligence-mcp`](https://github.com/stand-out-of-my-sun/diogenes-database-intelligence-mcp) |
| **10. Full Master Gateway (All 121 Services)** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp` | [`stand-out-of-my-sun/diogenes-micro-gateway`](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway) |

---

## TensorBlock & MCP Index Profile Metadata

| Field | Value |
| :--- | :--- |
| **Category** | `Context, Code & Deterministic Solvers` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/context-code-solver` |
| **Manifest** | `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/context-code-solver.json` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional 6 flexible crypto payment rails for production calls: L402, x402, Base MPP, Garlicoin 0-Conf, BSC WGRLC, or Prepaid GRLC session API keys) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/context-code-solver.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-context-code-solver-mcp/issues` |
