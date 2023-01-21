const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

const {TOKEN_ADDRESS} = require("../constants")

async function main() {

  const manageContract = await ethers.getContractFactory("Manage");
  // deploy the contract
  const deployedManageContract = await manageContract.deploy(TOKEN_ADDRESS);

  await deployedManageContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Verify Contract Address:",
    deployedManageContract.address
  );

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedManageContract.address,
    constructorArguments: [TOKEN_ADDRESS],

  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });