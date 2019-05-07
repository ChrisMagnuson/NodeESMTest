// common.cjs
const assert = require('assert');

async function main() {
  const es = await import('./es.mjs');
  assert.equal(es.bar, 'abc');
  console.log(es.bar)
}
main();