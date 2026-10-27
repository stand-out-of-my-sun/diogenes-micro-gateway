# Diogenes Web Extraction, Readability & Markdown Engine MCP (`diogenes-web-scraping-engine-mcp`)

[![Indexed on TensorBlock MCP Index](https://mcp-index.tensorblock.co/v1/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7/badge.svg)](https://www.tensorblock.co/mcp/servers/github-stand-out-of-my-sun-diogenes-l402-gateway-efbd75e7?client=cursor)
[![Glama MCP Server](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-web-scraping-engine-mcp/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-web-scraping-engine-mcp)
[![M8ven Score](https://m8ven.ai/badge/mcp/stand-out-of-my-sun-diogenes-web-scraping-engine-mcp-1841p4?v=b907960d7b43e88a0c703f1fe49a6895)](https://m8ven.ai/mcp/stand-out-of-my-sun-diogenes-web-scraping-engine-mcp-1841p4?s=readme)
[![Master Gateway](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway/badges/score.svg)](https://glama.ai/mcp/servers/stand-out-of-my-sun/diogenes-micro-gateway)

**Diogenes Web Extraction, Readability & Markdown Engine MCP** is a focused, zero-bloat Model Context Protocol (`streamable-http`) package powered by the [Diogenes Microservice Gateway](https://diogenes-micro-gateway.corinth.workers.dev).

Instead of loading all 121 gateway endpoints into your LLM's context window, installing this package exposes **only the 12 specialized `web-scraping-engine` tools** needed for **Web Extraction & Scraping**:

12 high-performance web extraction, readability & markdown tools: clean LLM markdown compiler, readable article extractor, OpenGraph & JSON-LD metadata parser, HTML table to JSON/Markdown converter, CSS selector isolator, paywall & overlay bypass auditor, XML sitemap crawler, hyperlink extractor, HTML XSS sanitizer, contact & lead info parser, SEO heading diagnostics, and RSS/Atom feed compiler.

---

## ⚡ 1-Click Install for Cursor & Claude Desktop

No API keys, user accounts, or local dependencies required. Zero setup — paste directly into your client config:

### 🖱️ Cursor IDE (`.cursor/mcp.json`)
Add to `.cursor/mcp.json` in your project root or global Cursor settings:

```json
{
  "mcpServers": {
    "diogenes-web-scraping-engine": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/web-scraping-engine"
    }
  }
}
```

### 🧠 Claude Desktop (`claude_desktop_config.json`)
Add to `claude_desktop_config.json` (Mac: `~/Library/Application Support/Claude/claude_desktop_config.json` | Windows: `%APPDATA%\Claude\claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "diogenes-web-scraping-engine": {
      "transport": "streamable-http",
      "url": "https://diogenes-micro-gateway.corinth.workers.dev/mcp/web-scraping-engine"
    }
  }
}
```

> **Prefer local stdio?** Run via npx:
> ```bash
> npx -y @stand-out-of-my-sun/diogenes-web-scraping-engine-mcp
> ```

---

## Included Tools in `web-scraping-engine` (12 Tools)

| MCP Tool Name | Underlying REST Route | Settlement | Capability |
| :--- | :--- | :--- | :--- |
| `extract_clean_markdown` | `POST /api/v1/extract/clean-markdown` | 10 sats (L402) | Converts raw HTML pages into clean, boilerplate-free, LLM-optimized Markdown with preserved hyperlinks and headings. Use when ingesting raw web documents or blog posts into agent context windows; for isolating tabular data into structured datasets, use parse_html_tables instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'html_content' ('conversion_mode' defaults to 'clean_semantic_article'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `scrape_readable_article` | `POST /api/v1/extract/readable-article` | 10 sats (L402) | Extracts primary article body, author bylines, publication timestamps, and estimated reading duration from web pages. Use when stripping navigation bars, advertisement containers, and cookie banners to isolate core editorial content; for converting full HTML to markdown, use extract_clean_markdown instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'html_content' ('readability_profile' defaults to 'article_body_strict'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `extract_structured_metadata` | `POST /api/v1/extract/structured-metadata` | 10 sats (L402) | Extracts OpenGraph tags, Twitter Card metadata, canonical URLs, and Schema.org JSON-LD microdata scripts from HTML. Use when indexing social share cards, author identity, breadcrumbs, and rich snippet schemas for AI search agents; for scanning page hyperlinks and outbound references, use extract_page_hyperlinks instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'html_content' ('metadata_targets' defaults to 'all_protocols'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `parse_html_tables` | `POST /api/v1/extract/html-tables` | 10 sats (L402) | Detects and parses HTML table elements into structured JSON record arrays and GitHub-Flavored Markdown tabular grids. Use when converting financial statements, product comparison grids, or sports statistics into structured data tables; for extracting raw clean markdown prose, use extract_clean_markdown instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'html_content' ('output_format' defaults to 'markdown_and_json'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `isolate_css_selectors` | `POST /api/v1/extract/css-selectors` | 10 sats (L402) | Evaluates CSS selector queries against HTML DOM trees to extract targeted inner text, outer HTML, or element attributes. Use when targeting specific elements like pricing badges, product titles, review cards, or navigation breadcrumbs; for parsing unstructured contact information, use extract_contact_info instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'html_content' and 'selector_query' ('extraction_mode' defaults to 'inner_text'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `detect_paywall_and_bypass` | `POST /api/v1/extract/paywall-detect` | 15 sats (L402) | Audits web page DOM hierarchies to detect soft paywalls, blur overlays, modal gates, and recovers concealed body text. Use when diagnosing paywall obstructions, diagnosing subscriber gating scripts, or auditing content access barriers; for assessing general SEO hygiene, use evaluate_seo_diagnostics instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'html_content' ('detection_profile' defaults to 'heuristic_dom_overlay'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `crawl_sitemap_urls` | `POST /api/v1/extract/sitemap-crawler` | 15 sats (L402) | Parses XML sitemaps and sitemap index files into structured URL trees with change frequency and last-modified filters. Use when discovering domain architectures, mapping crawl frontiers, or indexing blog/product catalogues; for extracting on-page hyperlinks from raw HTML, use extract_page_hyperlinks instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'sitemap_xml' ('filter_criteria' defaults to 'all_entries'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |
| `extract_page_hyperlinks` | `POST /api/v1/extract/page-hyperlinks` | 10 sats (L402) | Extracts, normalizes, and filters internal and external hyperlinks, anchor texts, and downloadable asset targets from HTML. Use when building site crawlers, auditing broken links, or extracting reference citations; for isolating primary readable article narrative text, use scrape_readable_article instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'html_content' ('link_scope' defaults to 'all_links'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `sanitize_html_content` | `POST /api/v1/extract/sanitize-html` | 10 sats (L402) | Sanitizes raw HTML by removing malicious script tags, iframes, inline event handlers, and data URIs into safe markup. Use when preparing untrusted third-party web content for rendering in agent dashboards or email clients; for converting clean HTML into markdown, use extract_clean_markdown instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'html_content' ('sanitization_strictness' defaults to 'strip_scripts_and_iframes'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `extract_contact_info` | `POST /api/v1/extract/contact-info` | 10 sats (L402) | Extracts email addresses, telephone numbers, physical addresses, and social network handles from web text and DOM footers. Use when researching sales leads, aggregating business contact directories, or extracting customer service info; for parsing structured tabular data, use parse_html_tables instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'content' ('extraction_focus' defaults to 'all_contacts'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `evaluate_seo_diagnostics` | `POST /api/v1/extract/seo-diagnostics` | 10 sats (L402) | Audits HTML heading structures, title lengths, meta descriptions, image alt tags, and OpenGraph compliance into a health score. Use when auditing landing pages, verifying SEO compliance before publishing, or evaluating crawl friendliness; for extracting article bodies, use scrape_readable_article instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'html_content' ('audit_level' defaults to 'comprehensive_audit'), supports '?demo=true' or L402 (10 sats), and returns HTTP 400 if invalid. |
| `compile_rss_feed` | `POST /api/v1/extract/rss-feed-compiler` | 15 sats (L402) | Transforms JSON item collections or article card arrays into standardized RSS 2.0, Atom 1.0, or JSON Feed 1.1 syndication feeds. Use when syndicating blog articles, product announcements, or changelog cards to RSS readers and AI agents; for compiling structured sitemap listings, use crawl_sitemap_urls instead. Stateless read-only edge call (max 32 KB, 60 RPM): accepts 'items_json' and 'channel_title' ('feed_standard' defaults to 'rss_2_0'), supports '?demo=true' or L402 (15 sats), and returns HTTP 400 if invalid. |

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
| **Category** | `Web Extraction & Scraping` |
| **Transport** | `streamable-http` |
| **Endpoint** | `https://diogenes-micro-gateway.corinth.workers.dev/mcp/web-scraping-engine` |
| **Manifest** | `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/web-scraping-engine.json` |
| **Health Check** | `https://diogenes-micro-gateway.corinth.workers.dev/api/v1/health` |
| **Auth** | `none` (100% account-less free tier, MCP discovery & `?demo=true` previews; optional 6 flexible crypto payment rails for production calls: L402, x402, Base MPP, Garlicoin 0-Conf, BSC WGRLC, or Prepaid GRLC session API keys) |
| **Install Confidence** | `high` (Zero-install remote Streamable HTTP endpoint + root `package.json`, `smithery.yaml`, `server.json`, `glama.json`, and `mcp.json`) |
| **License** | `MIT` |
| **Verification** | `verified` (`@stand-out-of-my-sun` verified via `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/tensorblock.json` & `https://diogenes-micro-gateway.corinth.workers.dev/.well-known/mcp/web-scraping-engine.json`) |
| **Maintainer** | `@stand-out-of-my-sun` |
| **Docs** | `https://diogenes-micro-gateway.corinth.workers.dev/llms.txt` |
| **Support** | `https://github.com/stand-out-of-my-sun/diogenes-web-scraping-engine-mcp/issues` |
