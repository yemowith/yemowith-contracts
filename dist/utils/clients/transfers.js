"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendETH = exports.balanceOfETH = void 0;
const hardhat_1 = require("hardhat");
const logger_1 = require("@utils/core/logger");
const balanceOfETH = async (address) => {
    logger_1.logg.info(`Fetching ETH balance for address ${address}`);
    const balance = await hardhat_1.ethers.provider.getBalance(address);
    const ethAmount = hardhat_1.ethers.utils.formatEther(balance);
    logger_1.logg.info(`ETH Balance for address ${address}: ${ethAmount}`);
    return balance;
};
exports.balanceOfETH = balanceOfETH;
const sendETH = async (to, amount) => {
    const [deployer, player] = await hardhat_1.ethers.getSigners();
    const ethAmount = hardhat_1.ethers.utils.formatEther(amount);
    console.log(`Sending ETH amount ${ethAmount} to ${to} using signer`);
    const transaction = {
        to: to,
        value: amount,
        gasLimit: 1000000,
    };
    const sendResult = await deployer.sendTransaction(transaction);
    console.log(`Sent ETH amount ${ethAmount} to ${to} using signer`);
    return sendResult;
};
exports.sendETH = sendETH;
