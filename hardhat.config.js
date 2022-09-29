require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
const ETHERSCAN_API_KEY = "1A2WWKVCS9Y676IX7II3YHJRJCPHKXJW9H";
const PRI_KEY = "1e351f1e2abda777cc61c084fa858e8c05bd8c32da9639e4cd5542e8b9a2d73a"
module.exports = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/5Y28u-ljvuvTKggK3s5CjxE1BHhIsBAh`,
      accounts: [PRI_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};