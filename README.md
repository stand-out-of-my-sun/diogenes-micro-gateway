# Diogenes Microservice Gateway (`diogenes-micro-gateway`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Edge APIs](https://img.shields.io/badge/Edge%20APIs-122%20Live-brightgreen.svg)](https://diogenesgateway.com)
[![Frontier Models](https://img.shields.io/badge/AI%20Models-51%20Supported-purple.svg)](https://diogenesgateway.com)
[![Stripe Fiat Checkout](https://img.shields.io/badge/Stripe-Card%20%26%20Apple%20Pay-635bff.svg)](https://diogenesgateway.com#prepay-checkout-widget)
[![Prepaid Keys](https://img.shields.io/badge/Session%20Keys-%3C0.1ms%20Fast%20Path-orange.svg)](https://diogenesgateway.com#prepay-checkout-widget)

**Diogenes Microservice Gateway** (`https://diogenesgateway.com`) is an account-less, multi-protocol AI & Web3 edge gateway delivering:
1. **1-Click IDE Auto-Installation**: Instant 1-line setup for Cursor, Claude Desktop, Zed, and Windsurf via `curl -sSL "https://diogenesgateway.com/install.sh" | bash`.
2. **Instant Stripe Card Checkout & Prepaid Session Keys (`dg_sec_...`)**: Top up instantly using Card, Apple Pay, or Google Pay (\$5 Starter, \$20 Builder, \$100 Fleet with 10%–25% bonus credits) or crypto prepay for `<0.1ms` edge execution, zero on-chain confirmation latency, and zero per-call transaction overhead.
3. **Multi-Currency Isolated Balance Architecture**: Strict single-asset accounting across USD, Bitcoin sats, Ethereum ETH, Solana SOL, Ripple XRP, and Garlicoin GRLC. Zero cross-currency conversions; *"We are not an exchange"*.
4. **100% Free Developer Tier (21 Deterministic Tools)**: Direct access to AST context pruners, BPE token budget planners, hybrid RAG rerankers, fuzzy diff patchers, and security guardrails with **zero API keys, zero dependencies, and zero wallet required**.
5. **Account-Less Access to 51 Frontier AI Models & Autonomous Agents**: Instant pay-per-request access to **Antigravity Agent**, **Deep Research Pro**, **Nano Banana Pro (Gemini 3 Pro Image)**, **DeepSeek R1**, **Qwen 2.5 Coder 32B**, **Gemini 4 Argon**, and **Gemini 3.1 Pro** with zero subscriptions.
6. **122 Production Edge Microservices Across 9 Purpose-Built Modular MCP Packages**: Pre-execution security guardrails, smart contract audits, Solana/EVM risk oracles, neural search synthesizers, database query optimizers, and **14 dedicated EVE: Frontier Sui Move microservices** — settled across 7 flexible rails plus **Streamable HTTP MCP (`/mcp`)**.
7. **15% Rev-Share Referral Program (`dg_ref_...`)**: Earn 15% lifetime revenue share on referred users and agent fleets with zero sign-up friction.

---

## ⚡ 1-Line IDE Auto-Installer (Cursor, Claude, Zed, Windsurf)

Install the 100% Free Developer Tier into your IDE in 5 seconds with zero manual configuration:

```bash
# 1-Line Auto-Install Free Developer Tier
curl -sSL "https://diogenesgateway.com/install.sh" | bash

# With your prepaid session key for instant authenticated access:
curl -sSL "https://diogenesgateway.com/install.sh?key=dg_sec_..." | bash
```

Supported clients: **Cursor IDE** (`.cursor/mcp.json`), **Claude Desktop** (`claude_desktop_config.json`), **Zed Editor** (`settings.json`), and **Windsurf** (`mcp_config.json`).

---

## 💳 Instant Stripe Checkout & Prepaid Session Keys (`<0.1ms` Fast Path)

Tired of submitting on-chain transactions or waiting for block confirmations for every single tool call? Diogenes provides **Account-Less Prepaid Session Keys (`dg_sec_...`)**:

| Tier Pack | Checkout Price | Initial Credit | Bonus | Ideal Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Diogenes Starter** | \$5.00 USD | **\$5.50 USD** | `+10%` | Solo developers, quick prototyping & testing |
| **Diogenes Builder** | \$20.00 USD | **\$24.00 USD** | `+20%` | Active coding agents, CI/CD pipelines & research |
| **Agent Fleet** | \$100.00 USD | **\$125.00 USD** | `+25%` | High-frequency agent swarms & production bots |

### Instant Checkout & Key Usage:
1. **Purchase in 10 seconds**: Visit [`https://diogenesgateway.com/#prepay-checkout-widget`](https://diogenesgateway.com#prepay-checkout-widget) and pay via **Card, Apple Pay, or Google Pay**.
2. **Instant Session Key**: Receive your cryptographic session key (`dg_sec_...`) immediately upon payment. No registration, no password, no email verification.
3. **Execute at Maximum Speed**: Pass your key as a Bearer token:
   ```bash
   curl -X POST "https://diogenesgateway.com/api/v1/ai/generate" \
     -H "Authorization: Bearer dg_sec_..." \
     -H "Content-Type: application/json" \
     -d '{"prompt": "Audit this smart contract for reentrancy bugs", "model": "gemini-4-argon"}'
   ```
4. **Performance**: `<0.1ms` Cloudflare KV resolution, rate-limit exemption, zero on-chain transaction fees per query.

---

## 🏛️ Multi-Currency Isolated Balance Architecture

Diogenes Gateway enforces strict single-asset accounting across all settlement rails:
> **"We are not an exchange."**

- **USD Balance (`creditBalanceUsd`)**: Funded exclusively via Stripe Card / Apple Pay checkout. Deducted exclusively for microservices priced in USD.
- **Lightning Sats (`creditBalanceSats`)**: Funded via Bitcoin Lightning L402 invoices. Deducted for sat-denominated endpoints.
- **Base ETH (`creditBalanceBaseWei`)**: Funded via Base EVM Machine Payments Protocol (MPP).
- **Solana SOL (`creditBalanceSolLamports`)**: Funded via Solana x402 micropayments.
- **XRPL XRP (`creditBalanceXrpDrops`)**: Funded via Native XRPL ledger payments with destination tags.
- **Garlicoin GRLC (`creditBalanceGrlcBaseUnits`)**: Funded via Garlicoin L1 0-Conf or BSC WGRLC.

Every session key displays its segregated balances transparently via `GET /api/v1/prepay/balance?key=dg_sec_...`. Balances never convert into other currencies, ensuring zero exchange risk, zero slippage, and zero regulatory ambiguity.

---

## 🤝 15% Rev-Share Referral Program (`dg_ref_...`)

Earn 15% revenue share on all microservice executions and pack purchases driven by your agents, tools, or links:
- Generate your public referral hash code: `POST /api/v1/referral/create` -> returns `dg_ref_...`.
- Append `?ref=dg_ref_...` to any checkout URL (`https://diogenesgateway.com/?ref=dg_ref_...`) or API query.
- Commissions accrue transparently to your referral balance with instant settlement.

---

## 3-Tier Execution Policy & 0.01¢ (\$0.0001) Cost Gate

To protect compute resources while maximizing developer access, the gateway enforces a strict **3-Tier Execution Policy**:

| Tier | Category & Capabilities | Pricing | Free Quota | Static Preview (`?sample=true`) |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Free Dev Utilities** | AST pruners, JSON healers, SQL injection validators, ReDoS regex oracles | **100% Free** (\$0.00) | **Unlimited** (Zero keys/wallet) | Yes |
| **Tier 2: Micro-Paid APIs** | Security audits, token risk oracles, EVE Frontier tools, neural search | Starting at **10 sats / \$0.01** | **2 Live Free Demos / Day** (`?demo=true`) | Yes |
| **Tier 3: Heavy Pipelines** | Headless Chromium rendering, deep research dossiers, frontier reasoning | Dynamic marginal cost | Paywall on Call #1 | **Yes (Free static sample)** |

---

## 📦 9 Purpose-Built Modular MCP Packages

Instead of loading all 122 gateway endpoints into your LLM's context window at once, connect Cursor, Claude Desktop, Zed, or Windsurf to a **purpose-built domain package** (12–15 tools each, `100%` schema coverage, `outputSchema`, and zero tool shadowing):

| Domain Package | Scoped 1-Click MCP Endpoint | Dedicated Spoke Repository | Tools |
| :--- | :--- | :--- | :--- |
| **1. Gemini Suite & AI Agents** | `https://diogenesgateway.com/mcp/gemini-suite` | [`stand-out-of-my-sun/diogenes-gemini-suite-mcp`](https://github.com/stand-out-of-my-sun/diogenes-gemini-suite-mcp) | **15 Tools** — 51 Google Gemini & frontier models (Gemini 4 Argon, 3.1 Pro, DeepSeek R1, Qwen 2.5 Coder), Antigravity Agent, Deep Research Pro, Nano Banana Pro |
| **2. Context, Code & Solvers** | `https://diogenesgateway.com/mcp/context-code-solver` | [`stand-out-of-my-sun/diogenes-context-code-solver-mcp`](https://github.com/stand-out-of-my-sun/diogenes-context-code-solver-mcp) | **15 Tools** — 100% Free Developer Tier: AST context pruner, BPE token budget planner, BM25+RRF reranker, fuzzy diff patcher, Tarjan cycle detector, type compiler |
| **3. Agent Guardrails & Sandbox** | `https://diogenesgateway.com/mcp/agent-guardrails` | [`stand-out-of-my-sun/diogenes-agent-guardrails-mcp`](https://github.com/stand-out-of-my-sun/diogenes-agent-guardrails-mcp) | **12 Tools** — Command gate, SQL AST validator, Python sandbox, MCP manifest & rug-pull auditors, sampling firewall, output scrubber, PII redactor |
| **4. Web3, DeFi & 402 Security** | `https://diogenesgateway.com/mcp/web3-security` | [`stand-out-of-my-sun/diogenes-web3-security-mcp`](https://github.com/stand-out-of-my-sun/diogenes-web3-security-mcp) | **15 Tools** — EVM/Move contract auditor, Solana Anchor CPI scanner, SPL risk & liquidity, whale tracker, Jito fee estimator, EIP-712 decoder, MEV evaluator |
| **5. EVE: Frontier Sui Move Suite** | `https://diogenesgateway.com/mcp/eve-frontier` | [`stand-out-of-my-sun/diogenes-eve-frontier-mcp`](https://github.com/stand-out-of-my-sun/diogenes-eve-frontier-mcp) | **14 Tools** — Assembly state inspector, Tribe standings auditor, Move coder, Gate ACL compiler, PTB simulator, zkLogin, route planner, Lagrange GJ & siege sims |
| **6. Dev, Data & Workflow Utilities** | `https://diogenesgateway.com/mcp/dev-utilities` | [`stand-out-of-my-sun/diogenes-dev-utilities-mcp`](https://github.com/stand-out-of-my-sun/diogenes-dev-utilities-mcp) | **14 Tools** — Malformed JSON healer, JSON Schema type enforcer, entity extractor, dataset cleaner, O(n) ReDoS regex synthesizer, XML prompt compiler |
| **7. Web Extraction & Markdown** | `https://diogenesgateway.com/mcp/web-scraping-engine` | [`stand-out-of-my-sun/diogenes-web-scraping-engine-mcp`](https://github.com/stand-out-of-my-sun/diogenes-web-scraping-engine-mcp) | **12 Tools** — Clean LLM markdown compiler, readable article extractor, OpenGraph & JSON-LD parser, HTML table to JSON/Markdown, CSS selector isolator |
| **8. Neural Search & Intelligence** | `https://diogenesgateway.com/mcp/neural-search-engine` | [`stand-out-of-my-sun/diogenes-neural-search-engine-mcp`](https://github.com/stand-out-of-my-sun/diogenes-neural-search-engine-mcp) | **12 Tools** — Neural search synthesizer, deep research dossier compiler, query expander, curated domain filter, breaking news velocity tracker |
| **9. Database Intelligence & SQL** | `https://diogenesgateway.com/mcp/database-intelligence` | [`stand-out-of-my-sun/diogenes-database-intelligence-mcp`](https://github.com/stand-out-of-my-sun/diogenes-database-intelligence-mcp) | **12 Tools** — NL to SQL synthesizer, AST SQL injection auditor, EXPLAIN query optimizer, breaking migration differ, polyglot SQL transpiler |
| **10. Full Master Gateway** | `https://diogenesgateway.com/mcp` | [`stand-out-of-my-sun/diogenes-micro-gateway`](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway) | **All 122 Tools** (Complete Meta-Router & Directory Mode) |

---

## 🤖 Complete Frontier & Gemini Model Suite (51 Models)

Instant pay-per-query access to Google's complete Tier 1 model catalog and frontier reasoning models with zero API keys or monthly subscriptions:

- **Antigravity Agent** (`POST /api/v1/ai/antigravity-agent` | 500 sats): Google's premier AI agent with remote code execution, sandboxed tool use, and multi-step reasoning.
- **Deep Research Pro Preview** (`POST /api/v1/ai/deep-research` | 1,000 sats): Multi-hour deep investigative research engine delivering dense, verified intelligence dossiers.
- **Nano Banana Pro (Gemini 3 Pro Image)** (`POST /api/v1/ai/image-gen?model=gemini-3-pro-image` | 600 sats): Professional-grade high-resolution multimodal digital art, architectural diagrams, and visual UI generation.
- **DeepSeek R1 Reasoning** (`POST /api/v1/ai/generate?model=deepseek-r1` | 250 sats): Frontier open-weights mathematical and algorithmic reasoning engine.
- **Qwen 2.5 Coder 32B** (`POST /api/v1/ai/generate?model=qwen-2.5-coder-32b` | 200 sats): SOTA code synthesis and AST transformation.
- **Gemini 4 Argon (Frontier Reasoning)** (`POST /api/v1/ai/generate?model=gemini-4-argon` | 250 sats): Configurable thinking budgets and real-time search grounding.
- **Complete Gemini 3.x & 2.5 Family**: Full access to Gemini 3.8/3.7/3.6 Flash, Gemini 3.1 Pro, Gemini 2.5 Pro/Flash, and Robotics ER-2 (51 models total via `GET /api/v1/models`).

---

## 🛡️ Model Context Protocol (MCP) & Public Directory Profiles

Diogenes Gateway exposes **122 production tools** natively via **Streamable HTTP** (`https://diogenesgateway.com/mcp`) for Cursor, Claude Desktop, Windsurf, VS Code, and AI agents:

- **Glama MCP Directory Profile**: [https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)
- **TensorBlock MCP Index Profile**: [https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
- **Official MCP Registry ID**: `io.github.stand-out-of-my-sun/diogenes-gateway`
- **Primary Streamable HTTP MCP Endpoint**: `https://diogenesgateway.com/mcp`
- **Glama Ownership Manifest**: `https://diogenesgateway.com/.well-known/glama.json`
- **Report a Bug / Request a Service**: [GitHub Issues](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway/issues)

### 1-Click Client Configuration (`mcp.json`)

```json
{
  "mcpServers": {
    "diogenes-gateway": {
      "transport": "streamable-http",
      "url": "https://diogenesgateway.com/mcp"
    }
  }
}
```
