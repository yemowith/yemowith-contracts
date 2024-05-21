"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferFrom = exports.transfer = exports.approve = exports.allowance = exports.balanceOf = void 0;
const hardhat_1 = require("hardhat");
const tools_1 = require("../tools");
const logger_1 = require("../core/logger");
const IERC20 = "@openzeppelin/contracts/token/ERC20/IERC20.sol:IERC20";
const balanceOf = async (address, token) => {
    const tokenContract = await hardhat_1.ethers.getContractAt(IERC20, token);
    const balance = await tokenContract.balanceOf(address);
    const balanceAmount = hardhat_1.ethers.utils.formatEther(balance);
    logger_1.logg.info(`Balance is ${balanceAmount} for address ${address} for token ${token}`);
    return balance;
};
exports.balanceOf = balanceOf;
const allowance = async (owner, spender, token) => {
    const tokenContract = await hardhat_1.ethers.getContractAt(IERC20, token);
    const allowance = await tokenContract.allowance(owner, spender);
    logger_1.logg.info(`Allowance for owner ${owner}, spender ${spender}, token ${token}: ${(0, tools_1.fromEther)(allowance)}`);
    return allowance;
};
exports.allowance = allowance;
const approve = async (spender, amount, token, gasLimit = 500000) => {
    const tokenContract = await hardhat_1.ethers.getContractAt(IERC20, token);
    const approvalResult = await tokenContract.approve(spender, amount, { gasLimit: gasLimit });
    logger_1.logg.info(`Approved spender ${spender} for amount ${hardhat_1.ethers.utils.formatEther(amount)} for token ${token} with a gas limit of ${gasLimit}`);
    return approvalResult;
};
exports.approve = approve;
const transfer = async (to, amount, token, gasLimit = 500000) => {
    const tokenContract = await hardhat_1.ethers.getContractAt(IERC20, token);
    const transferResult = await tokenContract.transfer(to, amount, { gasLimit: gasLimit });
    logger_1.logg.info(`Transferred amount ${hardhat_1.ethers.utils.formatEther(amount)} to ${to} for token ${token} with a gas limit of ${gasLimit}`);
    return transferResult;
};
exports.transfer = transfer;
const transferFrom = async (from, to, amount, token) => {
    const tokenContract = await hardhat_1.ethers.getContractAt(IERC20, token);
    const transferFromResult = await tokenContract.transferFrom(from, to, amount);
    logger_1.logg.info(`Transferred from ${from} to ${to} amount ${hardhat_1.ethers.utils.formatEther(amount)} for token ${token}`);
    return transferFromResult;
};
exports.transferFrom = transferFrom;
