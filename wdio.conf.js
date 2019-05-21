const argv = require('yargs').argv;

const browsers = argv.browsers || argv.browser || argv.e || 'chrome';

getCapabilities = () => {
  return browsers.split(',').map(browser => ({
    browserName: browser,
  }));
};

exports.config = {
  runner: 'local',
  specs: ['./src/tests/*.spec.ts'],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  capabilities: getCapabilities(),
  logLevel: 'warn',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: argv.debug ? 999999 : 60000,
    requires: ['tsconfig-paths/register'],
  },
  before: function(capabilities, specs) {
    require('ts-node').register({ files: true });
  },
};
