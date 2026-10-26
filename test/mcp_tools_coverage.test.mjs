import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.resolve(__dirname, "../tools_manifest.json");
const tools = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const toolMap = new Map(tools.map(t => [t.name, t]));

test("Manifest Integrity: declares exactly 121 microservices", () => {
  assert.equal(tools.length, 121, "Must contain exactly 121 tools");
});

test("MCP Tool Annotation & Schema Audit: generate_gemini_completion", () => {
  const tool = toolMap.get("generate_gemini_completion");
  assert.ok(tool, "Tool generate_gemini_completion must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: execute_antigravity_agent", () => {
  const tool = toolMap.get("execute_antigravity_agent");
  assert.ok(tool, "Tool execute_antigravity_agent must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: conduct_deep_research_investigation", () => {
  const tool = toolMap.get("conduct_deep_research_investigation");
  assert.ok(tool, "Tool conduct_deep_research_investigation must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: operate_computer_use_agent", () => {
  const tool = toolMap.get("operate_computer_use_agent");
  assert.ok(tool, "Tool operate_computer_use_agent must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: search_gemini_grounded_web", () => {
  const tool = toolMap.get("search_gemini_grounded_web");
  assert.ok(tool, "Tool search_gemini_grounded_web must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: search_gemini_grounded_maps", () => {
  const tool = toolMap.get("search_gemini_grounded_maps");
  assert.ok(tool, "Tool search_gemini_grounded_maps must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: compile_mpp_research_dossier", () => {
  const tool = toolMap.get("compile_mpp_research_dossier");
  assert.ok(tool, "Tool compile_mpp_research_dossier must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: generate_gemini_embeddings", () => {
  const tool = toolMap.get("generate_gemini_embeddings");
  assert.ok(tool, "Tool generate_gemini_embeddings must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: analyze_omni_multimodal_input", () => {
  const tool = toolMap.get("analyze_omni_multimodal_input");
  assert.ok(tool, "Tool analyze_omni_multimodal_input must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: plan_robotics_spatial_trajectory", () => {
  const tool = toolMap.get("plan_robotics_spatial_trajectory");
  assert.ok(tool, "Tool plan_robotics_spatial_trajectory must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: generate_nano_banana_image", () => {
  const tool = toolMap.get("generate_nano_banana_image");
  assert.ok(tool, "Tool generate_nano_banana_image must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: generate_veo_cinematic_video", () => {
  const tool = toolMap.get("generate_veo_cinematic_video");
  assert.ok(tool, "Tool generate_veo_cinematic_video must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: compose_lyria_music_track", () => {
  const tool = toolMap.get("compose_lyria_music_track");
  assert.ok(tool, "Tool compose_lyria_music_track must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: synthesize_gemini_speech_audio", () => {
  const tool = toolMap.get("synthesize_gemini_speech_audio");
  assert.ok(tool, "Tool synthesize_gemini_speech_audio must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: process_live_audio_dialogue", () => {
  const tool = toolMap.get("process_live_audio_dialogue");
  assert.ok(tool, "Tool process_live_audio_dialogue must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: verify_agent_command_safety", () => {
  const tool = toolMap.get("verify_agent_command_safety");
  assert.ok(tool, "Tool verify_agent_command_safety must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: validate_sql_query_ast", () => {
  const tool = toolMap.get("validate_sql_query_ast");
  assert.ok(tool, "Tool validate_sql_query_ast must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: execute_python_sandbox", () => {
  const tool = toolMap.get("execute_python_sandbox");
  assert.ok(tool, "Tool execute_python_sandbox must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: audit_mcp_server_manifest", () => {
  const tool = toolMap.get("audit_mcp_server_manifest");
  assert.ok(tool, "Tool audit_mcp_server_manifest must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: detect_mcp_schema_rugpull", () => {
  const tool = toolMap.get("detect_mcp_schema_rugpull");
  assert.ok(tool, "Tool detect_mcp_schema_rugpull must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: validate_mcp_sampling_request", () => {
  const tool = toolMap.get("validate_mcp_sampling_request");
  assert.ok(tool, "Tool validate_mcp_sampling_request must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: sanitize_tool_output_stream", () => {
  const tool = toolMap.get("sanitize_tool_output_stream");
  assert.ok(tool, "Tool sanitize_tool_output_stream must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: redact_sensitive_pii", () => {
  const tool = toolMap.get("redact_sensitive_pii");
  assert.ok(tool, "Tool redact_sensitive_pii must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: detect_agent_action_loop", () => {
  const tool = toolMap.get("detect_agent_action_loop");
  assert.ok(tool, "Tool detect_agent_action_loop must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: verify_a2a_agent_card", () => {
  const tool = toolMap.get("verify_a2a_agent_card");
  assert.ok(tool, "Tool verify_a2a_agent_card must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: audit_outbound_egress_url", () => {
  const tool = toolMap.get("audit_outbound_egress_url");
  assert.ok(tool, "Tool audit_outbound_egress_url must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: audit_response_factuality", () => {
  const tool = toolMap.get("audit_response_factuality");
  assert.ok(tool, "Tool audit_response_factuality must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: audit_smart_contract_code", () => {
  const tool = toolMap.get("audit_smart_contract_code");
  assert.ok(tool, "Tool audit_smart_contract_code must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: scan_solana_cpi_reentrancy", () => {
  const tool = toolMap.get("scan_solana_cpi_reentrancy");
  assert.ok(tool, "Tool scan_solana_cpi_reentrancy must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: evaluate_solana_token_risk", () => {
  const tool = toolMap.get("evaluate_solana_token_risk");
  assert.ok(tool, "Tool evaluate_solana_token_risk must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: inspect_solana_token_liquidity", () => {
  const tool = toolMap.get("inspect_solana_token_liquidity");
  assert.ok(tool, "Tool inspect_solana_token_liquidity must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: track_solana_whale_flows", () => {
  const tool = toolMap.get("track_solana_whale_flows");
  assert.ok(tool, "Tool track_solana_whale_flows must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: estimate_solana_priority_fees", () => {
  const tool = toolMap.get("estimate_solana_priority_fees");
  assert.ok(tool, "Tool estimate_solana_priority_fees must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: decode_eip712_permit_signature", () => {
  const tool = toolMap.get("decode_eip712_permit_signature");
  assert.ok(tool, "Tool decode_eip712_permit_signature must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: simulate_evm_transaction_calldata", () => {
  const tool = toolMap.get("simulate_evm_transaction_calldata");
  assert.ok(tool, "Tool simulate_evm_transaction_calldata must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: evaluate_dex_mev_risk", () => {
  const tool = toolMap.get("evaluate_dex_mev_risk");
  assert.ok(tool, "Tool evaluate_dex_mev_risk must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: detect_address_poisoning_scam", () => {
  const tool = toolMap.get("detect_address_poisoning_scam");
  assert.ok(tool, "Tool detect_address_poisoning_scam must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: verify_http402_payment_challenge", () => {
  const tool = toolMap.get("verify_http402_payment_challenge");
  assert.ok(tool, "Tool verify_http402_payment_challenge must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: estimate_bitcoin_mempool_fees", () => {
  const tool = toolMap.get("estimate_bitcoin_mempool_fees");
  assert.ok(tool, "Tool estimate_bitcoin_mempool_fees must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: plan_bitcoin_utxo_consolidation", () => {
  const tool = toolMap.get("plan_bitcoin_utxo_consolidation");
  assert.ok(tool, "Tool plan_bitcoin_utxo_consolidation must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: calculate_spot_swap_rate", () => {
  const tool = toolMap.get("calculate_spot_swap_rate");
  assert.ok(tool, "Tool calculate_spot_swap_rate must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: compare_crosschain_bridge_routes", () => {
  const tool = toolMap.get("compare_crosschain_bridge_routes");
  assert.ok(tool, "Tool compare_crosschain_bridge_routes must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: prune_context_skeleton", () => {
  const tool = toolMap.get("prune_context_skeleton");
  assert.ok(tool, "Tool prune_context_skeleton must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: plan_context_token_budget", () => {
  const tool = toolMap.get("plan_context_token_budget");
  assert.ok(tool, "Tool plan_context_token_budget must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: rerank_hybrid_rag_chunks", () => {
  const tool = toolMap.get("rerank_hybrid_rag_chunks");
  assert.ok(tool, "Tool rerank_hybrid_rag_chunks must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: apply_fuzzy_code_patch", () => {
  const tool = toolMap.get("apply_fuzzy_code_patch");
  assert.ok(tool, "Tool apply_fuzzy_code_patch must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: analyze_ast_symbol_graph", () => {
  const tool = toolMap.get("analyze_ast_symbol_graph");
  assert.ok(tool, "Tool analyze_ast_symbol_graph must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: audit_module_dependency_cycles", () => {
  const tool = toolMap.get("audit_module_dependency_cycles");
  assert.ok(tool, "Tool audit_module_dependency_cycles must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: isolate_stacktrace_root_cause", () => {
  const tool = toolMap.get("isolate_stacktrace_root_cause");
  assert.ok(tool, "Tool isolate_stacktrace_root_cause must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: compile_polyglot_type_schemas", () => {
  const tool = toolMap.get("compile_polyglot_type_schemas");
  assert.ok(tool, "Tool compile_polyglot_type_schemas must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: evaluate_deterministic_math", () => {
  const tool = toolMap.get("evaluate_deterministic_math");
  assert.ok(tool, "Tool evaluate_deterministic_math must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: schedule_critical_path_tasks", () => {
  const tool = toolMap.get("schedule_critical_path_tasks");
  assert.ok(tool, "Tool schedule_critical_path_tasks must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: evaluate_ab_statistical_significance", () => {
  const tool = toolMap.get("evaluate_ab_statistical_significance");
  assert.ok(tool, "Tool evaluate_ab_statistical_significance must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: detect_openapi_breaking_changes", () => {
  const tool = toolMap.get("detect_openapi_breaking_changes");
  assert.ok(tool, "Tool detect_openapi_breaking_changes must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: generate_boundary_test_vectors", () => {
  const tool = toolMap.get("generate_boundary_test_vectors");
  assert.ok(tool, "Tool generate_boundary_test_vectors must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: simulate_monte_carlo_risk", () => {
  const tool = toolMap.get("simulate_monte_carlo_risk");
  assert.ok(tool, "Tool simulate_monte_carlo_risk must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: diff_agent_memory_checkpoint", () => {
  const tool = toolMap.get("diff_agent_memory_checkpoint");
  assert.ok(tool, "Tool diff_agent_memory_checkpoint must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: heal_malformed_json", () => {
  const tool = toolMap.get("heal_malformed_json");
  assert.ok(tool, "Tool heal_malformed_json must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: enforce_json_schema_types", () => {
  const tool = toolMap.get("enforce_json_schema_types");
  assert.ok(tool, "Tool enforce_json_schema_types must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: extract_structured_json_entities", () => {
  const tool = toolMap.get("extract_structured_json_entities");
  assert.ok(tool, "Tool extract_structured_json_entities must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: clean_tabular_dataset", () => {
  const tool = toolMap.get("clean_tabular_dataset");
  assert.ok(tool, "Tool clean_tabular_dataset must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: synthesize_safe_regex", () => {
  const tool = toolMap.get("synthesize_safe_regex");
  assert.ok(tool, "Tool synthesize_safe_regex must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: compile_xml_agent_prompt", () => {
  const tool = toolMap.get("compile_xml_agent_prompt");
  assert.ok(tool, "Tool compile_xml_agent_prompt must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: synthesize_python_automation_code", () => {
  const tool = toolMap.get("synthesize_python_automation_code");
  assert.ok(tool, "Tool synthesize_python_automation_code must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: summarize_technical_document", () => {
  const tool = toolMap.get("summarize_technical_document");
  assert.ok(tool, "Tool summarize_technical_document must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: synthesize_web_intelligence_brief", () => {
  const tool = toolMap.get("synthesize_web_intelligence_brief");
  assert.ok(tool, "Tool synthesize_web_intelligence_brief must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: verify_context_compaction_fidelity", () => {
  const tool = toolMap.get("verify_context_compaction_fidelity");
  assert.ok(tool, "Tool verify_context_compaction_fidelity must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: route_mcp_workflow_plan", () => {
  const tool = toolMap.get("route_mcp_workflow_plan");
  assert.ok(tool, "Tool route_mcp_workflow_plan must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: arbitrate_agent_deliverable_escrow", () => {
  const tool = toolMap.get("arbitrate_agent_deliverable_escrow");
  assert.ok(tool, "Tool arbitrate_agent_deliverable_escrow must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: infer_mpp_streaming_session", () => {
  const tool = toolMap.get("infer_mpp_streaming_session");
  assert.ok(tool, "Tool infer_mpp_streaming_session must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: generate_x402_vector_embeddings", () => {
  const tool = toolMap.get("generate_x402_vector_embeddings");
  assert.ok(tool, "Tool generate_x402_vector_embeddings must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: extract_clean_markdown", () => {
  const tool = toolMap.get("extract_clean_markdown");
  assert.ok(tool, "Tool extract_clean_markdown must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: scrape_readable_article", () => {
  const tool = toolMap.get("scrape_readable_article");
  assert.ok(tool, "Tool scrape_readable_article must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: extract_structured_metadata", () => {
  const tool = toolMap.get("extract_structured_metadata");
  assert.ok(tool, "Tool extract_structured_metadata must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: parse_html_tables", () => {
  const tool = toolMap.get("parse_html_tables");
  assert.ok(tool, "Tool parse_html_tables must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: isolate_css_selectors", () => {
  const tool = toolMap.get("isolate_css_selectors");
  assert.ok(tool, "Tool isolate_css_selectors must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: detect_paywall_and_bypass", () => {
  const tool = toolMap.get("detect_paywall_and_bypass");
  assert.ok(tool, "Tool detect_paywall_and_bypass must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: crawl_sitemap_urls", () => {
  const tool = toolMap.get("crawl_sitemap_urls");
  assert.ok(tool, "Tool crawl_sitemap_urls must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: extract_page_hyperlinks", () => {
  const tool = toolMap.get("extract_page_hyperlinks");
  assert.ok(tool, "Tool extract_page_hyperlinks must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: sanitize_html_content", () => {
  const tool = toolMap.get("sanitize_html_content");
  assert.ok(tool, "Tool sanitize_html_content must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: extract_contact_info", () => {
  const tool = toolMap.get("extract_contact_info");
  assert.ok(tool, "Tool extract_contact_info must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: evaluate_seo_diagnostics", () => {
  const tool = toolMap.get("evaluate_seo_diagnostics");
  assert.ok(tool, "Tool evaluate_seo_diagnostics must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: compile_rss_feed", () => {
  const tool = toolMap.get("compile_rss_feed");
  assert.ok(tool, "Tool compile_rss_feed must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: synthesize_neural_search", () => {
  const tool = toolMap.get("synthesize_neural_search");
  assert.ok(tool, "Tool synthesize_neural_search must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: compile_research_dossier", () => {
  const tool = toolMap.get("compile_research_dossier");
  assert.ok(tool, "Tool compile_research_dossier must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: expand_search_queries", () => {
  const tool = toolMap.get("expand_search_queries");
  assert.ok(tool, "Tool expand_search_queries must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: filter_domain_intelligence", () => {
  const tool = toolMap.get("filter_domain_intelligence");
  assert.ok(tool, "Tool filter_domain_intelligence must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: analyze_news_recency", () => {
  const tool = toolMap.get("analyze_news_recency");
  assert.ok(tool, "Tool analyze_news_recency must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: verify_factual_claims", () => {
  const tool = toolMap.get("verify_factual_claims");
  assert.ok(tool, "Tool verify_factual_claims must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: extract_scholarly_citations", () => {
  const tool = toolMap.get("extract_scholarly_citations");
  assert.ok(tool, "Tool extract_scholarly_citations must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: cluster_topic_subgraphs", () => {
  const tool = toolMap.get("cluster_topic_subgraphs");
  assert.ok(tool, "Tool cluster_topic_subgraphs must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: analyze_media_sentiment", () => {
  const tool = toolMap.get("analyze_media_sentiment");
  assert.ok(tool, "Tool analyze_media_sentiment must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: rank_expert_sources", () => {
  const tool = toolMap.get("rank_expert_sources");
  assert.ok(tool, "Tool rank_expert_sources must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: summarize_temporal_timeline", () => {
  const tool = toolMap.get("summarize_temporal_timeline");
  assert.ok(tool, "Tool summarize_temporal_timeline must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: compile_competitive_landscape", () => {
  const tool = toolMap.get("compile_competitive_landscape");
  assert.ok(tool, "Tool compile_competitive_landscape must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: synthesize_sql_query", () => {
  const tool = toolMap.get("synthesize_sql_query");
  assert.ok(tool, "Tool synthesize_sql_query must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: audit_sql_injection_ast", () => {
  const tool = toolMap.get("audit_sql_injection_ast");
  assert.ok(tool, "Tool audit_sql_injection_ast must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: analyze_query_plan", () => {
  const tool = toolMap.get("analyze_query_plan");
  assert.ok(tool, "Tool analyze_query_plan must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: detect_breaking_migrations", () => {
  const tool = toolMap.get("detect_breaking_migrations");
  assert.ok(tool, "Tool detect_breaking_migrations must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: transpile_sql_dialect", () => {
  const tool = toolMap.get("transpile_sql_dialect");
  assert.ok(tool, "Tool transpile_sql_dialect must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: recommend_database_indexes", () => {
  const tool = toolMap.get("recommend_database_indexes");
  assert.ok(tool, "Tool recommend_database_indexes must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: validate_schema_normalization", () => {
  const tool = toolMap.get("validate_schema_normalization");
  assert.ok(tool, "Tool validate_schema_normalization must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: sanitize_sql_telemetry", () => {
  const tool = toolMap.get("sanitize_sql_telemetry");
  assert.ok(tool, "Tool sanitize_sql_telemetry must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: synthesize_seed_fixtures", () => {
  const tool = toolMap.get("synthesize_seed_fixtures");
  assert.ok(tool, "Tool synthesize_seed_fixtures must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: calculate_pool_headroom", () => {
  const tool = toolMap.get("calculate_pool_headroom");
  assert.ok(tool, "Tool calculate_pool_headroom must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: audit_transaction_isolation", () => {
  const tool = toolMap.get("audit_transaction_isolation");
  assert.ok(tool, "Tool audit_transaction_isolation must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: generate_orm_models", () => {
  const tool = toolMap.get("generate_orm_models");
  assert.ok(tool, "Tool generate_orm_models must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: inspect_eve_assembly_state", () => {
  const tool = toolMap.get("inspect_eve_assembly_state");
  assert.ok(tool, "Tool inspect_eve_assembly_state must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: audit_eve_tribe_standings", () => {
  const tool = toolMap.get("audit_eve_tribe_standings");
  assert.ok(tool, "Tool audit_eve_tribe_standings must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: generate_eve_assembly_move", () => {
  const tool = toolMap.get("generate_eve_assembly_move");
  assert.ok(tool, "Tool generate_eve_assembly_move must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: compile_eve_gate_acl", () => {
  const tool = toolMap.get("compile_eve_gate_acl");
  assert.ok(tool, "Tool compile_eve_gate_acl must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: simulate_eve_sui_ptb", () => {
  const tool = toolMap.get("simulate_eve_sui_ptb");
  assert.ok(tool, "Tool simulate_eve_sui_ptb must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: verify_eve_zklogin_character", () => {
  const tool = toolMap.get("verify_eve_zklogin_character");
  assert.ok(tool, "Tool verify_eve_zklogin_character must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: plan_eve_gate_route", () => {
  const tool = toolMap.get("plan_eve_gate_route");
  assert.ok(tool, "Tool plan_eve_gate_route must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: optimize_eve_node_power", () => {
  const tool = toolMap.get("optimize_eve_node_power");
  assert.ok(tool, "Tool optimize_eve_node_power must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: simulate_eve_capacitor_siege", () => {
  const tool = toolMap.get("simulate_eve_capacitor_siege");
  assert.ok(tool, "Tool simulate_eve_capacitor_siege must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: monitor_eve_constellation_fuel", () => {
  const tool = toolMap.get("monitor_eve_constellation_fuel");
  assert.ok(tool, "Tool monitor_eve_constellation_fuel must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: quote_eve_ssu_market", () => {
  const tool = toolMap.get("quote_eve_ssu_market");
  assert.ok(tool, "Tool quote_eve_ssu_market must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: find_eve_ssu_arbitrage", () => {
  const tool = toolMap.get("find_eve_ssu_arbitrage");
  assert.ok(tool, "Tool find_eve_ssu_arbitrage must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: analyze_eve_killmail_threats", () => {
  const tool = toolMap.get("analyze_eve_killmail_threats");
  assert.ok(tool, "Tool analyze_eve_killmail_threats must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

test("MCP Tool Annotation & Schema Audit: prioritize_eve_turret_targets", () => {
  const tool = toolMap.get("prioritize_eve_turret_targets");
  assert.ok(tool, "Tool prioritize_eve_turret_targets must exist in catalog");
  assert.equal(typeof tool.name, "string");
  assert.ok(tool.description && tool.description.length > 20, "Tool description must be comprehensive");
  assert.equal(typeof tool.inputSchema, "object");
  assert.equal(tool.inputSchema.type, "object");
  
  // M8ven / OpenAI / Anthropic Strict Tool Annotations Verification
  assert.ok(tool.annotations, "Tool annotations object must exist");
  assert.equal(typeof tool.annotations.readOnlyHint, "boolean", "readOnlyHint must be explicit boolean");
  assert.equal(typeof tool.annotations.destructiveHint, "boolean", "destructiveHint must be explicit boolean");
  assert.equal(typeof tool.annotations.idempotentHint, "boolean", "idempotentHint must be explicit boolean");
  assert.equal(typeof tool.annotations.openWorldHint, "boolean", "openWorldHint must be explicit boolean");
});

