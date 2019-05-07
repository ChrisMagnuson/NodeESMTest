// common.cjs
const assert = require('assert');

async function main() {
  const es = await import('./esm/esm.js');
  assert.equal(es.bar, 'abc');
  console.log(es.bar)
  console.log("hardway")
}
main();