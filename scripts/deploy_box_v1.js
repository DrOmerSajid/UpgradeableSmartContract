// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const MyToken = await ethers.getContractFactory("MyToken");
    console.log("Deploying Box...");

    await MyToken.deployed();
    console.log("Box deployed to:", box.address);
}

main();

//0x44D67D4A736494cFe42601da9459F970b58a14F9