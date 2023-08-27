// npm - global cmd, comes w node
// npm --version
// local dependency - use it only in this ptlar proj
// npm i <pckgName>

// global dependency - use it in any proj
// npm install -g <pckgName>

// pkg.json - manifest file (stores impt info abt proj/pckg)
// manual approach (create pkg.json in the root, create properties)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

console.log('Welcome to Node Tutorial')
const _ = require('lodash');
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
