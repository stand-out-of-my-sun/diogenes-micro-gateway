# Privacy Policy — Diogenes Microservice Gateway & MCP Ecosystem

Last Updated: October 26, 2026

Diogenes Gateway (`diogenes-micro-gateway`) and its modular Model Context Protocol (MCP) servers are designed from the ground up for autonomous AI agents, developers, and privacy-conscious organizations. Our core architectural tenet is **zero personal data collection and zero retention**.

---

## 1. Zero Personally Identifiable Information (PII)
- **No Accounts or KYC**: Diogenes does not require account creation, email registration, passwords, or personal identity verification to access foundation models or microservices.
- **No Tracking or Cookies**: We do not set browser cookies, trackers, fingerprinting scripts, or third-party analytics across any endpoint or landing page.

---

## 2. Stateless Edge Execution & Ephemeral Processing
- **Serverless Architecture**: All API endpoints and MCP tool handlers execute strictly in stateless, ephemeral isolate environments (Cloudflare Workers Edge Network).
- **Zero Disk Retention**: Prompts, tool arguments, payloads, and response completions are processed in memory and immediately discarded upon HTTP response delivery. No user prompt text or completions are logged to persistent disk, databases, or training datasets.
- **No Model Training**: Queries sent through Diogenes are never used to train, retrain, or fine-tune artificial intelligence models.

---

## 3. Cryptographic Micropayments & Financial Privacy
- Payments are handled exclusively via decentralized, self-custodial cryptographic rails:
  - **L402 (Lightning Network)**: Verifies cryptographic payment preimages. No credit cards, billing addresses, or banking information are ever transmitted or handled.
  - **x402 (Solana)**: Verifies on-chain transaction signatures.
  - **MPP (Base EVM)**: Verifies Machine Payments Protocol transaction hashes.
  - **Garlicoin (BEP-20 / Native)**: Verifies on-chain transfer proofs.
- We never collect, store, or process payment card details or private keys.

---

## 4. Security & Network Isolation
- **Egress Protection**: Pre-execution gates enforce strict private IP range blocking (preventing SSRF to internal network addresses).
- **Constant-Time Operations**: Sensitive security comparisons utilize constant-time algorithms to protect against side-channel timing attacks.
- **Input Validation**: Strictly typed JSON Schemas sanitize all incoming parameters before evaluation.

---

## 5. Contact & Questions
For security inquiries, audit reports, or privacy questions:
- **Maintainer**: Michael Speiser
- **Email**: `mspeiser2@gmail.com`
- **GitHub**: [https://github.com/stand-out-of-my-sun/diogenes-micro-gateway](https://github.com/stand-out-of-my-sun/diogenes-micro-gateway)
- **Security Policy**: [SECURITY.md](SECURITY.md)\n