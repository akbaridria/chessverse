import { HardhatUserConfig } from "hardhat/config";
import '@typechain/hardhat'
import '@nomicfoundation/hardhat-ethers'
import '@nomicfoundation/hardhat-chai-matchers'
import '@nomicfoundation/hardhat-verify'

import * as dotenv from "dotenv";
dotenv.config();

import datas from './src/data/list-chains.json';
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2;

const config: HardhatUserConfig = {
  networks: {
    goerli: {
      url: datas.filter((item) => item.chainId === 5)[0].rpc,
      accounts: [PRIVATE_KEY as string, PRIVATE_KEY2 as string],
      chainId: 5,
    },
    mumbai: {
      url: datas.filter((item) => item.chainId === 80001)[0].rpc,
      accounts: [PRIVATE_KEY as string, PRIVATE_KEY2 as string],
      chainId: 80001,
    },
    mantle: {
      url: datas.filter((item) => item.chainId === 5001)[0].rpc,
      accounts: [PRIVATE_KEY as string, PRIVATE_KEY2 as string],
      chainId: 5001,
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY as string,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY as string,
      mantle: "abc",
    },
    customChains: [
      {
        network: "mantle",
        chainId: 5001,
        urls: {
          apiURL: "https://explorer.testnet.mantle.xyz/api",
          browserURL: "https://explorer.testnet.mantle.xyz"
        }
      }
    ]
  },
  solidity: {
    version: "0.8.21",
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
      },
      metadata: {
        bytecodeHash: "none",
      },
    },
  },
};

export default config;