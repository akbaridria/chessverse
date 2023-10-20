import { ethers, network, run } from "hardhat";
import listChains from "../src/data/list-chains.json";

async function main() {
  const chain = listChains.filter((item) => item.chainName === network.name)[0];

  await run(`verify:verify`, {
    address: chain.contractAddress,
    constructorArguments: [
      chain.gateway,
      chain.gasReceiver,
      chain.nftContract
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
