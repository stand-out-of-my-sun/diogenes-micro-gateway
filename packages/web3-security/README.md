# Diogenes Web3, DeFi & HTTP 402 Security MCP (`diogenes-web3-security-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-web3-security-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-web3-security-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Web3, DeFi & HTTP 402 Security MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Autonomous Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 61 gateway endpoints into your LLM's context window, installing this package exposes **only the 8 specialized `web3-security` tools** needed for **Blockchain & Web3**:

Autonomous Web3 & HTTP 402 security suite: EVM/Solana/Move smart contract honeypot auditor, Solana SPL risk oracle, MEV sandwich evaluator, vanity address poisoning detector, HTTP 402 invoice fraud verifier, Bitcoin UTXO consolidation planner, and cross-chain bridge router.

---

## 1-Click Install (`mcp.json`) for Cursor, Claude Desktop & Windsurf

No API keys, user accounts, or local dependencies required. Add this scoped endpoint to `.cursor/mcp.json` or `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "diogenes-web3-security": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/web3-security"
    }
  }
}
```

---

## Included Tools in `web3-security` (8 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `contract_audit` | `POST /api/v1/agent/contract-audit` | 250 sats via L402 | Smart contract honeypot, hidden transfer tax, proxy upgrade, and mint backdoor auditor across EVM, Solana, and Move. |
| `solana_risk` | `POST /api/v1/crypto/solana-risk` | 100 sats / $0.02 USDC | Audits Solana SPL token mint authority, freeze authority, top-holder concentration, and LP lock status. |
| `mev_risk` | `POST /api/v1/crypto/mev-risk` | 150 sats via L402 | Pre-swap MEV sandwich and frontrunning risk evaluator returning optimal slippage in basis points. |
| `address_poisoning_detector` | `POST /api/v1/crypto/address-poisoning-check` | 100 sats via L402 | Detects zero-value transfer spoofing and prefix/suffix vanity lookalike address poisoning attacks. |
| `http402_challenge_verifier` | `POST /api/v1/crypto/http402-challenge-verifier` | 60 sats via L402 | Verifies inbound HTTP 402 (L402 BOLT11, x402 Solana, MPP Base) payment challenges against overcharge and recipient spoofing. |
| `utxo_consolidation_planner` | `POST /api/v1/crypto/utxo-consolidation-planner` | 75 sats via L402 | Computes exact SegWit/Taproot vByte weights, dust thresholds, and optimal mempool fee windows for UTXO batching. |
| `crypto_bridge_quote` | `POST /api/v1/crypto/bridge-quote` | 100 sats via L402 | Compares non-KYC cross-chain settlement routes (THORChain, Liquid, Maya) for BTC, SOL, ETH, SUI, and USDC. |
| `solana_whale_radar` | `POST /api/v1/x402/whale-radar` | $0.05 USDC via x402 | Tracks high-conviction Solana whale wallets and insider accumulation clusters. |

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
| **Category** | `Blockchain & Web3` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/web3-security` |
| **Manifest** | `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/web3-security.json` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional `L402`, `x402`, or `MPP` request headers for production calls) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/web3-security.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-web3-security-mcp/issues` |
