"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactAt = exports.getChainId = exports.maxApproveAmount = exports.fromEther = exports.toEther = exports.deployAndVerify = exports.verify = exports.deploy = void 0;
const ethers_1 = require("ethers");
const hardhat_1 = __importStar(require("hardhat"));
const logger_1 = require("./core/logger");
const deploy = async (name, args = [], gasLimit = 1000000000) => {
    const c = await hardhat_1.ethers.getContractFactory(name);
    const cD = await c.deploy(...args, { gasLimit: gasLimit });
    const deployed = (await cD.deployed());
    logger_1.logg.info(`Deployed ${name} to: ${deployed.address}`);
    return {
        name: name,
        args: args,
        address: deployed.address,
        deployed: deployed,
        contract: cD,
    };
};
exports.deploy = deploy;
const contactAt = async (name, address) => {
    const c = await hardhat_1.ethers.getContractAt("DSSProxyFactory", address);
    return c;
};
exports.contactAt = contactAt;
const verify = async (c) => {
    console.log("Verifying contract...");
    const network = hardhat_1.default.network.name;
    try {
        await hardhat_1.default.run("verify:verify", {
            address: c.address,
            network: network,
        });
        console.log(`Verification successful for ${c.name} at ${c.address}`);
    }
    catch (error) {
        console.error(`Verification failed for ${c.name} at ${c.address}`, error);
    }
    console.log("Contract verified!");
    return c;
};
exports.verify = verify;
const deployAndVerify = async (name, args = []) => {
    const c = await deploy(name, args);
    await verify(c);
    return c;
};
exports.deployAndVerify = deployAndVerify;
const numToString = (num) => {
    return num.toString();
};
const toEther = (wei, decimals = 18) => {
    const ether = hardhat_1.ethers.utils.parseEther(numToString(wei));
    return ether;
};
exports.toEther = toEther;
const fromEther = (eth, decimals = 18) => {
    const etherString = eth.toString();
    const ether = decimals !== undefined ? parseFloat(etherString).toFixed(decimals) : etherString;
    return hardhat_1.ethers.utils.parseEther(ether);
};
exports.fromEther = fromEther;
const maxApproveAmount = () => {
    return hardhat_1.ethers.constants.MaxUint256;
};
exports.maxApproveAmount = maxApproveAmount;
const getChainId = async () => {
    // wtite your script here
    const chainId = await hardhat_1.ethers.provider.getNetwork().then((network) => network.chainId);
    const chainIdBN = ethers_1.BigNumber.from(chainId);
    const chainIdStr = chainIdBN.toString();
    return { chainIdStr, chainIdBN };
};
exports.getChainId = getChainId;
