# Diogenes Microservice Gateway (`diogenes-micro-gateway`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Microservice Gateway** (`https://diogenes-micro-gateway.corinth.workers.dev`) is an account-less, multi-protocol AI & Web3 edge gateway delivering:
1. **Account-Less Access to the Complete Google Gemini Suite (45 Models) & AI Agents**: Instant pay-per-request access to **Antigravity Agent**, **Deep Research Pro**, **Nano Banana Pro (Gemini 3 Pro Image)**, **Nano Banana**, **Gemini 4 Argon**, and **Gemini 3.1 Pro** with zero API keys, zero accounts, and zero monthly subscriptions.
2. **121 Live Edge Microservices at Ultra-Low Micro-Prices (Starting at 10 Sats / 1 GRLC / $0.01 SOL & Base Floor)**: Pre-execution SQL/code/MCP security guardrails, smart contract vulnerability audits, Solana/EVM token risk oracles, HTTP 402 invoice fraud verification, and cross-chain bridge routing settled flexibly across **6 Flexible Payment Rails** — **Bitcoin Lightning (`L402`)**, **Solana Native (`x402`)**, **Base EVM ETH (`MPP`)**, **Garlicoin Native L1 (`<1ms` 0-Conf)**, **BSC `WGRLC` (`BEP-20 MPP`)**, and **Garlicoin Prepaid Session Credit (`grlc_sec_...` Bearer token via `/api/v1/grlc/prepay`)** — plus **Streamable HTTP MCP (`/mcp`)**.
3. **14 Dedicated EVE: Frontier Sui Move Microservices**: Sui Move Smart Assembly coder & auditor, Smart Gate route & toll planner, Lagrange Network Node gigajoule (GJ) optimizer, SSU Automated Market Maker, Killmail threat intelligence, Smart Turret target matrix, Vault zkLogin character verifier, Constellation sovereignty fuel radar, and Sui Programmable Transaction Block (PTB) simulator.

---

## 6 Flexible Payment Rails & Sub-Cent Micro-Pricing

All 121 microservices and Gemini models operate with **zero accounts, zero API keys, and zero subscriptions**. Pay only for what you compute via 6 flexible settlement rails:

1. **Bitcoin Lightning (`L402` / LSAT)**: Sub-second satoshi settlement using standard HTTP 402 challenge-response (`Authorization: L402 <macaroon>:<preimage>`). Starting at 10 sats per call.
2. **Solana Native SOL / SPL (`x402`)**: Micro-lamport transactions settled via Solana with ed25519 signature proof (`X-Payment-Signature: <tx_signature>`).
3. **Base EVM ETH / USDC (`MPP`)**: Machine Payments Protocol on Coinbase's Base L2 with sub-cent gas overhead (`Authorization: MPP <voucher>` or `X-Payment-TxHash: 0x...`).
4. **Garlicoin Native L1 (`<1ms` 0-Conf Verification)**: Ultra-fast peer-to-peer cryptocurrency micro-payments settled directly on Garlicoin's native proof-of-work blockchain via asynchronous confirmation (`X-GRLC-Txid: <txid>`).
5. **BSC Wrapped Garlicoin (`WGRLC` BEP-20 `MPP`)**: Binance Smart Chain BEP-20 token micro-settlements (`X-WGRLC-TxHash: 0x...`).
6. **Garlicoin Prepaid Session API Keys (`grlc_sec_...`)**: High-throughput session credentials with `<0.1ms` edge latency. Prepay GRLC once via `POST /api/v1/grlc/prepay`, receive a cryptographic session bearer token (`Authorization: Bearer grlc_sec_...`), and call any microservice at maximum speed with rate-limit exemption and automatic balance deduction.

---

## 1-Click Modular MCP Packages (All 9 Rated `5.0 / 5.0` Tier A on Glama TDQS)

Instead of loading all 121 gateway endpoints into your LLM's context window at once, connect Cursor, Claude Desktop, Zed, or Windsurf to a **purpose-built domain package** (12–15 `verb_noun` tools each, `100%` schema description coverage, `outputSchema`, and zero tool shadowing):

| Domain Package | Scoped 1-Click MCP Endpoint | Dedicated Spoke Repository | Tools & Glama TDQS |
| :--- | :--- | :--- | :--- |
| **1. EVE: Frontier Sui Move Suite** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/eve-frontier` | [`stand-out-of-my-sun/diogenes-eve-frontier-mcp`](https://github.com/stand-out-of-my-sun/diogenes-eve-frontier-mcp) | **14 Tools** (`5.0 / 5.0` Tier A) — Assembly state inspector, Tribe standings auditor, Move coder, Gate ACL compiler, PTB simulator, zkLogin, route planner, Lagrange GJ & siege sims, fuel radar, SSU pricer & arbitrage, killmail & turret matrix |
| **2. Agent Guardrails & Sandbox** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/agent-guardrails` | [`stand-out-of-my-sun/diogenes-agent-guardrails-mcp`](https://github.com/stand-out-of-my-sun/diogenes-agent-guardrails-mcp) | **12 Tools** (`5.0 / 5.0` Tier A) — Command gate, SQL AST validator, Python sandbox, MCP manifest & rug-pull auditors, sampling firewall, output scrubber, PII redactor, loop breaker, A2A card verifier, egress SSRF guard, factuality auditor |
| **3. Web3, DeFi & 402 Security** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/web3-security` | [`stand-out-of-my-sun/diogenes-web3-security-mcp`](https://github.com/stand-out-of-my-sun/diogenes-web3-security-mcp) | **15 Tools** (`5.0 / 5.0` Tier A) — EVM/Move contract auditor, Solana Anchor CPI scanner, SPL risk & liquidity, whale tracker, Jito fee estimator, EIP-712 & EVM calldata decoders, MEV evaluator, address poisoning, 402 verifier, UTXO planner, bridge comparator |
| **4. Gemini Suite & AI Agents** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/gemini-suite` | [`stand-out-of-my-sun/diogenes-gemini-suite-mcp`](https://github.com/stand-out-of-my-sun/diogenes-gemini-suite-mcp) | **15 Tools** (`5.0 / 5.0` Tier A) — All 45 Google Gemini models (Gemini 4 Argon, 3.1 Pro, 3.8 Flash), Antigravity Agent, Deep Research Pro, Computer Use, Grounded Search & Maps, Nano Banana Pro, Veo 3, Lyria 3, TTS & Live Audio |
| **5. Context, Code & Solvers** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/context-code-solver` | [`stand-out-of-my-sun/diogenes-context-code-solver-mcp`](https://github.com/stand-out-of-my-sun/diogenes-context-code-solver-mcp) | **15 Tools** (`5.0 / 5.0` Tier A) — AST context pruner, BPE token budget planner, BM25+RRF+MMR reranker, fuzzy diff patcher, AST symbol & complexity analyzer, Tarjan cycle detector, stacktrace isolator, polyglot type compiler, OpenAPI breaking-change detector, boundary test generator, math/IRR, CPM scheduler, A/B judge, Monte Carlo VaR, memory differ |
| **6. Dev, Data & Workflow Utilities** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/dev-utilities` | [`stand-out-of-my-sun/diogenes-dev-utilities-mcp`](https://github.com/stand-out-of-my-sun/diogenes-dev-utilities-mcp) | **14 Tools** (`5.0 / 5.0` Tier A) — Malformed JSON healer, JSON Schema type enforcer, entity extractor, dataset cleaner, O(n) ReDoS regex synthesizer, XML prompt compiler, Python synthesizer, RFC summarizer, web brief, compaction verifier, MCP router, escrow arbiter, MPP session & x402 embeddings |
| **7. Web Extraction, Readability & Markdown Engine** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/web-scraping-engine` | [`stand-out-of-my-sun/diogenes-web-scraping-engine-mcp`](https://github.com/stand-out-of-my-sun/diogenes-web-scraping-engine-mcp) | **12 Tools** (`5.0 / 5.0` Tier A) — Clean LLM markdown compiler, readable article extractor, OpenGraph & JSON-LD parser, HTML table to JSON/Markdown, CSS selector isolator, paywall bypass auditor, XML sitemap crawler, hyperlink extractor, XSS sanitizer, contact/lead parser, SEO diagnostics, RSS/Atom compiler |
| **8. Neural Search, Grounded Research & Deep Intelligence** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/neural-search-engine` | [`stand-out-of-my-sun/diogenes-neural-search-engine-mcp`](https://github.com/stand-out-of-my-sun/diogenes-neural-search-engine-mcp) | **12 Tools** (`5.0 / 5.0` Tier A) — Neural search synthesizer, deep research dossier compiler, query expander, curated domain registry filter, breaking news velocity tracker, factual consensus claim verifier, scholarly citation compiler, topic subgraph clusterer, sentiment oracle, expert source ranker, timeline synthesizer, competitive landscape matrix |
| **9. Database Intelligence, SQL Engine & Schema Guard** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/database-intelligence` | [`stand-out-of-my-sun/diogenes-database-intelligence-mcp`](https://github.com/stand-out-of-my-sun/diogenes-database-intelligence-mcp) | **12 Tools** (`5.0 / 5.0` Tier A) — NL to SQL synthesizer, AST SQL injection & tautology auditor, EXPLAIN query optimizer, breaking migration differ, polyglot SQL transpiler, composite B-tree index advisor, 3NF/BCNF normalizer, SQL telemetry PII scrubber, mock seed fixture generator, pool headroom calculator, isolation hazard auditor, ORM model compiler |
| **10. Full Master Gateway** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp` | [`stand-out-of-my-sun/diogenes-micro-gateway`](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway) | **All 121 Tools** (`130` Total Capabilities) |

---

## Model Context Protocol (MCP) & Public Directory Profiles

Diogenes Gateway exposes **121 production tools** natively via **Streamable HTTP** (`https://diogenes-micro-gateway.corinth.workers.dev/mcp`) for Cursor, Claude Desktop, Windsurf, VS Code, and AI agents:

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
