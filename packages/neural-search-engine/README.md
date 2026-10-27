# Diogenes Neural Search, Grounded Research & Deep Intelligence MCP (`diogenes-neural-search-engine-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-neural-search-engine-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-neural-search-engine-mcp)
[![M8ven Score](https://m8ven.ai/badge/mcp/stand-out-of-my-sun-diogenes-neural-search-engine-mcp-j937yg?v=b299569d781d52f5f884475a5e5c4df8)](https://m8ven.ai/mcp/stand-out-of-my-sun-diogenes-neural-search-engine-mcp-j937yg?s=readme)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Neural Search, Grounded Research & Deep Intelligence MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 121 gateway endpoints into your LLM's context window, installing this package exposes **only the 12 specialized `neural-search-engine` tools** needed for **Search & Deep Research**:

12 real-time neural search, grounded research & factual verification tools: neural search synthesizer, deep research dossier compiler, Boolean & semantic query expander, curated domain registry filter, breaking news recency & velocity tracker, factual consensus claim verifier, scholarly citation compiler (BibTeX/APA/IEEE), topic subgraph clusterer, bull/bear media sentiment oracle, expert source ranker, chronological timeline synthesizer, and competitive landscape matrix.

---

## ⚡ 1-Click Install for Cursor & Claude Desktop

No API keys, user accounts, or local dependencies required. Zero setup — paste directly into your client config:

### 🖱️ Cursor IDE (`.cursor/mcp.json`)
Add to `.cursor/mcp.json` in your project root or global Cursor settings:

```json
{
  "mcpServers": {
    "diogenes-neural-search-engine": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/neural-search-engine"
    }
  }
}
```

### 🧠 Claude Desktop (`claude_desktop_config.json`)
Add to `claude_desktop_config.json` (Mac: `~/Library/Application Support/Claude/claude_desktop_config.json` | Windows: `%APPDATA%\Claude\claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "diogenes-neural-search-engine": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/neural-search-engine"
    }
  }
}
```

> **Prefer local stdio?** Run via npx:
> ```bash
> npx -y @stand-out-of-my-sun/diogenes-neural-search-engine-mcp
> ```

---

## Included Tools in `neural-search-engine` (12 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `synthesize_neural_search` | `POST /api/v1/search/neural-synthesizer` | 25 sats (L402) | Executes multi-domain semantic search query expansion, relevance re-ranking, and extractive factual snippet bundling. Use when retrieving grounded web knowledge, evaluating search results across diverse domains, and retrieving cited answers; for building deep research briefings, use compile_research_dossier instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'search_query' ('search_mode' defaults to 'hybrid_semantic_keyword'), supports '?demo=true' or L402 (25 sats), and returns HTTP 400 if invalid. |
| `compile_research_dossier` | `POST /api/v1/search/research-dossier` | 35 sats (L402) | Compiles multi-source factual research briefs with verified citations, confidence intervals, and key analytical takeaways. Use when synthesizing comprehensive intelligence briefings on complex technical, scientific, or market developments; for rapid query search snippets, use synthesize_neural_search instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'research_topic' ('depth_level' defaults to 'executive_brief'), supports '?demo=true' or L402 (35 sats), and returns HTTP 400 if invalid. |
| `expand_search_queries` | `POST /api/v1/search/query-expansion` | 10 sats (L402) | Generates targeted Boolean queries, semantic synonym variations, and sub-question expansions from an ambiguous prompt. Use when overcoming query vocabulary mismatches and expanding search recall across academic, code, or patent databases; for scoping queries to domain categories, use filter_domain_intelligence instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'base_query' ('expansion_strategy' defaults to 'boolean_operators'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `filter_domain_intelligence` | `POST /api/v1/search/domain-intelligence` | 10 sats (L402) | Scopes search execution and filters results strictly across verified high-reputation domain registries and regulatory bodies. Use when restricting search discovery to verified academic papers, SEC filings, official documentation, or legal statutes; for checking specific factual claims, use verify_factual_claims instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'query' ('domain_tier' defaults to 'academic_and_research'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `analyze_news_recency` | `POST /api/v1/search/news-recency` | 20 sats (L402) | Tracks breaking news feeds, clusters trending story cycles, and calculates story publication velocity over recent timeframes. Use when analyzing breaking market catalysts, emerging controversies, or ongoing product announcements; for evaluating sentiment polarity across media, use analyze_media_sentiment instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'topic' ('recency_window' defaults to 'past_24_hours'), supports '?demo=true' or L402 (20 sats), and returns HTTP 400 if invalid. |
| `verify_factual_claims` | `POST /api/v1/search/verify-claims` | 20 sats (L402) | Audits factual statements against authoritative consensus sources and assigns truthfulness scores with counter-evidence. Use when checking disputed claims, detecting AI hallucinations, or validating quotes before citation; for formatting academic citations, use extract_scholarly_citations instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'claim_statement' ('verification_rigor' defaults to 'multi_source_consensus'), supports '?demo=true' or L402 (20 sats), and returns HTTP 400 if invalid. |
| `extract_scholarly_citations` | `POST /api/v1/search/scholarly-citations` | 10 sats (L402) | Formats academic paper metadata and DOI identifiers into standard scholarly citation formats (BibTeX, APA, IEEE, MLA). Use when generating bibliographies for research papers, validating journal references, or resolving DOI identifiers; for structuring research timelines, use summarize_temporal_timeline instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'source_content_or_doi' ('citation_style' defaults to 'bibtex_format'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `cluster_topic_subgraphs` | `POST /api/v1/search/topic-clusters` | 15 sats (L402) | Discovers latent thematic clusters, subtopic branches, and conceptual relationships across document corpora. Use when structuring broad search results into distinct thematic silos or generating table of contents taxonomies; for tracking chronological milestones, use summarize_temporal_timeline instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'documents_or_queries' ('clustering_method' defaults to 'tf_idf_semantic_graph'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `analyze_media_sentiment` | `POST /api/v1/search/media-sentiment` | 15 sats (L402) | Evaluates brand, market, or topic sentiment across news headlines, discussions, and articles with bull/bear polarity scores. Use when assessing market sentiment, social brand perception, or controversy exposure on specific entities; for compiling competitive market comparisons, use compile_competitive_landscape instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'text_or_headlines' ('sentiment_domain' defaults to 'general_news'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `rank_expert_sources` | `POST /api/v1/search/expert-sources` | 10 sats (L402) | Identifies and ranks top domain authorities, leading researchers, and primary documentation repositories for technical topics. Use when finding primary source experts to cite or discovering foundational documentation for specialized fields; for ranking general search query snippets, use synthesize_neural_search instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'subject_area' ('authority_metric' defaults to 'pagerank_and_domain_authority'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `summarize_temporal_timeline` | `POST /api/v1/search/temporal-timeline` | 15 sats (L402) | Synthesizes chronological milestone timelines from search results, news archives, and historical documents. Use when reconstructing historical events, tracking company histories, or mapping regulatory progression; for tracking real-time breaking news in the past 24 hours, use analyze_news_recency instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'event_corpus' ('timeline_resolution' defaults to 'chronological_milestones'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `compile_competitive_landscape` | `POST /api/v1/search/competitive-landscape` | 25 sats (L402) | Compiles multi-competitor comparison matrices, pricing tiers, feature coverage, and strategic moat evaluations. Use when analyzing market landscapes, evaluating pricing parity, or conducting diligence on competing product offerings; for compiling narrative research briefs, use compile_research_dossier instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'target_entity_or_market' ('analysis_framework' defaults to 'feature_and_pricing_matrix'), supports '?demo=true' or L402 (25 sats), and returns HTTP 400 if invalid. |

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
| **Category** | `Search & Deep Research` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/neural-search-engine` |
| **Manifest** | `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/neural-search-engine.json` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional 6 flexible crypto payment rails for production calls: L402, x402, Base MPP, Garlicoin 0-Conf, BSC WGRLC, or Prepaid GRLC session API keys) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/neural-search-engine.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-neural-search-engine-mcp/issues` |
