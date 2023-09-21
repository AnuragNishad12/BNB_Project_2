require('@nomiclabs/hardhat-waffle');

const { mnemonic } = "dinner want taxi crop drama blame rough famous immense hidden develop curtain";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  networks: {
    hardhat: {},
    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545', // BSC Testnet URL
      chainId: 97, // BSC Testnet Chain ID
      accounts: { mnemonic: mnemonic }, // Use your mnemonic to fund the accounts
    },
  },

  paths:{
    artifacts:"./artifacts",
    sources: "./contracts"
  }
};
