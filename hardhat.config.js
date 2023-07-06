require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("./tasks");
require("dotenv").config();

const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const patexSepoliaUrl = process.env.REACT_APP_PATEX_SEPOLIA_URL

module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 10000,
    },
  },
  defaultNetwork: "patex-sepolia",
  networks: {
    hardhat: {},
    "patex-sepolia": {
      url: patexSepoliaUrl,
      accounts: [ PRIVATE_KEY ]
   }  
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
