"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressHelperSDK = exports.getOrDeploy = exports.printAddressInfo = exports.getAddress = exports.getByCode = exports.getByAddress = exports.getByChainID = void 0;
const hardhat_1 = require("hardhat");
const addresses_json_1 = __importDefault(require("../../constants/addresses.json"));
const tools_1 = require("../tools");
const logger_1 = require("../core/logger");
function getByChainID(chainID) {
    return addresses_json_1.default.filter((address) => address.chainID === chainID);
}
exports.getByChainID = getByChainID;
function getByAddress(contractAddress) {
    return addresses_json_1.default.find((address) => address._address === contractAddress);
}
exports.getByAddress = getByAddress;
function getByCode(code) {
    return addresses_json_1.default.find((address) => address.code === code);
}
exports.getByCode = getByCode;
function getAddress(code, chainID) {
    return addresses_json_1.default.find((address) => address.code === code && address.chainID === chainID);
}
exports.getAddress = getAddress;
function printAddressInfo(address) {
    if (!address) {
        console.log("Address not found.");
        return;
    }
    console.log(`Address Address: ${address._address}, Chain ID: ${address.chainID}, Code: ${address.code}`);
}
exports.printAddressInfo = printAddressInfo;
async function getOrDeploy(contractCode, chainId, fun) {
    const savedAddress = getAddress(contractCode, chainId);
    if (!savedAddress) {
        let deployed = (await fun()).contracts[0];
        let sdk = await addressHelperSDK(deployed);
        await sdk?.addAddress(contractCode, deployed.address, chainId);
        return deployed;
    }
    else {
        let contract = await hardhat_1.ethers.getContractAt(contractCode, savedAddress._address);
        return contract;
    }
}
exports.getOrDeploy = getOrDeploy;
async function createContractFactory(contractCode, chainId) {
    const savedAddress = getAddress(contractCode, chainId);
    if (!savedAddress) {
        return undefined;
    }
    else {
        return await hardhat_1.ethers.getContractAt(contractCode, savedAddress._address);
    }
}
// functions to connect to the contract
async function addressHelperSDK(contract) {
    let _contract = contract;
    if (!contract) {
        _contract = await createContractFactory("AddressesHelpers", (await (0, tools_1.getChainId)()).chainIdStr);
    }
    if (!_contract) {
        logger_1.logg.error("Address not found for AddressesHelpers");
        return;
    }
    const addressByCode = async (code, chainID) => {
        const getAddress = await _contract?.getAAddress(code, chainID ? chainID : (await (0, tools_1.getChainId)()).chainIdStr);
        if (!getAddress) {
            throw new Error("Address not found for code:" + code);
        }
        return getAddress;
    };
    const addAddress = async (code, addressC, chainID) => {
        const addedNew = await _contract?.addAAddress(code, addressC, chainID ? chainID : (await (0, tools_1.getChainId)()).chainIdStr);
        if (!addedNew || addedNew.chainID <= 0) {
            logger_1.logg.error("Address not found for code:", code);
            return;
        }
        return addedNew;
    };
    const syncAddresses = async () => {
        if (!addresses_json_1.default || addresses_json_1.default.length <= 0) {
            logger_1.logg.error("no saved addresses found.");
            return;
        }
        logger_1.logg.info("Syncing addresses... with count addresses: ", addresses_json_1.default.length);
        for (let i = 0; i < addresses_json_1.default.length; i++) {
            const isSynced = await _contract?.isSaved(addresses_json_1.default[i].code, addresses_json_1.default[i].chainID);
            if (isSynced) {
                logger_1.logg.info("Address already synced for code:", addresses_json_1.default[i].code);
                continue;
            }
            const addedC = await addAddress(addresses_json_1.default[i].code, addresses_json_1.default[i]._address, addresses_json_1.default[i].chainID);
            if (!addedC) {
                logger_1.logg.error("Address not added for code:", addresses_json_1.default[i].code);
                return false;
            }
            else {
                logger_1.logg.info("Address added for code:", addresses_json_1.default[i].code);
            }
        }
        return true;
    };
    return { contract, addressByCode, addAddress, syncAddresses };
}
exports.addressHelperSDK = addressHelperSDK;
