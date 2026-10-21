# Diogenes Web3, DeFi & HTTP 402 Security MCP (`diogenes-web3-security-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-web3-security-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-web3-security-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Web3, DeFi & HTTP 402 Security MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Autonomous Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 85 gateway endpoints into your LLM's context window, installing this package exposes **only the 15 specialized `web3-security` tools** needed for **Blockchain & Web3**:

15 TDQS 5.0/5.0 Web3, DeFi & HTTP 402 security tools: EVM/Move contract auditor, Solana Anchor CPI scanner, SPL risk & liquidity inspectors, whale flow tracker, Jito fee estimator, EIP-712 & EVM calldata decoders, MEV evaluator, address-poisoning detector, 402 verifier, Bitcoin UTXO planner, and non-KYC bridge comparator.

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

## Included Tools in `web3-security` (15 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `audit_smart_contract_code` | `POST /api/v1/agent/contract-audit` | 250 sats (L402) | Statically audits Solidity, Vyper, or Move smart contract source code for honeypot transfer taxes, hidden mint backdoors, proxy upgrade traps, and reentrancy. Use when auditing smart contract source code or bytecode before deploying or interacting with a protocol; for scanning Solana Anchor/Rust programs specifically for Cross-Program Invocation (CPI) signer/account vulnerabilities, use scan_solana_cpi_reentrancy instead. Read-only edge call (32 KB, 60 RPM): accepts 'code_or_address' ('chain' defaults to 'evm_solidity'), uses '?demo=true' or L402 (250 sats); HTTP 400 if invalid. |
| `scan_solana_cpi_reentrancy` | `POST /api/v1/crypto/solana-cpi-reentrancy-scanner` | 160 sats (L402) | Scans Solana Anchor and native Rust program instructions for unverified Cross-Program Invocation (CPI) program IDs, missing signer checks, and PDA bump seed canonicalization bugs. Use when auditing Solana Rust/Anchor source code or instruction account structs for CPI privilege escalation; for checking live SPL token mint/freeze authorities and rug-pull risk by mint address, use evaluate_solana_token_risk instead. Read-only edge call (32 KB, 60 RPM): accepts 'rust_source_or_idl' ('framework' defaults to 'anchor'), uses '?demo=true' or L402 (160 sats); HTTP 400 if invalid. |
| `evaluate_solana_token_risk` | `POST /api/v1/crypto/solana-risk` | 100 sats (L402) | Evaluates a Solana SPL token's rug-pull probability by checking active mint authority, freeze authority, mutable metadata, and top-holder concentration. Use when making a pre-trade security decision on whether a Solana SPL token is safe to buy; for retrieving SPL token symbol, decimals, and DEX liquidity pool metadata via x402, use inspect_solana_token_liquidity instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'token_address' ('risk_profile' defaults to 'strict_decentralized'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `inspect_solana_token_liquidity` | `POST /api/v1/x402/token-meta` | 200 sats (x402) | Retrieves canonical Solana SPL token metadata including name, ticker symbol, decimal precision, and current mint/freeze authority addresses. Use when resolving SPL token decimals, ticker symbols, and registry metadata for portfolio or swap formatting; for computing a composite security risk score and binary should_transact verdict, use evaluate_solana_token_risk instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'mint' ('network' defaults to 'mainnet-beta'), supports '?demo=true' or x402 (200 sats), and returns HTTP 400 if invalid. |
| `track_solana_whale_flows` | `POST /api/v1/x402/whale-radar` | 500 sats (x402) | Tracks 24-hour net accumulation or distribution flows across top Solana whale wallets and flags coordinated insider wallet clusters for a given SPL token. Use when analyzing on-chain smart-money order flow and holder clustering on Solana; for checking static SPL contract mint/freeze authority permissions, use evaluate_solana_token_risk instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'token' ('window' defaults to '1h'), supports '?demo=true' or x402 (500 sats), and returns HTTP 400 if invalid. |
| `estimate_solana_priority_fees` | `POST /api/v1/x402/solana-priority-fee-oracle` | 50 sats (x402) | Calculates optimal Solana compute-unit (CU) microlamport priority fees and Jito bundle tip lamports to achieve target block-inclusion probability. Use when setting SetComputeUnitPrice and Jito tips before broadcasting a Solana transaction; for querying Bitcoin L1 sat/vB mempool fee rates, use estimate_bitcoin_mempool_fees instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'priority_level' ('tx_type' defaults to 'simple_transfer'), supports '?demo=true' or x402 (50 sats), and returns HTTP 400 if invalid. |
| `decode_eip712_permit_signature` | `POST /api/v1/crypto/eip712-permit-decoder` | 100 sats (L402) | Decodes EIP-712 and Uniswap Permit2 off-chain typed-data payloads to verify spender identity, detect unlimited (uint256.max) token approvals, and flag expired deadlines. Use when inspecting an off-chain eth_signTypedData_v4 or Permit2 payload before signing; for decoding raw on-chain hex transaction calldata (0x...) for eth_sendTransaction, use simulate_evm_transaction_calldata instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'typed_data_json' ('chain_id' defaults to '1'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `simulate_evm_transaction_calldata` | `POST /api/v1/crypto/simulate-evm-calldata` | 90 sats (L402) | Decodes raw EVM hexadecimal transaction calldata (0x...) by 4-byte function selector to expose hidden ERC-20 approve/transferFrom calls, setApprovalForAll drains, and multicall bundles. Use when auditing raw hex transaction data (to, value, data) before broadcasting an on-chain EVM transaction; for inspecting off-chain EIP-712 JSON typed-data signatures, use decode_eip712_permit_signature instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'calldata_hex' ('network' defaults to 'base_mainnet'), supports '?demo=true' or L402 (90 sats), and returns HTTP 400 if invalid. |
| `evaluate_dex_mev_risk` | `POST /api/v1/crypto/mev-risk` | 150 sats (L402) | Evaluates decentralized exchange (DEX) swap parameters against pool depth and mempool visibility to quantify MEV sandwich risk and compute optimal slippage tolerance in basis points. Use when configuring slippage tolerance and private-RPC routing before executing an on-chain DEX token swap; for comparing cross-chain bridge settlement routes across different L1 blockchains, use compare_crosschain_bridge_routes instead. Read-only edge call (32 KB, 60 RPM): accepts 'pair' ('execution_venue' defaults to 'uniswap_v3_public'), uses '?demo=true' or L402 (150 sats); HTTP 400 if invalid. |
| `detect_address_poisoning_scam` | `POST /api/v1/crypto/address-poisoning-check` | 100 sats (L402) | Compares a target recipient wallet address against recent transaction history to detect vanity prefix/suffix lookalike spoofing and zero-value dusting attacks. Use when verifying a recipient EVM or Solana wallet address before sending funds; for decoding hex smart contract calldata payloads, use simulate_evm_transaction_calldata instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'target_address' ('address_standard' defaults to 'auto_detect'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `verify_http402_payment_challenge` | `POST /api/v1/crypto/http402-challenge-verifier` | 60 sats (L402) | Decodes inbound HTTP 402 Payment Required challenges (L402 BOLT11 + Macaroon, x402 Solana USDC, MPP Base intents) to verify cryptographic payment-hash binding and block overcharge fraud. Use when auditing a 402 challenge header before an autonomous agent pays a Lightning invoice or USDC transfer; for checking on-chain Bitcoin L1 mempool feerates, use estimate_bitcoin_mempool_fees instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'www_authenticate' ('protocol_hint' defaults to 'L402'), supports '?demo=true' or L402 (60 sats), and returns HTTP 400 if invalid. |
| `estimate_bitcoin_mempool_fees` | `POST /api/v1/mempool-fee` | 50 sats (L402) | Fetches real-time Bitcoin mainnet mempool feerate recommendations in satoshis per virtual byte (sat/vB) across fastest, half-hour, hour, and economy confirmation tiers. Use when checking current Bitcoin L1 network congestion before broadcasting an on-chain BTC transaction; for calculating exact SegWit/Taproot UTXO batch consolidation vByte weights and dust thresholds, use plan_bitcoin_utxo_consolidation instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'confirmation_target', supports '?demo=true' or L402 (50 sats), and returns HTTP 400 if invalid. |
| `plan_bitcoin_utxo_consolidation` | `POST /api/v1/crypto/utxo-consolidation-planner` | 80 sats (L402) | Analyzes a set of Bitcoin UTXO balances in satoshis to compute exact vByte transaction weight, identify uneconomical dust inputs, and recommend whether to consolidate now or hold. Use when optimizing on-chain Bitcoin treasury UTXO sets to minimize long-term miner fee drag; for fetching current live Bitcoin mempool sat/vB feerates alone, use estimate_bitcoin_mempool_fees instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'utxos_sats_json' ('script_type' defaults to 'p2wpkh_segwit'), supports '?demo=true' or L402 (80 sats), and returns HTTP 400 if invalid. |
| `calculate_spot_swap_rate` | `POST /api/v1/swap-rate` | 100 sats (L402) | Calculates instantaneous spot exchange rates and equivalent USD, BTC, and satoshi values across BTC, ETH, SOL, SUI, and USDC. Use when converting a token amount into USD or satoshis for invoice pricing or accounting; for quoting executable non-KYC cross-chain bridge routes with bridge fees and settlement times, use compare_crosschain_bridge_routes instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'currency' ('amount' defaults to 'standard'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `compare_crosschain_bridge_routes` | `POST /api/v1/crypto/bridge-quote` | 100 sats (L402) | Compares non-custodial, non-KYC cross-chain swap routes (THORChain native L1 swaps, Maya Protocol, Blockstream Liquid) by basis-point fee, net output sats, and settlement time. Use when routing cross-chain treasury settlements (e.g. Solana USDC or Base ETH into native Bitcoin); for calculating mid-market spot exchange rates without bridge routing fees, use calculate_spot_swap_rate instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'from_asset' ('to_asset' defaults to 'BTC_NATIVE'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |

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
