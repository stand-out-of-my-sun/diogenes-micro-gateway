/**
 * Diogenes Plugin for ElizaOS
 * 
 * Equips ElizaOS agents with autonomous pre-execution guardrails, smart contract honeypot audits,
 * and Solana SPL token risk verification powered by Diogenes Edge Microservices.
 */

const DIOGENES_GATEWAY = "https://diogenes-l402-gateway.corinth.workers.dev";

export const verifyGuardrailAction = {
  name: "VERIFY_GUARDRAIL",
  similes: ["CHECK_SAFETY", "GUARDRAIL_AUDIT", "VALIDATE_ACTION"],
  description: "Evaluates a proposed agent command or input against security guardrails to prevent wallet drain and injection attacks.",
  validate: async (runtime: any, message: any) => {
    return true;
  },
  handler: async (runtime: any, message: any, state: any, options: any, callback: any) => {
    try {
      const actionText = message.content?.text || "";
      const res = await fetch(`${DIOGENES_GATEWAY}/api/v1/agent/guardrail-verify?demo=true`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: actionText, context: "ElizaOS pre-action execution check" })
      });
      const data = await res.json();
      if (callback) {
        callback({
          text: `[Diogenes Guardrail] Risk Level: ${data.risk_level?.toUpperCase()} | Safe: ${data.safe_to_execute ? "YES" : "NO"} | Reason: ${data.explanation || data.reasoning}`,
          content: data
        });
      }
      return data.safe_to_execute;
    } catch (err: any) {
      if (callback) callback({ text: `[Diogenes Guardrail Error] ${err.message}` });
      return false;
    }
  },
  examples: [
    [
      { user: "{{user1}}", content: { text: "Run rm -rf / on the database server" } },
      { user: "{{agentName}}", content: { text: "Checking safety via Diogenes guardrails...", action: "VERIFY_GUARDRAIL" } }
    ]
  ]
};

export const solanaRiskAction = {
  name: "CHECK_SOLANA_RISK",
  similes: ["AUDIT_SOLANA_TOKEN", "SOLANA_HONEYPOT_CHECK", "VERIFY_MINT"],
  description: "Checks a Solana SPL token mint address for honeypots, freeze authority, and liquidity rugpull risks.",
  validate: async (runtime: any, message: any) => {
    return /([1-9A-HJ-NP-Za-km-z]{32,44})/.test(message.content?.text || "");
  },
  handler: async (runtime: any, message: any, state: any, options: any, callback: any) => {
    try {
      const match = (message.content?.text || "").match(/([1-9A-HJ-NP-Za-km-z]{32,44})/);
      const mint = match ? match[1] : "";
      const res = await fetch(`${DIOGENES_GATEWAY}/api/v1/crypto/solana-risk?demo=true`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mint_address: mint })
      });
      const data = await res.json();
      if (callback) {
        callback({
          text: `[Diogenes Solana Risk] Mint: ${mint}\nVerdict: ${data.should_transact ? "PROCEED" : "ABORT"}\nRisk Score: ${data.risk_score}/100\nFreeze Authority: ${data.freeze_authority_active ? "DANGER (ACTIVE)" : "NONE (SAFE)"}`,
          content: data
        });
      }
      return data.should_transact;
    } catch (err: any) {
      if (callback) callback({ text: `[Diogenes Error] ${err.message}` });
      return false;
    }
  },
  examples: [
    [
      { user: "{{user1}}", content: { text: "Can you check token 9fhZHsXm8mC9T8rL8y9E1aB2cD3eF4gH5iJ6kL7mN8oP?" } },
      { user: "{{agentName}}", content: { text: "Auditing Solana token risk via Diogenes Oracle...", action: "CHECK_SOLANA_RISK" } }
    ]
  ]
};

export const diogenesPlugin = {
  name: "diogenes",
  description: "Sovereign multi-protocol agent security and verification services",
  actions: [verifyGuardrailAction, solanaRiskAction],
  evaluators: [],
  providers: []
};

export default diogenesPlugin;
