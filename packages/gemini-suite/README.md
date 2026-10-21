# Diogenes Gemini Suite & Autonomous Agents MCP (`diogenes-gemini-suite-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-gemini-suite-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-gemini-suite-mcp)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Gemini Suite & Autonomous Agents MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Autonomous Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 85 gateway endpoints into your LLM's context window, installing this package exposes **only the 15 specialized `gemini-suite` tools** needed for **AI & LLM Integration**:

15 MCP tools providing account-less access to all 45 Google Gemini models (Gemini 4 Argon, 3.1 Pro, 3.8 Flash) and autonomous agents (Antigravity Agent, Deep Research Pro, Computer Use, Nano Banana Pro, Veo 3, Lyria 3) via L402, x402, and MPP.

---

## ⚡ 1-Click Install for Cursor & Claude Desktop

No API keys, user accounts, or local dependencies required. Zero setup — paste directly into your client config:

### 🖱️ Cursor IDE (`.cursor/mcp.json`)
Add to `.cursor/mcp.json` in your project root or global Cursor settings:

```json
{
  "mcpServers": {
    "diogenes-gemini-suite": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/gemini-suite"
    }
  }
}
```

### 🧠 Claude Desktop (`claude_desktop_config.json`)
Add to `claude_desktop_config.json` (Mac: `~/Library/Application Support/Claude/claude_desktop_config.json` | Windows: `%APPDATA%\Claude\claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "diogenes-gemini-suite": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/gemini-suite"
    }
  }
}
```

> **Prefer local stdio?** Run via npx:
> ```bash
> npx -y @stand-out-of-my-sun/diogenes-gemini-suite-mcp
> ```

---

## Included Tools in `gemini-suite` (15 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `generate_gemini_completion` | `POST /api/v1/ai/generate` | 250 sats (L402) | Generates text completions and structured reasoning across all 45 Google Gemini foundation models (Gemini 4 Argon, 3.1 Pro, 3.8 Flash) with zero Google account or API key required. Use when running single-turn reasoning, coding, or analytical prompts on a specific Gemini model; for delegating multi-step autonomous tasks that require remote tool execution, use execute_antigravity_agent instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'prompt' ('model' defaults to 'gemini-4-argon'), supports '?demo=true' or L402 (250 sats), and returns HTTP 400 if invalid. |
| `execute_antigravity_agent` | `POST /api/v1/ai/antigravity-agent` | 500 sats (L402) | Dispatches a complex engineering or operational task to Google's Antigravity autonomous agent for multi-step planning, tool orchestration, and verified execution. Use when solving multi-stage software engineering or workflow tasks that require autonomous planning; for compiling exhaustive multi-source literature and market research dossiers, use conduct_deep_research_investigation instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'input' ('execution_mode' defaults to 'autonomous_verified'), supports '?demo=true' or L402 (500 sats), and returns HTTP 400 if invalid. |
| `conduct_deep_research_investigation` | `POST /api/v1/ai/deep-research` | 1000 sats (L402) | Runs an iterative, multi-hop investigative research session via Gemini Deep Research Pro, cross-examining primary sources to produce a cited technical report. Use when investigating complex scientific, architectural, or market questions requiring deep multi-hop synthesis; for running a fast single-turn Google Search grounded fact lookup, use search_gemini_grounded_web instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'input' ('depth_tier' defaults to 'quick_synthesis'), supports '?demo=true' or L402 (1000 sats), and returns HTTP 400 if invalid. |
| `operate_computer_use_agent` | `POST /api/v1/ai/computer-use` | 800 sats (L402) | Plans and executes OS-level desktop, browser DOM, and GUI coordinate actions (click, type, scroll, wait) using the Gemini Computer Use agent. Use when automating interactive web UIs or desktop workflows that lack a direct REST API; for running code-first API and terminal automation tasks, use execute_antigravity_agent instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'input' ('viewport_preset' defaults to 'desktop_1080p'), supports '?demo=true' or L402 (800 sats), and returns HTTP 400 if invalid. |
| `search_gemini_grounded_web` | `POST /api/v1/ai/grounded-search` | 200 sats (L402) | Answers factual queries with live Google Search grounding, returning verified up-to-date answers accompanied by source URLs and grounding metadata. Use when verifying live web facts, documentation updates, or current events in a single low-latency call; for querying geographic places, coordinates, directions, and local business data via Google Maps grounding, use search_gemini_grounded_maps instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'prompt' ('recency_bias' defaults to 'past_24h'), supports '?demo=true' or L402 (200 sats), and returns HTTP 400 if invalid. |
| `search_gemini_grounded_maps` | `POST /api/v1/ai/grounded-maps` | 250 sats (L402) | Executes geospatial and point-of-interest queries grounded in live Google Maps data, returning verified addresses, coordinates, operating hours, and spatial context. Use when resolving physical locations, venues, transit distances, or regional infrastructure data; for searching general web articles, documentation, and news, use search_gemini_grounded_web instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'prompt' ('distance_units' defaults to 'metric_km'), supports '?demo=true' or L402 (250 sats), and returns HTTP 400 if invalid. |
| `compile_mpp_research_dossier` | `POST /api/v1/mpp/deep-search` | 1000 sats (MPP) | Compiles a structured JSON research dossier ('key_findings', 'synthesis_quality_score', 'sources_cited') settled via Base EVM Machine Payments Protocol (MPP). Use when generating a strict-JSON cited intelligence brief paid via Base USDC MPP session headers; for running long-form narrative research reports via L402 Lightning, use conduct_deep_research_investigation instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'query' ('output_density' defaults to 'concise_5_points'), supports '?demo=true' or MPP (1000 sats), and returns HTTP 400 if invalid. |
| `generate_gemini_embeddings` | `POST /api/v1/ai/embeddings` | 50 sats (L402) | Generates normalized 3,072-dimensional or 768-dimensional semantic vector embeddings via Google Gemini Embedding 2 for RAG indexing and cosine-similarity search. Use when embedding text passages or queries via L402 Lightning with configurable Matryoshka dimensions; for running live Google Search grounded factual queries, use search_gemini_grounded_web instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'text' ('model' defaults to 'gemini-embedding-2'), supports '?demo=true' or L402 (50 sats), and returns HTTP 400 if invalid. |
| `analyze_omni_multimodal_input` | `POST /api/v1/ai/omni` | 300 sats (L402) | Analyzes combined multimodal prompts spanning text, image descriptors, audio transcripts, and video temporal events using Gemini Omni Flash. Use when correlating information across multiple media modalities in a single reasoning pass; for running pure text-only reasoning or coding prompts, use generate_gemini_completion instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'input' ('modality_focus' defaults to 'cross_modal_synthesis'), supports '?demo=true' or L402 (300 sats), and returns HTTP 400 if invalid. |
| `plan_robotics_spatial_trajectory` | `POST /api/v1/ai/robotics` | 450 sats (L402) | Computes 3D spatial affordances, obstacle-avoidance waypoints, and manipulator grasp sequences using Gemini Robotics ER 2 embodied reasoning. Use when planning physical robot arm kinematics, mobile navigation waypoints, or spatial scene task orders; for interacting with 2D desktop or browser GUI screens, use operate_computer_use_agent instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'prompt' ('coordinate_frame' defaults to 'cartesian_xyz_meters'), supports '?demo=true' or L402 (450 sats), and returns HTTP 400 if invalid. |
| `generate_nano_banana_image` | `POST /api/v1/ai/image-gen` | 350 sats (L402) | Generates photorealistic illustrations, UI mockups, and technical diagrams from text prompts using the Nano Banana Pro (Gemini 2.5 Flash Image) model family. Use when creating static visual assets, icons, or architecture diagrams from text descriptions; for synthesizing animated multi-second video clips with motion, use generate_veo_cinematic_video instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'prompt' ('aspect_ratio' defaults to '1:1'), supports '?demo=true' or L402 (350 sats), and returns HTTP 400 if invalid. |
| `generate_veo_cinematic_video` | `POST /api/v1/ai/video-gen` | 1500 sats (L402) | Synthesizes high-definition cinematic video sequences with temporally coherent camera motion and physics using Google Veo 3. Use when generating moving video clips, product B-roll, or animated scene renders from text prompts; for rendering static single-frame images or diagrams at lower cost, use generate_nano_banana_image instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'prompt' ('motion_style' defaults to 'static_tripod'), supports '?demo=true' or L402 (1500 sats), and returns HTTP 400 if invalid. |
| `compose_lyria_music_track` | `POST /api/v1/ai/music-gen` | 500 sats (L402) | Composes studio-grade instrumental music tracks, ambient loops, and multi-instrument arrangements from genre, tempo, and mood prompts using Google Lyria 3. Use when generating musical scores, soundtrack stems, or rhythmic audio loops; for converting written text into spoken human voice narration (TTS), use synthesize_gemini_speech_audio instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'prompt' ('genre_preset' defaults to 'cinematic_synth'), supports '?demo=true' or L402 (500 sats), and returns HTTP 400 if invalid. |
| `synthesize_gemini_speech_audio` | `POST /api/v1/ai/tts` | 200 sats (L402) | Converts written text into natural, prosody-controlled spoken voice audio using Gemini 3.8 Flash Neural Text-to-Speech. Use when rendering voiceover narration or spoken agent replies from a deterministic text script; for conducting bidirectional conversational audio dialog comprehension, use process_live_audio_dialogue instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'text' ('voice_persona' defaults to 'neutral_broadcast'), supports '?demo=true' or L402 (200 sats), and returns HTTP 400 if invalid. |
| `process_live_audio_dialogue` | `POST /api/v1/ai/audio-live` | 300 sats (L402) | Processes real-time conversational dialog turns with native acoustic emotion, interruption handling, and paralinguistic cue comprehension via Gemini 3.8 Live. Use when handling interactive voice-agent dialog turns that require tone and turn-taking awareness; for performing one-way text-to-speech readout of a static text string, use synthesize_gemini_speech_audio instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'input' ('response_tone' defaults to 'direct_peer'), supports '?demo=true' or L402 (300 sats), and returns HTTP 400 if invalid. |

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
| **Category** | `AI & LLM Integration` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/gemini-suite` |
| **Manifest** | `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/gemini-suite.json` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional `L402`, `x402`, or `MPP` request headers for production calls) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/gemini-suite.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-gemini-suite-mcp/issues` |
