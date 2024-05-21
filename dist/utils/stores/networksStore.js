"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetworkChainIDByCode = exports.makeNetworkHardhat = exports.setRPCServer = exports.getNetworks = exports.getAllNetworks = exports.getNetwork = void 0;
const networks_json_1 = __importDefault(require("../../constants/networks.json"));
const customNetworks_json_1 = __importDefault(require("../../constants/customNetworks.json"));
const customNetworks = customNetworks_json_1.default.customNetworks;
function getNetworks() {
    return networks_json_1.default.networks;
}
exports.getNetworks = getNetworks;
function getNetwork({ chainId, code, isTest, isForked }) {
    const filteredNetwork = getNetworks().find((network) => network.chainId === chainId ||
        network.code === code ||
        network.isTest === isTest ||
        network.isForked === isForked);
    if (filteredNetwork) {
        return filteredNetwork;
    }
    else {
        throw new Error("Network not found");
    }
}
exports.getNetwork = getNetwork;
function getAllNetworks() {
    return getNetworks().map((network) => {
        network.rpcServer = network.rpcServer.replace("https://", "");
        return network;
    });
}
exports.getAllNetworks = getAllNetworks;
function setRPCServer(network) {
    const codes = ["ETH", "MATIC", "LINEA", "OVM", "AVAX", "ARBITRUM", "STARKNET"];
    const codesTest = [
        "GOERLI",
        "MUMBAI",
        "SEPOLIA",
        "OPTIMISMSEPOLIA",
        "ARBITRUMSEPOLIA",
    ];
    const isInfura = codes.includes(network.code) || codesTest.includes(network.code) ? true : false;
    const infurKEY = process.env.INFURA_KEY;
    if (isInfura) {
        network.rpcServer = `https://${network.linkCode}.infura.io/v3/${infurKEY}`;
    }
    else {
        network.rpcServer = `#`;
    }
    if (!network.rpcServer.startsWith("https://")) {
        return null;
    }
    return network;
}
exports.setRPCServer = setRPCServer;
const makeNetworkHardhat = () => {
    let networks = getAllNetworks().filter((network) => network.active === true);
    let networksModifed = {};
    networks.forEach((net) => {
        const network = setRPCServer(net);
        if (network !== null) {
            networksModifed[network.code] = {
                accounts: [process.env.PRIVATE_KEY || ""],
                url: net.rpcServer,
                gas: 10000000,
                ...net,
            };
        }
    });
    customNetworks.forEach((net) => {
        networksModifed[net.code] = {
            accounts: [process.env.PRIVATE_KEY || ""],
            url: net.rpcServer,
            gas: 10000000,
            ...net,
        };
    });
    return networksModifed;
};
exports.makeNetworkHardhat = makeNetworkHardhat;
const getNetworkChainIDByCode = (code) => {
    const networks = makeNetworkHardhat();
    return networks[code]?.chainId || null;
};
exports.getNetworkChainIDByCode = getNetworkChainIDByCode;
