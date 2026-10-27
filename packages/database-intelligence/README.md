# Diogenes Database Intelligence, SQL Engine & Schema Guard MCP (`diogenes-database-intelligence-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-database-intelligence-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-database-intelligence-mcp)
[![M8ven Score](https://m8ven.ai/badge/mcp/stand-out-of-my-sun-diogenes-database-intelligence-mcp-cih80u?v=a8145a29a36b507bc4fc58f2d33a2b46)](https://m8ven.ai/mcp/stand-out-of-my-sun-diogenes-database-intelligence-mcp-cih80u?s=readme)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Database Intelligence, SQL Engine & Schema Guard MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 121 gateway endpoints into your LLM's context window, installing this package exposes **only the 12 specialized `database-intelligence` tools** needed for **Database & SQL Intelligence**:

12 deterministic database intelligence, AST SQL & schema reliability tools: natural language to SQL synthesizer, AST SQL injection & tautology auditor, query plan EXPLAIN optimizer, breaking schema migration differ, polyglot SQL transpiler (PostgreSQL/MySQL/SQLite), composite B-tree index advisor, relational 3NF/BCNF normalization validator, SQL telemetry PII scrubber, relational mock seed fixture generator, connection pool headroom calculator, transaction isolation hazard auditor, and ORM model compiler (Prisma/Drizzle/Zod).

---

## ⚡ 1-Click Install for Cursor & Claude Desktop

No API keys, user accounts, or local dependencies required. Zero setup — paste directly into your client config:

### 🖱️ Cursor IDE (`.cursor/mcp.json`)
Add to `.cursor/mcp.json` in your project root or global Cursor settings:

```json
{
  "mcpServers": {
    "diogenes-database-intelligence": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/database-intelligence"
    }
  }
}
```

### 🧠 Claude Desktop (`claude_desktop_config.json`)
Add to `claude_desktop_config.json` (Mac: `~/Library/Application Support/Claude/claude_desktop_config.json` | Windows: `%APPDATA%\Claude\claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "diogenes-database-intelligence": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/database-intelligence"
    }
  }
}
```

> **Prefer local stdio?** Run via npx:
> ```bash
> npx -y @stand-out-of-my-sun/diogenes-database-intelligence-mcp
> ```

---

## Included Tools in `database-intelligence` (12 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `synthesize_sql_query` | `POST /api/v1/db/nl-to-sql` | 15 sats (L402) | Translates natural language questions into dialect-accurate, optimized SQL SELECT queries with schema awareness and safety checks. Use when generating reporting queries or automated data analytics pipelines; for analyzing SQL execution performance and EXPLAIN plans, use analyze_query_plan instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'natural_language_request' and 'schema_ddl' ('sql_dialect' defaults to 'postgresql_dialect'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `audit_sql_injection_ast` | `POST /api/v1/db/ast-injection-audit` | 10 sats (L402) | Statically parses SQL queries via AST lexical analysis to detect second-order injection, tautology conditions, and stacked queries. Use when auditing dynamic query parameters or untrusted user input before database execution; for sanitizing query strings for telemetry logging, use sanitize_sql_telemetry instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'raw_sql' ('audit_sensitivity' defaults to 'strict_zero_dynamic_taint'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `analyze_query_plan` | `POST /api/v1/db/explain-optimizer` | 15 sats (L402) | Analyzes SQL EXPLAIN execution plans to detect sequential table scans, high-cost cartesian joins, and buffer memory bottlenecks. Use when diagnosing slow queries, optimizing database performance, or evaluating query cost; for getting index recommendations, use recommend_database_indexes instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'explain_plan_or_query' ('optimization_target' defaults to 'eliminate_seq_scans'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `detect_breaking_migrations` | `POST /api/v1/db/breaking-migrations` | 15 sats (L402) | Compares source and target DDL schemas to identify breaking changes, destructive column drops, and lock-inducing mutations. Use when verifying CI/CD migration scripts before production deployment to prevent downtime; for verifying relational normal form, use validate_schema_normalization instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'current_schema' and 'target_schema' ('risk_tolerance' defaults to 'zero_downtime_strict'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `transpile_sql_dialect` | `POST /api/v1/db/transpile-dialect` | 10 sats (L402) | Transpiles SQL queries and DDL schemas across PostgreSQL, MySQL, and SQLite dialects, rewriting functions and syntax quirks. Use when migrating application queries across database backends or testing against in-memory SQLite; for generating new queries from natural language, use synthesize_sql_query instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'sql_code' and 'source_dialect' ('target_dialect' defaults to 'sqlite'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `recommend_database_indexes` | `POST /api/v1/db/index-advisor` | 15 sats (L402) | Recommends optimal single-column and composite B-Tree/BRIN indexes based on slow query WHERE, JOIN, and ORDER BY clauses. Use when optimizing database response times and eliminating full-table scans; for inspecting full execution plans, use analyze_query_plan instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'slow_queries_or_workload' ('index_type_preference' defaults to 'btree_and_composite'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `validate_schema_normalization` | `POST /api/v1/db/schema-normalization` | 10 sats (L402) | Audits database schemas for third normal form (3NF) compliance, transitive dependencies, and missing foreign key constraints. Use when reviewing database architectures, preventing update anomalies, or validating relational integrity; for detecting breaking schema migrations, use detect_breaking_migrations instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'schema_ddl' ('target_normal_form' defaults to 'third_normal_form_3nf'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `sanitize_sql_telemetry` | `POST /api/v1/database-intelligence/sanitize_sql_telemetry` | 15 sats (L402) | Masks PII, financial values, and credential literals from raw SQL query logs and slow-query dumps before telemetry storage. Use when scrubbing production database query logs before shipping to APM tools, Datadog, or external log collectors; for auditing SQL injection vulnerabilities, use audit_sql_injection_ast instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'query_logs' ('masking_policy' defaults to 'mask_pii_and_literals'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `synthesize_seed_fixtures` | `POST /api/v1/db/mock-fixtures` | 15 sats (L402) | Generates deterministic relational test seed fixtures respecting foreign key constraints, unique indexes, and data bounds. Use when provisioning mock database datasets for automated testing, staging environments, or sandbox demos; for compiling ORM models from schemas, use generate_orm_models instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'schema_ddl' ('fixture_volume' defaults to 'minimal_smoke_test_5'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `calculate_pool_headroom` | `POST /api/v1/db/pool-headroom` | 10 sats (L402) | Calculates optimal connection pool sizing, idle timeouts, and client headroom based on server RAM and concurrency profile. Use when sizing PgBouncer, HikariCP, or Prisma connection pools to avoid server out-of-memory crashes; for checking transaction isolation hazards, use audit_transaction_isolation instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'server_ram_mb' and 'max_concurrent_clients' ('workload_profile' defaults to 'high_concurrency_oltp'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `audit_transaction_isolation` | `POST /api/v1/db/transaction-isolation` | 15 sats (L402) | Audits database transaction workflows for concurrency anomalies, dirty reads, non-repeatable reads, and deadlock risks. Use when reviewing financial transfer procedures, inventory decrement operations, or multi-step checkout workflows; for calculating connection pool headroom, use calculate_pool_headroom instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'transaction_steps' ('target_isolation_level' defaults to 'read_committed'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `generate_orm_models` | `POST /api/v1/db/orm-model-compiler` | 15 sats (L402) | Compiles SQL DDL schemas into type-safe ORM entities and TypeScript validation schemas (Prisma, Drizzle, SQLAlchemy, Zod). Use when scaffolding application models, generating TypeScript data layers, or synchronizing schemas; for translating raw SQL across dialects, use transpile_sql_dialect instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'schema_ddl' ('orm_target' defaults to 'drizzle_orm_typescript'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |

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
| **Category** | `Database & SQL Intelligence` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/database-intelligence` |
| **Manifest** | `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/database-intelligence.json` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional 6 flexible crypto payment rails for production calls: L402, x402, Base MPP, Garlicoin 0-Conf, BSC WGRLC, or Prepaid GRLC session API keys) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/database-intelligence.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-database-intelligence-mcp/issues` |
