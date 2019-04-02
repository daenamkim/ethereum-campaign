const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
// TODO: removeSync is different from fs lib?
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

// If not exists, it will be created
fs.ensureDirSync(buildPath);
// { ':Campaign':  ...
for (let contractName in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, `${contractName.replace(':', '')}.json`),
    output[contractName]
  );
}
