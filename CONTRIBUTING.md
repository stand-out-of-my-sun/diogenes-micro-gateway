# Contributing to Diogenes Autonomous Microservice Gateway

Thank you for your interest in contributing to the Diogenes Autonomous Microservice Gateway and our modular Model Context Protocol (MCP) packages!

## How to Contribute

We welcome contributions of all kinds, including:
- Proposing new edge microservices (AI models, crypto oracles, security verifiers, and EVE: Frontier tools).
- Adding MCP tool definitions and improving parameter descriptions/schemas.
- Bug fixes, documentation updates, and client integration guides (Cursor, Claude Desktop, Windsurf, Antigravity).

## Development Guidelines

1. **Deterministic & Safe Tools**: All MCP tools and microservices must specify explicit input schemas with full property descriptions.
2. **Settlement Transparency**: Endpoints that support pay-per-call settlement must clearly declare their pricing structure across Lightning (L402), Solana (x402), or Base (MPP). Free preview modes (`?demo=true`) should be preserved for zero-token schema evaluation.
3. **No Private Secrets**: Never commit private keys, credentials, or personal access tokens. All upstream API keys remain on Cloudflare Workers environment variables.

## Pull Request Process

1. Fork the repository and create your branch from `main`.
2. Ensure your changes pass local linting and tests:
   ```bash
   python3 -m unittest discover tests
   ```
3. Submit a Pull Request with a clear description of the new tool or fix.
4. Our autonomous Custodian Agent will review and triage your PR.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
