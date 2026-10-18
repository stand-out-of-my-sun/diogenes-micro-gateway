import test from 'node:test';
import assert from 'node:assert';
import worker, { sweepBalanceToBitcoin } from '../src/index.ts';

test('L402 Worker: /api/v1/health returns 200 without payment and includes all endpoints', async () => {
  const req = new Request('http://localhost/api/v1/health');
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
    COLD_STORAGE_BTC: 'bc1q_test_mock_cold_storage_address_0000',
  });

  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.status, 'healthy');
  assert.strictEqual(data.lightning_endpoint, 'diogenesagent@coinos.io');
  assert.strictEqual(data.endpoints.length >= 7, true);
  // Ensure cold storage address is NEVER exposed in the public health check
  const rawBody = JSON.stringify(data);
  assert.strictEqual(rawBody.includes('bc1q_test_mock_cold_storage_address_0000'), false);
});

test('L402 Worker: GET / serves HTML developer portal with HTTP 200', async () => {
  const req = new Request('http://localhost/');
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });

  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.headers.get('Content-Type')?.includes('text/html'), true);
  const text = await res.text();
  assert.strictEqual(text.includes('Diogenes Autonomous Microservice Gateway'), true);
  assert.strictEqual(text.includes('/api/v1/mempool-fee'), true);
  assert.strictEqual(text.includes('/openapi.json'), true);
  assert.strictEqual(text.includes('id="gemini-suite"'), true);
  assert.strictEqual(text.includes('Antigravity Agent'), true);
  assert.strictEqual(text.includes('Deep Research Pro Preview'), true);
  assert.strictEqual(text.includes('Nano Banana Pro'), true);
  assert.strictEqual(text.includes('id="eve-frontier"'), true);
  assert.strictEqual(text.includes('EVE Frontier Autonomous Smart Assembly & Survival Protocol'), true);
  assert.strictEqual(text.includes('/api/v1/eve-frontier/move-assembly-coder'), true);
  assert.strictEqual(text.includes('/api/v1/eve-frontier/gate-route-planner'), true);
  assert.strictEqual(text.includes('/api/v1/eve-frontier/network-node-gj-optimizer'), true);
});

test('L402 Worker: GET /llms.txt serves LLM crawler markdown with HTTP 200', async () => {
  const req = new Request('http://localhost/llms.txt');
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });

  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.headers.get('Content-Type')?.includes('text/markdown'), true);
  const text = await res.text();
  assert.strictEqual(text.includes('Diogenes Autonomous Microservice Gateway'), true);
  assert.strictEqual(text.includes('46 Live Microservices'), true);
  assert.strictEqual(text.includes('## Frontier AI Models & Autonomous Agents (Account-Less Access)'), true);
  assert.strictEqual(text.includes('/api/v1/ai/antigravity-agent'), true);
  assert.strictEqual(text.includes('/api/v1/ai/deep-research'), true);
  assert.strictEqual(text.includes('Nano Banana Pro'), true);
  assert.strictEqual(text.includes('## EVE Frontier Services'), true);
  assert.strictEqual(text.includes('/api/v1/eve-frontier/move-assembly-coder'), true);
  assert.strictEqual(text.includes('/api/v1/eve-frontier/killmail-threat-intel'), true);
  assert.strictEqual(text.includes('L402'), true);
});

test('L402 Worker: GET /.well-known/l402-services returns valid registry catalog', async () => {
  const req = new Request('http://localhost/.well-known/l402-services');
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });

  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.protocol, 'L402');
  assert.strictEqual(data.lightning_address, 'diogenesagent@coinos.io');
  assert.strictEqual(Array.isArray(data.services), true);
  assert.strictEqual(data.services.length >= 4, true);

  const ids = data.services.map(s => s.id);
  assert.strictEqual(ids.includes('mempool-fee'), true);
  assert.strictEqual(ids.includes('swap-rate'), true);
  assert.strictEqual(ids.includes('scrub-pii'), true);
  assert.strictEqual(ids.includes('clean-data'), true);
  assert.strictEqual(ids.includes('ai-antigravity-agent'), true);
});

test('L402 Worker: GET /openapi.json returns valid OpenAPI 3.1 specification', async () => {
  const req = new Request('http://localhost/openapi.json');
  const res = await worker.fetch(req, {});

  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.openapi, '3.1.0');
  assert.strictEqual(typeof data.paths['/api/v1/mempool-fee'], 'object');
  assert.strictEqual(typeof data.components.securitySchemes.L402Payment, 'object');
  assert.strictEqual(data.components.securitySchemes.L402Payment.type, 'apiKey');
});

test('L402 Worker: Demo mode (?demo=true) returns sample preview without requiring payment', async () => {
  const endpoints = [
    { url: 'http://localhost/api/v1/mempool-fee?demo=true', method: 'GET' },
    { url: 'http://localhost/api/v1/swap-rate?demo=true', method: 'GET' },
    { url: 'http://localhost/api/v1/scrub-pii?demo=true', method: 'POST' },
    { url: 'http://localhost/api/v1/clean-data?demo=true', method: 'POST' },
    { url: 'http://localhost/api/v1/ai/antigravity-agent?demo=true', method: 'POST' },
  ];

  for (const ep of endpoints) {
    const req = new Request(ep.url, { method: ep.method });
    const res = await worker.fetch(req, {
      LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    });

    assert.strictEqual(res.status, 200, `Failed for ${ep.url}`);
    assert.strictEqual(res.headers.get('X-Demo-Mode'), 'true');
    const data = await res.json();
    assert.strictEqual(data.demo, true);
  }
});

test('L402 Worker: Unknown endpoints return 404 immediately', async () => {
  const req = new Request('http://localhost/api/v1/sweep');
  const res = await worker.fetch(req, {});
  assert.strictEqual(res.status, 404);
  const data = await res.json();
  assert.strictEqual(data.error, 'Endpoint not found');
});

test('L402 Worker: /api/v1/mempool-fee returns 402 Payment Required without auth or demo', async () => {
  const req = new Request('http://localhost/api/v1/mempool-fee');
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });

  assert.strictEqual(res.status, 402);
  const authHeader = res.headers.get('WWW-Authenticate');
  assert.match(authHeader, /^L402 macaroon=/);
  assert.match(authHeader, /invoice=/);

  const body = await res.json();
  assert.strictEqual(body.error, 'Payment Required');
  assert.strictEqual(body.price_sats, 50);
});

test('L402 Worker: Authenticated request with valid L402 header succeeds', async () => {
  const secret = 'test_secret_key_123';
  const preimageHex = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
  const bytes = new Uint8Array(preimageHex.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const paymentHash = Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');

  const endpoint = '/api/v1/swap-rate';
  const priceSats = 100;
  const nonce = 'abc123';
  const createdAt = Math.floor(Date.now() / 1000);
  const payload = `${endpoint}:${priceSats}:${paymentHash}:${nonce}:${createdAt}`;

  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sigBytes = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  const sig = Array.from(new Uint8Array(sigBytes)).map(b => b.toString(16).padStart(2, '0')).join('');

  const macaroon = `mac_${btoa(`${payload}:${sig}`)}`;
  const validAuth = `L402 ${macaroon}:${preimageHex}`;

  const req = new Request('http://localhost/api/v1/swap-rate?amount=100&currency=USDC', {
    headers: { Authorization: validAuth },
  });

  const res = await worker.fetch(req, {
    SERVER_SECRET: secret,
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });

  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.source_currency, 'USDC');
  assert.strictEqual(data.source_amount, 100);
  assert.strictEqual(data.total_usd_value, 100);
});

test('L402 Worker: Edge Sweeper checks Coinos API and reports zero balance gracefully', async () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4OWM1Y2EwLWU4ZTctNGVmMy05YzNkLTM2YTkyYmI2ZTNiMCIsImlhdCI6MTc5MjIzMDA3OH0.6wUlaL9UkAiJB9utGRC3dTRS8ohOsxBBnxHvyP_y_tY';
  const sweepRes = await sweepBalanceToBitcoin({
    COINOS_TOKEN: token,
    COLD_STORAGE_BTC: 'bc1q_test_mock_cold_storage_address_0000',
  });

  assert.strictEqual(typeof sweepRes.balance, 'number');
  assert.strictEqual(JSON.stringify(sweepRes).includes('bc1q_test_mock_cold_storage_address_0000'), false);
});

test('L402 Worker: GET /.well-known/402index-verify.txt returns domain verification token hash', async () => {
  const req = new Request('http://localhost/.well-known/402index-verify.txt');
  const res = await worker.fetch(req, {});
  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.headers.get('Content-Type')?.includes('text/plain'), true);
  const text = await res.text();
  assert.strictEqual(text, 'bd530ac18ab59199318faf834fc508e9cc4b293e50737abe3d08f87ae0310047');
});


test('L402 Worker: /api/v1/ai/antigravity-agent returns 402 Payment Required (500 sats) without auth', async () => {
  const req = new Request('http://localhost/api/v1/ai/antigravity-agent', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });

  assert.strictEqual(res.status, 402);
  const authHeader = res.headers.get('WWW-Authenticate');
  assert.match(authHeader, /^L402 macaroon=/);
  assert.match(authHeader, /invoice=/);

  const body = await res.json();
  assert.strictEqual(body.error, 'Payment Required');
  assert.strictEqual(body.price_sats, 500);
});

test('L402 Worker: /api/v1/ai/deep-research returns 402 Payment Required (1000 sats) without auth', async () => {
  const req = new Request('http://localhost/api/v1/ai/deep-research', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });

  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.error, 'Payment Required');
  assert.strictEqual(body.price_sats, 1000);
});

test('L402 Worker: /api/v1/ai/generate returns 402 Payment Required (250 sats) without auth', async () => {
  const req = new Request('http://localhost/api/v1/ai/generate', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });

  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.error, 'Payment Required');
  assert.strictEqual(body.price_sats, 250);
});

test('L402 Worker: /api/v1/ai/image-gen returns 402 Payment Required (350 sats) without auth', async () => {
  const req = new Request('http://localhost/api/v1/ai/image-gen', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });

  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.error, 'Payment Required');
  assert.strictEqual(body.price_sats, 350);
});

test('L402 Worker: /api/v1/ai/embeddings returns 402 Payment Required (50 sats) without auth', async () => {
  const req = new Request('http://localhost/api/v1/ai/embeddings', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });

  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.error, 'Payment Required');
  assert.strictEqual(body.price_sats, 50);
});

test('L402 Worker: Demo mode (?demo=true) for Tier 1 models returns structured preview', async () => {
  const tier1Demos = [
    { url: 'http://localhost/api/v1/ai/deep-research?demo=true' },
    { url: 'http://localhost/api/v1/ai/generate?demo=true' },
    { url: 'http://localhost/api/v1/ai/image-gen?demo=true' },
    { url: 'http://localhost/api/v1/ai/embeddings?demo=true' },
    { url: 'http://localhost/api/v1/ai/computer-use?demo=true' },
    { url: 'http://localhost/api/v1/ai/tts?demo=true' },
    { url: 'http://localhost/api/v1/ai/music-gen?demo=true' },
    { url: 'http://localhost/api/v1/ai/video-gen?demo=true' },
    { url: 'http://localhost/api/v1/ai/grounded-search?demo=true' },
    { url: 'http://localhost/api/v1/ai/grounded-maps?demo=true' },
  ];

  for (const item of tier1Demos) {
    const req = new Request(item.url, { method: 'POST' });
    const res = await worker.fetch(req, {
      LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    });
    assert.strictEqual(res.status, 200, `Failed on ${item.url}`);
    assert.strictEqual(res.headers.get('X-Demo-Mode'), 'true');
    const data = await res.json();
    assert.strictEqual(data.demo, true);
    assert.strictEqual(typeof data.price_sats, 'number');
  }
});

test('L402 Worker: GET /api/v1/models returns all 45 models and grounding tools', async () => {
  const req = new Request('http://localhost/api/v1/models');
  const res = await worker.fetch(req, {});
  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.count, 45);
  assert.strictEqual(Array.isArray(data.models), true);
  assert.strictEqual(data.models.length, 45);

  const modelIds = data.models.map(m => m.id);
  assert.strictEqual(modelIds.includes('antigravity'), true);
  assert.strictEqual(modelIds.includes('deep-research-pro'), true);
  assert.strictEqual(modelIds.includes('computer-use'), true);
  assert.strictEqual(modelIds.includes('gemini-4-argon'), true);
  assert.strictEqual(modelIds.includes('gemini-3.8-flash'), true);
  assert.strictEqual(modelIds.includes('gemini-2.5-pro'), true);
  assert.strictEqual(modelIds.includes('nano-banana'), true);
  assert.strictEqual(modelIds.includes('nano-banana-pro'), true);
  assert.strictEqual(modelIds.includes('nano-banana-2'), true);
  assert.strictEqual(modelIds.includes('gemini-3.8-flash-tts'), true);
  assert.strictEqual(modelIds.includes('lyria-3-pro'), true);
  assert.strictEqual(modelIds.includes('veo-3-generate'), true);
  assert.strictEqual(modelIds.includes('gemini-embedding-2'), true);
  assert.strictEqual(modelIds.includes('gemini-robotics-er-2'), true);
});

test('L402 Worker: /api/v1/ai/computer-use returns 402 Payment Required (800 sats)', async () => {
  const req = new Request('http://localhost/api/v1/ai/computer-use', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 800);
});

test('L402 Worker: /api/v1/ai/music-gen returns 402 Payment Required (500 sats)', async () => {
  const req = new Request('http://localhost/api/v1/ai/music-gen', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 500);
});

test('L402 Worker: /api/v1/ai/video-gen returns 402 Payment Required (1500 sats)', async () => {
  const req = new Request('http://localhost/api/v1/ai/video-gen', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 1500);
});

test('L402 Worker: Grounded endpoints return 402 with respective pricing', async () => {
  const reqSearch = new Request('http://localhost/api/v1/ai/grounded-search', { method: 'POST' });
  const resSearch = await worker.fetch(reqSearch, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(resSearch.status, 402);
  const bodySearch = await resSearch.json();
  assert.strictEqual(bodySearch.price_sats, 200);

  const reqMaps = new Request('http://localhost/api/v1/ai/grounded-maps', { method: 'POST' });
  const resMaps = await worker.fetch(reqMaps, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(resMaps.status, 402);
  const bodyMaps = await resMaps.json();
  assert.strictEqual(bodyMaps.price_sats, 250);
});

test('L402 Worker: GET /robots.txt serves crawler policy with HTTP 200', async () => {
  const req = new Request('http://localhost/robots.txt');
  const res = await worker.fetch(req, {});
  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.headers.get('Content-Type')?.includes('text/plain'), true);
  const text = await res.text();
  assert.strictEqual(text.includes('User-agent: *'), true);
  assert.strictEqual(text.includes('Sitemap:'), true);
});

test('L402 Worker: GET /sitemap.xml serves valid sitemap XML with HTTP 200', async () => {
  const req = new Request('http://localhost/sitemap.xml');
  const res = await worker.fetch(req, {});
  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.headers.get('Content-Type')?.includes('application/xml'), true);
  const text = await res.text();
  assert.strictEqual(text.includes('<urlset'), true);
  assert.strictEqual(text.includes('https://diogenes-l402-gateway.corinth.workers.dev/'), true);
});

test('L402 Worker: /api/v1/agent/guardrail-verify returns 402 (100 sats) and demo mode returns structured guardrail check', async () => {
  const req = new Request('http://localhost/api/v1/agent/guardrail-verify', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 100);

  const demoReq = new Request('http://localhost/api/v1/agent/guardrail-verify?demo=true', { method: 'POST' });
  const demoRes = await worker.fetch(demoReq, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });
  assert.strictEqual(demoRes.status, 200);
  assert.strictEqual(demoRes.headers.get('X-Demo-Mode'), 'true');
  const demoData = await demoRes.json();
  assert.strictEqual(demoData.demo, true);
  assert.strictEqual(demoData.preview.verdict, 'ALLOW');
});

test('L402 Worker: /api/v1/agent/contract-audit returns 402 (250 sats) and demo mode returns structured contract audit', async () => {
  const req = new Request('http://localhost/api/v1/agent/contract-audit', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 250);

  const demoReq = new Request('http://localhost/api/v1/agent/contract-audit?demo=true', { method: 'POST' });
  const demoRes = await worker.fetch(demoReq, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });
  assert.strictEqual(demoRes.status, 200);
  const demoData = await demoRes.json();
  assert.strictEqual(demoData.preview.security_score, 92);
  assert.strictEqual(demoData.preview.is_honeypot, false);
});

test('L402 Worker: /api/v1/agent/web-brief returns 402 (200 sats) and demo mode returns grounded market dossier', async () => {
  const req = new Request('http://localhost/api/v1/agent/web-brief', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 200);

  const demoReq = new Request('http://localhost/api/v1/agent/web-brief?demo=true', { method: 'POST' });
  const demoRes = await worker.fetch(demoReq, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });
  assert.strictEqual(demoRes.status, 200);
  const demoData = await demoRes.json();
  assert.strictEqual(demoData.preview.sentiment, 'BULLISH');
  assert.strictEqual(Array.isArray(demoData.preview.sources), true);
});

test('L402 Worker: /api/v1/crypto/solana-risk returns 402 (100 sats) and demo mode returns risk evaluation', async () => {
  const req = new Request('http://localhost/api/v1/crypto/solana-risk', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 100);

  const demoReq = new Request('http://localhost/api/v1/crypto/solana-risk?demo=true', { method: 'POST' });
  const demoRes = await worker.fetch(demoReq, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });
  assert.strictEqual(demoRes.status, 200);
  const demoData = await demoRes.json();
  assert.strictEqual(demoData.preview.valid_solana_address, true);
  assert.strictEqual(demoData.preview.should_transact, true);
});

test('L402 Worker: /api/v1/health reports 46 total endpoints including proprietary microservices', async () => {
  const req = new Request('http://localhost/api/v1/health');
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.endpoints_count, 46);
  const paths = data.endpoints.map(e => e.path);
  assert.strictEqual(paths.includes('/api/v1/agent/guardrail-verify'), true);
  assert.strictEqual(paths.includes('/api/v1/agent/contract-audit'), true);
  assert.strictEqual(paths.includes('/api/v1/agent/web-brief'), true);
  assert.strictEqual(paths.includes('/api/v1/crypto/solana-risk'), true);
  assert.strictEqual(paths.includes('/api/v1/agent/json-repair'), true);
  assert.strictEqual(paths.includes('/api/v1/agent/regex-oracle'), true);
  assert.strictEqual(paths.includes('/api/v1/crypto/mev-risk'), true);
  assert.strictEqual(paths.includes('/api/v1/agent/prompt-compiler'), true);
});

test('L402 Worker: /api/v1/agent/json-repair returns 402 (50 sats) and demo mode returns repaired json', async () => {
  const req = new Request('http://localhost/api/v1/agent/json-repair', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 50);

  const demoReq = new Request('http://localhost/api/v1/agent/json-repair?demo=true', { method: 'POST' });
  const demoRes = await worker.fetch(demoReq, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });
  assert.strictEqual(demoRes.status, 200);
  const demoData = await demoRes.json();
  assert.strictEqual(demoData.preview.repaired, true);
  assert.strictEqual(demoData.preview.fixed_json.status, 'success');
});

test('L402 Worker: /api/v1/agent/regex-oracle returns 402 (50 sats) and demo mode returns redos-safe regex', async () => {
  const req = new Request('http://localhost/api/v1/agent/regex-oracle', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 50);

  const demoReq = new Request('http://localhost/api/v1/agent/regex-oracle?demo=true', { method: 'POST' });
  const demoRes = await worker.fetch(demoReq, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });
  assert.strictEqual(demoRes.status, 200);
  const demoData = await demoRes.json();
  assert.strictEqual(demoData.preview.redos_safe, true);
  assert.strictEqual(demoData.preview.time_complexity, 'O(N)');
});

test('L402 Worker: /api/v1/crypto/mev-risk returns 402 (150 sats) and demo mode returns sandwich risk audit', async () => {
  const req = new Request('http://localhost/api/v1/crypto/mev-risk', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 150);

  const demoReq = new Request('http://localhost/api/v1/crypto/mev-risk?demo=true', { method: 'POST' });
  const demoRes = await worker.fetch(demoReq, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });
  assert.strictEqual(demoRes.status, 200);
  const demoData = await demoRes.json();
  assert.strictEqual(demoData.preview.is_vulnerable_to_sandwich, true);
  assert.strictEqual(typeof demoData.preview.sandwich_risk_score, 'number');
});

test('L402 Worker: /api/v1/agent/prompt-compiler returns 402 (100 sats) and demo mode returns structured prompt', async () => {
  const req = new Request('http://localhost/api/v1/agent/prompt-compiler', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const body = await res.json();
  assert.strictEqual(body.price_sats, 100);

  const demoReq = new Request('http://localhost/api/v1/agent/prompt-compiler?demo=true', { method: 'POST' });
  const demoRes = await worker.fetch(demoReq, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });
  assert.strictEqual(demoRes.status, 200);
  const demoData = await demoRes.json();
  assert.strictEqual(demoData.preview.compiled_prompt.includes('<role>'), true);
  assert.strictEqual(demoData.preview.compiled_prompt.includes('<objective>'), true);
});

test('x402 Worker: /api/v1/x402/token-meta returns 402 with PAYMENT-REQUIRED header and demo mode works', async () => {
  const req = new Request('http://localhost/api/v1/x402/token-meta', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const payReqHeader = res.headers.get('PAYMENT-REQUIRED');
  assert.strictEqual(payReqHeader?.includes('x402'), true);
  assert.strictEqual(payReqHeader?.includes('solana'), true);
  assert.strictEqual(payReqHeader?.includes('USDC'), true);

  const wwwAuth = res.headers.get('WWW-Authenticate');
  assert.strictEqual(wwwAuth?.includes('x402'), true);

  const body = await res.json();
  assert.strictEqual(body.protocol, 'x402');
  assert.strictEqual(body.recipient, '9fhZHnT3DdvmPcWm5oyWQs3ZUu26EjBsfC8rzLtuafc');

  // Test demo mode
  const demoReq = new Request('http://localhost/api/v1/x402/token-meta?demo=true', { method: 'POST' });
  const demoRes = await worker.fetch(demoReq, { LIGHTNING_ADDRESS: 'diogenesagent@coinos.io' });
  assert.strictEqual(demoRes.status, 200);
  const demoBody = await demoRes.json();
  assert.strictEqual(demoBody.preview.mint, 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263');
});

test('MPP Worker: /api/v1/mpp/session-infer returns 402 with Payment-Challenge header and demo mode works', async () => {
  const req = new Request('http://localhost/api/v1/mpp/session-infer', { method: 'POST' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
    SERVER_SECRET: 'test_secret_key_123',
  });
  assert.strictEqual(res.status, 402);
  const challenge = res.headers.get('Payment-Challenge');
  assert.strictEqual(challenge?.includes('mpp'), true);
  assert.strictEqual(challenge?.includes('base'), true);

  const wwwAuth = res.headers.get('WWW-Authenticate');
  assert.strictEqual(wwwAuth?.includes('Payment'), true);

  const body = await res.json();
  assert.strictEqual(body.protocol, 'MPP');
  assert.strictEqual(body.recipient, '0x14dbc1Efd68C4c4Fc7a46fA804b849372eB7319b');

  // Test demo mode
  const demoReq = new Request('http://localhost/api/v1/mpp/session-infer?demo=true', { method: 'POST' });
  const demoRes = await worker.fetch(demoReq, { LIGHTNING_ADDRESS: 'diogenesagent@coinos.io' });
  assert.strictEqual(demoRes.status, 200);
  const demoBody = await demoRes.json();
  assert.strictEqual(demoBody.preview.session_status, 'ACTIVE_STREAMING');
});

test('MCP Discovery: GET /.well-known/mcp.json serves Model Context Protocol tools manifest', async () => {
  const req = new Request('http://localhost/.well-known/mcp.json', { method: 'GET' });
  const res = await worker.fetch(req, {
    LIGHTNING_ADDRESS: 'diogenesagent@coinos.io',
  });
  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.headers.get('Content-Type'), 'application/json');
  const manifest = await res.json();
  assert.strictEqual(manifest.name, 'diogenes-edge-gateway');
  assert.strictEqual(manifest.version, '2.5.0');
  assert.strictEqual(manifest.protocol, 'mcp-2024-11-05');
  assert.strictEqual(Array.isArray(manifest.tools), true);
  assert.strictEqual(manifest.tools.length >= 9, true);
  const names = manifest.tools.map(t => t.name);
  assert.strictEqual(names.includes('guardrail_verify'), true);
  assert.strictEqual(names.includes('contract_audit'), true);
  assert.strictEqual(names.includes('solana_risk'), true);
});

test('MCP Streamable Server: POST /mcp answers JSON-RPC initialize handshake', async () => {
  const req = new Request('http://localhost/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: { protocolVersion: '2024-11-05', clientInfo: { name: 'claude-code', version: '1.0' } }
    })
  });
  const res = await worker.fetch(req, { LIGHTNING_ADDRESS: 'diogenesagent@coinos.io' });
  assert.strictEqual(res.status, 200);
  const rpc = await res.json();
  assert.strictEqual(rpc.jsonrpc, '2.0');
  assert.strictEqual(rpc.id, 1);
  assert.strictEqual(rpc.result.protocolVersion, '2024-11-05');
  assert.strictEqual(rpc.result.serverInfo.name, 'diogenes-edge-gateway');
});

test('MCP Streamable Server: POST /mcp answers tools/list and tools/call', async () => {
  // tools/list
  const listReq = new Request('http://localhost/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} })
  });
  const listRes = await worker.fetch(listReq, { LIGHTNING_ADDRESS: 'diogenesagent@coinos.io' });
  assert.strictEqual(listRes.status, 200);
  const listBody = await listRes.json();
  assert.strictEqual(Array.isArray(listBody.result.tools), true);
  assert.strictEqual(listBody.result.tools.length >= 9, true);

  // tools/call
  const callReq = new Request('http://localhost/mcp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 3,
      method: 'tools/call',
      params: { name: 'guardrail_verify', arguments: { payload: 'echo hello' } }
    })
  });
  const callRes = await worker.fetch(callReq, { LIGHTNING_ADDRESS: 'diogenesagent@coinos.io' });
  assert.strictEqual(callRes.status, 200);
  const callBody = await callRes.json();
  assert.strictEqual(callBody.jsonrpc, '2.0');
  assert.strictEqual(callBody.id, 3);
  assert.strictEqual(Array.isArray(callBody.result.content), true);
  assert.strictEqual(callBody.result.content[0].type, 'text');
  const parsed = JSON.parse(callBody.result.content[0].text);
  assert.strictEqual(parsed.verdict, 'APPROVED');
  assert.strictEqual(parsed.allowed, true);
});


