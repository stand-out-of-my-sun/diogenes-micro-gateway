# Diogenes EVE: Frontier Sui Move & Smart Assembly MCP (`diogenes-eve-frontier-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-eve-frontier-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-eve-frontier-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes EVE: Frontier Sui Move & Smart Assembly MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Autonomous Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 85 gateway endpoints into your LLM's context window, installing this package exposes **only the 14 specialized `eve-frontier` tools** needed for **Gaming**:

14 EVE: Frontier Sui Move tools covering the complete Smart Assembly lifecycle: assembly state inspector, Tribe standings auditor, Move contract generator, Smart Gate ACL compiler, PTB drain simulator, zkLogin verifier, route planner, Lagrange GJ & siege simulators, fuel radar, SSU pricer, arbitrage finder, killmail analyzer, and turret target matrix.

---

## ⚡ 1-Click Install for Cursor & Claude Desktop

No API keys, user accounts, or local dependencies required. Zero setup — paste directly into your client config:

### 🖱️ Cursor IDE (`.cursor/mcp.json`)
Add to `.cursor/mcp.json` in your project root or global Cursor settings:

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

### 🧠 Claude Desktop (`claude_desktop_config.json`)
Add to `claude_desktop_config.json` (Mac: `~/Library/Application Support/Claude/claude_desktop_config.json` | Windows: `%APPDATA%\Claude\claude_desktop_config.json`):

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

> **Prefer local stdio?** Run via npx:
> ```bash
> npx -y @stand-out-of-my-sun/diogenes-eve-frontier-mcp
> ```

---

## Included Tools in `eve-frontier` (14 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `inspect_eve_assembly_state` | `POST /api/v1/eve-frontier/inspect-assembly-state` | 80 sats (L402) | Inspects live EVE Frontier Smart Assembly on-chain object metadata, owner capability ID, online power status, and attached Sui Move package digest. Use when verifying whether a Smart Turret, Smart Gate, or Smart Storage Unit is online and checking its bound Move module before interacting; for generating or auditing custom Sui Move assembly source code, use generate_eve_assembly_move instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'assembly_id' ('assembly_class' defaults to 'smart_gate'), supports '?demo=true' or L402 (80 sats), and returns HTTP 400 if invalid. |
| `audit_eve_tribe_standings` | `POST /api/v1/eve-frontier/audit-tribe-standings` | 80 sats (L402) | Audits EVE Frontier Tribe diplomatic standings, friendly/hostile reputation scores, and pilot override entries across solar systems. Use when checking diplomatic relations or detecting conflicting friendly-fire rules across tribe registries; for compiling those standings into executable Sui Move Smart Gate ACL bytecode, use compile_eve_gate_acl instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'tribe_id' ('standing_filter' defaults to 'all'), supports '?demo=true' or L402 (80 sats), and returns HTTP 400 if invalid. |
| `generate_eve_assembly_move` | `POST /api/v1/eve-frontier/move-assembly-coder` | 200 sats (L402) | Generates and statically audits Sui Move smart contract modules for EVE Frontier Smart Assemblies using Witness, Capability, and HotPotato patterns. Use when authoring custom Sui Move extensions for Smart Gates, Smart Turrets, or Smart Storage Units; for simulating pre-signed Programmable Transaction Block command arrays before wallet execution, use simulate_eve_sui_ptb instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'contract_type' ('assembly_id' defaults to 'standard'), supports '?demo=true' or L402 (200 sats), and returns HTTP 400 if invalid. |
| `compile_eve_gate_acl` | `POST /api/v1/eve-frontier/smart-gate-acl-compiler` | 130 sats (L402) | Compiles EVE Frontier Tribe access control lists, diplomatic standings, and surge-pricing toll rules into Sui Move Smart Gate AccessPolicy constraints. Use when configuring on-chain jump permissions and LUX/SUI toll schedules for a player-owned Smart Gate; for calculating optimal multi-system jump routes across existing stargates, use plan_eve_gate_route instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'gate_assembly_id' ('toll_mode' defaults to 'standing_tiered'), supports '?demo=true' or L402 (130 sats), and returns HTTP 400 if invalid. |
| `simulate_eve_sui_ptb` | `POST /api/v1/eve-frontier/sui-ptb-simulator` | 150 sats (L402) | Simulates Sui Programmable Transaction Block (PTB) command sequences to detect unauthorized coin splits, object transfers, and unconsumed HotPotato receipts. Use when auditing an untrusted EVE Frontier transaction bundle before signing with a pilot wallet; for verifying pilot zkLogin JWT proofs and character ownership capabilities, use verify_eve_zklogin_character instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'ptb_commands_json' ('strictness_mode' defaults to 'strict_zero_drain'), supports '?demo=true' or L402 (150 sats), and returns HTTP 400 if invalid. |
| `verify_eve_zklogin_character` | `POST /api/v1/eve-frontier/zklogin-character-verifier` | 100 sats (L402) | Verifies EVE Frontier Sui zkLogin BN254 zero-knowledge proofs, ephemeral session signatures, and SmartCharacter ownership capabilities. Use when authenticating a pilot's off-chain OAuth/zkLogin session before granting tribe vault or dApp access; for auditing tribe-wide diplomatic standings and reputation registries, use audit_eve_tribe_standings instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'jwt_proof' ('ephemeral_scheme' defaults to 'ED25519'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `plan_eve_gate_route` | `POST /api/v1/eve-frontier/gate-route-planner` | 100 sats (L402) | Calculates optimal stargate jump routes between EVE Frontier solar systems minimizing gigajoule fuel consumption, LUX gate tolls, or jump count. Use when plotting a ship transit path across public and tribe-restricted Smart Gates; for identifying multi-system commodity arbitrage trade loops across Smart Storage Units, use find_eve_ssu_arbitrage instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'origin_system' ('destination_system' defaults to 'standard'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `optimize_eve_node_power` | `POST /api/v1/eve-frontier/network-node-gj-optimizer` | 100 sats (L402) | Calculates Lagrange Network Node hourly gigajoule (GJ) fuel burn rates, capacity headroom, and offline vulnerability windows for connected Smart Assemblies. Use when balancing steady-state power allocations on a single Lagrange Network Node; for stress-testing node capacitor depletion under active hostile fleet bombardment, use simulate_eve_capacitor_siege instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'node_id' ('operating_profile' defaults to 'balanced'), supports '?demo=true' or L402 (100 sats), and returns HTTP 400 if invalid. |
| `simulate_eve_capacitor_siege` | `POST /api/v1/eve-frontier/assembly-capacitor-siege-sim` | 135 sats (L402) | Simulates Lagrange Network Node gigajoule (GJ) capacitor drain under sustained hostile fleet siege and computes optimal assembly load-shedding order. Use when preparing base defense power-shedding schedules against an incoming hostile fleet; for calculating routine peacetime fuel burn and reserve headroom, use optimize_eve_node_power instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'node_id' ('siege_intensity' defaults to 'skirmish_frigate_squad'), supports '?demo=true' or L402 (135 sats), and returns HTTP 400 if invalid. |
| `monitor_eve_constellation_fuel` | `POST /api/v1/eve-frontier/sovereignty-fuel-radar` | 140 sats (L402) | Monitors constellation-wide Lagrange Network Node fuel reserves, identifies the weakest sovereignty node, and calculates logistics convoy resupply urgency. Use when auditing multi-system sovereignty fuel health across an entire tribe constellation; for optimizing gigajoule load on a single individual Lagrange Network Node, use optimize_eve_node_power instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'constellation_id' ('alert_threshold_hours' defaults to '24h'), supports '?demo=true' or L402 (140 sats), and returns HTTP 400 if invalid. |
| `quote_eve_ssu_market` | `POST /api/v1/eve-frontier/ssu-market-maker` | 120 sats (L402) | Computes dynamic bonding-curve bid/ask quotes in LUX and per-transaction anti-drain caps for a player-owned Smart Storage Unit (SSU). Use when setting automated market-maker buy/sell prices for a single SSU vending inventory; for scanning multiple SSUs across star systems to find profitable trade routes, use find_eve_ssu_arbitrage instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'resource_type' ('pricing_regime' defaults to 'inventory_balanced'), supports '?demo=true' or L402 (120 sats), and returns HTTP 400 if invalid. |
| `find_eve_ssu_arbitrage` | `POST /api/v1/eve-frontier/ssu-arbitrage-route-finder` | 140 sats (L402) | Scans Smart Storage Unit (SSU) bid/ask spreads across star systems against ship cargo capacity and stargate fuel costs to rank net-profitable arbitrage loops. Use when planning multi-system trade runs to maximize net LUX profit per gigajoule of fuel burned; for calculating internal bid/ask market-maker quotes for your own SSU, use quote_eve_ssu_market instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'origin_system' ('hull_cargo_class' defaults to 'light_courier'), supports '?demo=true' or L402 (140 sats), and returns HTTP 400 if invalid. |
| `analyze_eve_killmail_threats` | `POST /api/v1/eve-frontier/killmail-threat-intel` | 150 sats (L402) | Analyzes on-chain EVE Frontier killmail.move events in a solar system to quantify gatecamp ambush probability and identify dominant hostile hull doctrines. Use when assessing solar system PvP danger before jumping a hauler or fleet into a system; for computing real-time weapon target-lock priorities during active grid combat, use prioritize_eve_turret_targets instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'system_id' ('time_window' defaults to '1h'), supports '?demo=true' or L402 (150 sats), and returns HTTP 400 if invalid. |
| `prioritize_eve_turret_targets` | `POST /api/v1/eve-frontier/turret-target-matrix` | 125 sats (L402) | Evaluates radar contacts by range, transversal velocity, and Tribe standing to output deterministic Smart Turret target-lock priorities and fire authorizations. Use when ranking active grid radar contacts for automated Smart Turret engagement; for reviewing historical solar system killmails and ambush probabilities before transit, use analyze_eve_killmail_threats instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'turret_id' ('engagement_doctrine' defaults to 'highest_threat'), supports '?demo=true' or L402 (125 sats), and returns HTTP 400 if invalid. |

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
