import { ethers, network, run } from "hardhat";
import * as fs from "fs";
import * as path from "path";
import listChains from "../src/data/list-chains.json";

async function main() {
  const chain = listChains.filter((item) => item.chainName === network.name)[0];
  const nft = await ethers.deployContract("ChessNFT", [
    chain["nft-meta-data"]
  ], {
    gasLimit: 3000000
  });

  console.log("waiting for deployment");
  const tx = await nft.waitForDeployment();

  chain.nftContract = tx.target as string;
  console.log("contract deployed at : ", tx.target);

  await new Promise((resolve) => setTimeout(resolve, 5000));

  try {
    // verify contracts on etherscan
    await run(`verify:verify`, {
      address: tx.target,
      constructorArguments: [chain["nft-meta-data"]],
    });
  } catch (error) {
    console.log(error);
  }

  const filePath = path.join(
    __dirname,
    "../src/data/list-chains.json"
  );
  fs.writeFileSync(filePath, JSON.stringify(listChains, null, 2));
  console.log("done");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
