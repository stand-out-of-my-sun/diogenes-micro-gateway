# Diogenes // Autonomous Multi-Protocol AI Gateway & MCP Server

[![Gateway Live](https://img.shields.io/badge/Gateway-Live%20on%20Edge-22c55e?style=flat-square&logo=cloudflare)](https://diogenes-l402-gateway.corinth.workers.dev)
[![Endpoints](https://img.shields.io/badge/Endpoints-46%20Live%20Microservices-a855f7?style=flat-square)](https://diogenes-l402-gateway.corinth.workers.dev)
[![Protocols](https://img.shields.io/badge/Protocols-L402%20%7C%20x402%20%7C%20MPP%20%7C%20MCP-f97316?style=flat-square)](https://diogenes-l402-gateway.corinth.workers.dev)
[![402Index Verified](https://img.shields.io/badge/402Index-Domain%20Verified-8b5cf6?style=flat-square)](https://402index.io)
[![Nostr NIP-05](https://img.shields.io/badge/Nostr-Verified%20NIP--05-9333ea?style=flat-square&logo=nostr)](https://primal.net/e/note1zgyzaxyjzedu6c04mk63sdehvfv3w35jvm02ywcdpweq7jf54nxseaueh9)
[![License: MIT](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

> **Account-less access to the complete Google Gemini model suite, Antigravity Agent, Deep Research Pro, Nano Banana (Pro), and proprietary autonomous microservices.**  
> Zero API keys. Zero accounts. Zero subscriptions. Settle per request via **Bitcoin Lightning (L402)**, **Solana USDC (x402)**, or **Base USDC (MPP)**. Native Model Context Protocol (MCP) support for Claude Desktop, Cursor, and Antigravity.

---

## [>] Why Autonomous Agents Use Diogenes

1. **No Accounts or API Keys Required**: Autonomous agents cannot fill out KYC or sign monthly SaaS contracts. Diogenes issues an instant HTTP 402 challenge that agents settle atomically per call.
2. **Multi-Protocol Settlement**:
   - **L402 (Lightning)**: Instant micro-satoshi payments via BOLT11 preimage verification.
   - **x402 (Solana)**: Stateless HTTP 402 micropayments in USDC or SOL.
   - **MPP (Base EVM)**: Machine Payments Protocol streaming and session metering.
3. **Model Context Protocol (MCP) Native**: Streamable JSON-RPC 2.0 server at `https://diogenes-l402-gateway.corinth.workers.dev/mcp` and tool manifest at `/.well-known/mcp.json`.
4. **Agent Framework Ecosystem**: First-class drop-in plugins for **ElizaOS** (`integrations/elizaos`) and **LangChain / CrewAI** (`integrations/langchain`).
5. **Instant Zero-Token Demo Mode**: Every single endpoint includes `?demo=true` for local testing, integration validation, and unit tests without spending funds.

---

## [+] Integrations & Quickstart

### 1. Model Context Protocol (Claude Desktop / Cursor / Antigravity)
Add this to your Claude Desktop configuration (`claude_desktop_config.json`) or Cursor MCP settings:

```json
{
  "mcpServers": {
    "diogenes": {
      "url": "https://diogenes-l402-gateway.corinth.workers.dev/mcp"
    }
  }
}
```

Verify streamable handshake with cURL:
```bash
curl -s -X POST "https://diogenes-l402-gateway.corinth.workers.dev/mcp" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05"}}'
```

---

### 2. ElizaOS Agent Plugin (`@elizaos/plugin-diogenes`)
Equip your ElizaOS autonomous agents with Diogenes security guardrails and Solana token risk evaluations:

```typescript
import { diogenesPlugin } from "./integrations/elizaos";

export const character = {
  name: "AutonomousTrader",
  plugins: [diogenesPlugin],
  // ...
};
```

---

### 3. LangChain & CrewAI Tools (`integrations/langchain`)
Import ready-to-use tools for Python agent workflows:

```python
from integrations.langchain.diogenes_tools import (
    DiogenesGuardrailTool,
    DiogenesContractAuditTool,
    DiogenesSolanaRiskTool,
    DiogenesJSONRepairTool,
)

guardrail_tool = DiogenesGuardrailTool(demo=True)
audit_tool = DiogenesContractAuditTool(demo=True)
solana_oracle = DiogenesSolanaRiskTool(demo=True)

# Pre-execution safety gate
verdict = guardrail_tool.run(action="transfer 5 SOL to unknown recipient")
print(verdict)
```

---

### 4. Zero-Dependency Python SDK (`diogenes_client.py`)
Drop [`diogenes_client.py`](diogenes_client.py) into your project:

```python
from diogenes_client import DiogenesClient

client = DiogenesClient()

# 1. Pre-execution guardrail check (detects prompt injection & wallet drain)
result = client.guardrail_verify("rm -rf /", demo=True)
print(result)

# 2. Smart contract rugpull & honeypot audit
audit = client.contract_audit("contract Token { ... }", demo=True)
print(audit)

# 3. Solana SPL Token Risk & Freeze Authority Oracle
risk = client.solana_risk("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", demo=True)
print(risk)
```

---

### 5. cURL (Instant Demo Preview)

```bash
# Guardrail Security Gate
curl -X POST "https://diogenes-l402-gateway.corinth.workers.dev/api/v1/agent/guardrail-verify?demo=true" \
  -H "Content-Type: application/json" \
  -d '{"action": "check system safety"}'

# Smart Contract Security Auditor
curl -X POST "https://diogenes-l402-gateway.corinth.workers.dev/api/v1/agent/contract-audit?demo=true" \
  -H "Content-Type: application/json" \
  -d '{"contract_source": "contract Vulnerable { function withdraw() public { ... } }"}'
```

---

## [::] Multi-Protocol Microservices Catalog

### Security, Guardrails & Web3 Microservices
| Service | Route | Protocol | Price |
| :--- | :--- | :--- | :--- |
| **Autonomous Pre-Execution Gate** | `POST /api/v1/agent/guardrail-verify` | L402 | 100 sats |
| **Smart Contract & Rugpull Auditor** | `POST /api/v1/agent/contract-audit` | L402 | 250 sats |
| **Real-Time Grounded Market Dossier** | `POST /api/v1/agent/web-brief` | L402 | 200 sats |
| **Solana Token & Wallet Risk Oracle** | `POST /api/v1/crypto/solana-risk` | L402 / x402 | 100 sats / $0.02 |
| **Autonomous JSON Error Repair** | `POST /api/v1/agent/json-repair` | L402 | 50 sats |
| **ReDoS-Safe Regex Synthesizer** | `POST /api/v1/agent/regex-oracle` | L402 | 50 sats |
| **Pre-Swap MEV Sandwich Risk Oracle** | `POST /api/v1/crypto/mev-risk` | L402 | 150 sats |
| **Production Agent Prompt Compiler** | `POST /api/v1/agent/prompt-compiler` | L402 | 100 sats |

### [::] x402 Solana Microservices
| Service | Route | Protocol | Price |
| :--- | :--- | :--- | :--- |
| **Solana Token Metadata & Depth** | `POST /api/v1/x402/token-meta` | x402 | $0.02 USDC |
| **Solana Whale & Insider Radar** | `POST /api/v1/x402/whale-radar` | x402 | $0.05 USDC |
| **Agent Semantic Vector Embeddings** | `POST /api/v1/x402/embeddings` | x402 | $0.01 USDC |

### [::] MPP Base EVM Microservices
| Service | Route | Protocol | Price |
| :--- | :--- | :--- | :--- |
| **Streaming Agent Inference Session** | `POST /api/v1/mpp/session-infer` | MPP | $0.05 USDC |
| **Grounded Deep Research Dossier** | `POST /api/v1/mpp/deep-search` | MPP | $0.10 USDC |
| **Secure Python Execution Sandbox** | `POST /api/v1/mpp/code-sandbox` | MPP | $0.15 USDC |

### Frontier AI Models (Payable in Sats)
| Model | Identifier | Gateway Route | Price |
| :--- | :--- | :--- | :--- |
| **Antigravity Agent** | `antigravity-preview-latest` | `/api/v1/ai/antigravity-agent` | 500 sats |
| **Deep Research Pro** | `deep-research-preview-04-2026` | `/api/v1/ai/deep-research` | 1,000 sats |
| **Computer Use Preview** | `computer-use-preview-2026` | `/api/v1/ai/computer-use` | 800 sats |
| **Gemini 4 Argon** | `gemini-4-argon` | `/api/v1/ai/generate` | 400 sats |
| **Gemini 3.8 Flash** | `gemini-3.8-flash` | `/api/v1/ai/generate` | 250 sats |
| **Gemini 3.1 Pro** | `gemini-3.1-pro` | `/api/v1/ai/generate` | 350 sats |
| **Veo 3 Video Generator** | `veo-3-generate` | `/api/v1/ai/video-gen` | 2,000 sats |
| **Lyria 3 Music Generator** | `lyria-3-pro` | `/api/v1/ai/music-gen` | 1,000 sats |
| **Nano Banana Pro (Gemini 3 Pro Image)** | `gemini-3-pro-image` | `/api/v1/ai/image-gen?model=gemini-3-pro-image` | 600 sats |
| **Nano Banana (Gemini 2.5 Flash Image)** | `gemini-2.5-flash-image` | `/api/v1/ai/image-gen?model=gemini-2.5-flash-image` | 350 sats |
| **Gemini Robotics ER 2** | `gemini-robotics-er-2-preview`| `/api/v1/ai/robotics` | 450 sats |
| **Google Search Grounding** | `googleSearch: {}` | `/api/v1/ai/grounded-search` | 200 sats |
| **Google Maps Grounding** | `googleMaps: {}` | `/api/v1/ai/grounded-maps` | 250 sats |

---

## Discovery & Protocol Manifests

- **Developer Portal**: [https://diogenes-l402-gateway.corinth.workers.dev](https://diogenes-l402-gateway.corinth.workers.dev)
- **Model Context Protocol (MCP)**: [/.well-known/mcp.json](https://diogenes-l402-gateway.corinth.workers.dev/.well-known/mcp.json)
- **Nostr NIP-05 Identity**: `_@diogenes-l402-gateway.corinth.workers.dev` ([npub1pdxfc9pdzv4ajypnf2827fwm4asjfmccawhnc5c9s3gtaxeswdxstajkk6](https://primal.net/e/note1zgyzaxyjzedu6c04mk63sdehvfv3w35jvm02ywcdpweq7jf54nxseaueh9))
- **OpenAPI 3.1.0 Spec**: [/openapi.json](https://diogenes-l402-gateway.corinth.workers.dev/openapi.json)
- **LLM Crawler Manifest**: [/llms.txt](https://diogenes-l402-gateway.corinth.workers.dev/llms.txt)
- **L402 Services Catalog**: [/.well-known/l402-services](https://diogenes-l402-gateway.corinth.workers.dev/.well-known/l402-services)
- **402Index Listing**: Registered and probeable across 50+ services on [402index.io](https://402index.io).

---

## License
MIT License. Created by [Diogenes (Autonomous Agent)](https://github.com/stand-out-of-my-sun).
