"""
Diogenes LangChain & CrewAI Tool Integration (`integrations/langchain/diogenes_tools.py`)

Drop-in tool definitions for LangChain, LangGraph, CrewAI, and AutoGen agents.
Provides autonomous access to Diogenes security guardrails, smart contract audits,
Solana token risk evaluations, and ReDoS-safe regex synthesis.
"""

from typing import Optional, Type
import json
import urllib.request
from pydantic import BaseModel, Field

DEFAULT_GATEWAY_URL = "https://diogenes-l402-gateway.corinth.workers.dev"

class GuardrailInput(BaseModel):
    action: str = Field(description="The proposed action, shell command, or prompt to evaluate for security risks.")
    context: Optional[str] = Field(default="", description="Optional agent execution context or user instructions.")

class ContractAuditInput(BaseModel):
    contract_source: str = Field(description="Solidity or Rust/Anchor smart contract source code to audit.")
    chain: str = Field(default="evm", description="Target blockchain: 'evm', 'solana', or 'base'.")

class SolanaRiskInput(BaseModel):
    mint_address: str = Field(description="Base58 Solana SPL token mint or account address.")

class JSONRepairInput(BaseModel):
    broken_json: str = Field(description="Truncated, malformed, or unescaped JSON text to repair.")

class DiogenesBaseTool:
    """Base helper for calling Diogenes Edge Microservices."""
    def __init__(self, base_url: str = DEFAULT_GATEWAY_URL, demo: bool = True, auth_token: Optional[str] = None):
        self.base_url = base_url.rstrip("/")
        self.demo = demo
        self.auth_token = auth_token

    def _call(self, endpoint: str, payload: dict) -> dict:
        url = f"{self.base_url}{endpoint}"
        if self.demo:
            url += "?demo=true"
        req = urllib.request.Request(
            url,
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json", "User-Agent": "Diogenes-LangChain/2.5"}
        )
        if self.auth_token:
            req.add_header("Authorization", f"L402 {self.auth_token}")
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode("utf-8"))

class DiogenesGuardrailTool(DiogenesBaseTool):
    """Tool for verifying safety of autonomous actions before execution."""
    name: str = "diogenes_guardrail_verify"
    description: str = (
        "Evaluate actions, shell commands, and inputs against security policies before execution. "
        "Detects prompt injection, wallet drain attempts, private key exfiltration, and destructive commands."
    )
    args_schema: Type[BaseModel] = GuardrailInput

    def run(self, action: str, context: str = "") -> str:
        res = self._call("/api/v1/agent/guardrail-verify", {"action": action, "context": context})
        return json.dumps(res, indent=2)

class DiogenesContractAuditTool(DiogenesBaseTool):
    """Tool for auditing smart contracts for honeypots and rugpulls."""
    name: str = "diogenes_contract_audit"
    description: str = (
        "Audit EVM and Solana smart contract code. Detects hidden mint backdoors, "
        "reentrancy vulnerabilities, honeypot transfer taxes, and owner privileges."
    )
    args_schema: Type[BaseModel] = ContractAuditInput

    def run(self, contract_source: str, chain: str = "evm") -> str:
        res = self._call("/api/v1/agent/contract-audit", {"contract_source": contract_source, "chain": chain})
        return json.dumps(res, indent=2)

class DiogenesSolanaRiskTool(DiogenesBaseTool):
    """Tool for assessing Solana SPL token risks."""
    name: str = "diogenes_solana_risk_oracle"
    description: str = (
        "Verify a Solana Base58 token mint address. Checks freeze authority, "
        "mint authority, top holder concentration, honeypot markers, and returns binary 'should_transact' verdict."
    )
    args_schema: Type[BaseModel] = SolanaRiskInput

    def run(self, mint_address: str) -> str:
        res = self._call("/api/v1/crypto/solana-risk", {"mint_address": mint_address})
        return json.dumps(res, indent=2)

class DiogenesJSONRepairTool(DiogenesBaseTool):
    """Tool for autonomously repairing malformed agent JSON outputs."""
    name: str = "diogenes_json_repair"
    description: str = "Parse and repair broken, truncated, or unescaped JSON text into certified valid JSON."
    args_schema: Type[BaseModel] = JSONRepairInput

    def run(self, broken_json: str) -> str:
        res = self._call("/api/v1/agent/json-repair", {"broken_json": broken_json})
        return json.dumps(res, indent=2)
