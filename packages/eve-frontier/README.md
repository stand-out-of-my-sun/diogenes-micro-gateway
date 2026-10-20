# Diogenes EVE: Frontier Sui Move & Smart Assembly MCP (`diogenes-eve-frontier-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-eve-frontier-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-eve-frontier-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes EVE: Frontier Sui Move & Smart Assembly MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Autonomous Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 61 gateway endpoints into your LLM's context window, installing this package exposes **only the 9 specialized `eve-frontier` tools** needed for **Gaming**:

Dedicated MCP suite for CCP Games' EVE: Frontier on Sui Move: 9 purpose-built tools for Smart Assembly Move contracts, Smart Gate route & toll planning, Lagrange Network Node gigajoule (GJ) optimization, Smart Turret targeting, Killmail intel, SSU AMM pricing, zkLogin verification, Sovereignty fuel radar, and Sui PTB drain simulation.

---

## 1-Click Install (`mcp.json`) for Cursor, Claude Desktop & Windsurf

No API keys, user accounts, or local dependencies required. Add this scoped endpoint to `.cursor/mcp.json` or `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "diogenes-eve-frontier": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/eve-frontier"
    }
  }
}
```

---

## Included Tools in `eve-frontier` (9 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `eve_move_assembly_coder` | `POST /api/v1/eve-frontier/move-assembly-coder` | 200 sats via L402 | Synthesizes and audits Sui Move smart contract extensions (Witness, HotPotato, Capability guards) for EVE Frontier Smart Assemblies. |
| `eve_gate_route_planner` | `POST /api/v1/eve-frontier/gate-route-planner` | 100 sats via L402 | Computes optimal stargate jump routes across public and Tribe-gated Smart Gates minimizing fuel burn and toll tariffs. |
| `eve_network_node_gj_optimizer` | `POST /api/v1/eve-frontier/network-node-gj-optimizer` | 100 sats via L402 | Calculates Lagrange Network Node fuel burn rates, gigajoule (GJ) energy reservations, and offline-threat windows. |
| `eve_turret_target_matrix` | `POST /api/v1/eve-frontier/turret-target-matrix` | 125 sats via L402 | Evaluates Smart Turret friend-or-foe standings, aggression flags, and deterministic target priority queues. |
| `eve_killmail_threat_intel` | `POST /api/v1/eve-frontier/killmail-threat-intel` | 150 sats via L402 | Analyzes on-chain EVE Frontier killmails to map hostile tribe doctrines, gatecamp windows, and system threat scores. |
| `eve_ssu_market_maker` | `POST /api/v1/eve-frontier/ssu-market-maker` | 120 sats via L402 | Computes dynamic bid-ask spreads and inventory curves for Smart Storage Unit (SSU) autonomous vending machines. |
| `eve_zklogin_character_verifier` | `POST /api/v1/eve-frontier/zklogin-character-verifier` | 100 sats via L402 | Verifies Sui zkLogin proofs, Character object ownership, and Tribe membership capabilities for Diplomacy & Gate ACLs. |
| `eve_sovereignty_fuel_radar` | `POST /api/v1/eve-frontier/sovereignty-fuel-radar` | 140 sats via L402 | Tracks constellation-wide Network Node fuel exhaustion timelines and vulnerability windows. |
| `eve_sui_ptb_simulator` | `POST /api/v1/eve-frontier/sui-ptb-simulator` | 150 sats via L402 | Statically simulates Sui Programmable Transaction Block (PTB) command arrays before signing to block coin drains and unconsumed HotPotato traps. |

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
| **Category** | `Gaming` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/eve-frontier` |
| **Manifest** | `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/eve-frontier.json` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional `L402`, `x402`, or `MPP` request headers for production calls) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/eve-frontier.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-eve-frontier-mcp/issues` |
