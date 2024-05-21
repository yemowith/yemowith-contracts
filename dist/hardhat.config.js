"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-interface-generator");
require("@typechain/hardhat");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
const config = {
    solidity: {
        compilers: [
            {
                version: "0.8.0",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
            {
                version: "0.8.20",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
        ],
    },
    paths: {
        // Bu yolu kendi projenize göre ayarlayabilirsiniz
        sources: "./contracts",
        artifacts: "./artifacts",
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 1337,
            accounts: [
                {
                    privateKey: "0x0123456789012345678901234567890123456789012345678901234567890123",
                    balance: "100000000000000000000000000000000000000000000000000000000000000000",
                },
                {
                    privateKey: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
                    balance: "100000000000000000000000000000000000000000000000000000000000000000",
                },
            ],
        },
    },
};
exports.default = config;
