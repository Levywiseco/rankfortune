import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
function load(relative, overrides = {}) {
  const source = readFileSync(new URL(relative, import.meta.url), 'utf8');
  const code = ts.transpileModule(source, {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022}}).outputText;
  const loadedModule = {exports: {}};
  new Function('require', 'module', 'exports', code)(name => overrides[name] ?? require(name), loadedModule, loadedModule.exports);
  return loadedModule.exports;
}
const checkout = load('../src/lib/checkout.ts');
const {POST} = load('../src/app/api/checkout/route.ts', {'@/lib/checkout': checkout});
const request = body => new Request('https://rankfortune.com/api/checkout', {method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(body)});
const originalFetch = globalThis.fetch;
globalThis.fetch = async () => { throw new Error('This test must not contact a payment provider'); };
try {
  const blocked = await POST(request({product:'monitorMonthly'}));
  assert.equal(blocked.status, 409);
  const blockedBody = await blocked.json();
  assert.equal(blockedBody.code, 'MONITOR_NOT_AVAILABLE');
  assert.equal(blockedBody.checkoutUrl, undefined);
  assert.equal(checkout.isCheckoutProduct('monitorMonthly'), true, 'existing product identity is retained');
  assert.equal((await POST(request({product:'fullReport'}))).status, 400);
  const full = await POST(request({product:'fullReport', email:'release-fixture@example.com', auditUrl:'https://example.com/'}));
  assert.equal(full.status, 200);
  const url = new URL((await full.json()).checkoutUrl);
  assert.equal(url.hostname, 'checkout.dodopayments.com');
  assert.equal(url.pathname, '/buy/' + checkout.checkoutProducts.fullReport.id);
  assert.equal((await POST(request({product:'unknown'}))).status, 400);
  const home = readFileSync(new URL('../src/app/page.tsx', import.meta.url), 'utf8');
  assert.match(home, /New subscriptions are not open/);
  assert.match(home, /Not open for purchase/);
  assert.match(home, /Monitor is planned and not open for new subscriptions/);
  assert.doesNotMatch(home, /report, export, and monitoring workflow/);
  console.log('PASS Monitor new-checkout guard, preserved product identity, full-report validation and unchanged URL generation (no external payment calls)');
} finally { globalThis.fetch = originalFetch; }
