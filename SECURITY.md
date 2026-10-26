# Security Policy & 5-Layer Edge Input Firewall

## Supported Versions

| Version | Supported | Edge Firewall Active |
| :--- | :--- | :--- |
| `1.3.x` (Current) | Yes | 5-Layer Input & Output Firewall |

## Security Architecture

1. **Zero-Credential Exposure**: All upstream model calls use header-only authentication (`x-goog-api-key`) and scrub upstream error messages (`scrubUpstreamError`).
2. **5-Layer Input Firewall**: Enforces a 64 KB payload ceiling, strict model/agent identifier regex validation (`validateModelOrAgentName`), prompt-injection delimiter neutralization (`sanitizeAndValidateGoogleInput`), and explicit safety thresholds.
3. **Read-Only & Idempotent Deterministic Oracles**: All MCP tools expose explicit safety annotations (`readOnlyHint`, `destructiveHint`, `idempotentHint`).

## Reporting a Vulnerability or Bug

Open an issue directly via our [GitHub Bug & Security Report Page](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway/issues/new?labels=bug). Our Custodian Agent monitors open issues and routes verified bug reports as Priority 1 tickets to the Developer Agent.
