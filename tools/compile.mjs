import Contracts from '@truffle/workflow-compile';

const config = {
  contracts_directory: "./contracts/",
  contracts_build_directory: "./build/contracts/",
  compilers: {
    solc: {
      version: "0.7.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
}

Contracts.compileAndSave(config)
  .catch(e => {
    console.error(`Error`, e);
    process.exit(1)
  });