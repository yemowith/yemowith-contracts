"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWETH = exports.depositWETH = exports.fromWETH = exports.toWETH = void 0;
const hardhat_1 = require("hardhat");
const IYWETH = "contracts/utils/interfaces/tokens/IYWETH.sol:IYWETH";
const toWETH = async (signer, amount, wethAddress) => {
    // Implement deposit function logic here
    try {
        const weth = await hardhat_1.ethers.getContractAt(IYWETH, wethAddress);
        const depositResult = await weth.deposit({ value: amount });
        const depositReceipt = await depositResult.wait();
        console.log(`WETH deposit transaction hash: ${depositReceipt.transactionHash}`);
        return depositReceipt.transactionHash;
    }
    catch (error) {
        console.error("Error depositing WETH:", error);
        return null;
    }
};
exports.toWETH = toWETH;
const fromWETH = async (signer, amount, wethAddress) => {
    // Implement withdraw function logic here
    try {
        const weth = await hardhat_1.ethers.getContractAt(IYWETH, wethAddress);
        const withdrawResult = await weth.withdraw(amount);
        const withdrawReceipt = await withdrawResult.wait();
        console.log(`WETH withdraw transaction hash: ${withdrawReceipt.transactionHash}`);
        return withdrawReceipt.transactionHash;
    }
    catch (error) {
        console.error("Error withdrawing WETH:", error);
        return null;
    }
};
exports.fromWETH = fromWETH;
const depositWETH = async (amount, to, _weth) => {
    const weth = await getWETH(_weth);
    await weth.deposit({ value: amount, gasLimit: 500000 });
    await weth.transfer(to, amount, { gasLimit: 500000 });
};
exports.depositWETH = depositWETH;
const getWETH = async (adrs) => {
    const weth = await hardhat_1.ethers.getContractAt("IWETH", adrs);
    return weth;
};
exports.getWETH = getWETH;
