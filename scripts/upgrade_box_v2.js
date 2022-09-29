// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x44D67D4A736494cFe42601da9459F970b58a14F9";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();