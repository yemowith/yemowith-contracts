"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssetAddress = void 0;
const assetList_json_1 = __importDefault(require("../assetList.json"));
function getAssetAddress(symbol, network = "1") {
    const asset = assetList_json_1.default.find((asset) => asset.symbol === symbol);
    if (asset && Object.prototype.hasOwnProperty.call(asset.addresses, network)) {
        const address = asset.addresses[network];
        console.log(`Address of ${symbol} on network ${network}:`, address);
        return address;
    }
    else {
        console.error(`Asset with symbol ${symbol} not found or not available on network ${network}.`);
        return null;
    }
}
exports.getAssetAddress = getAssetAddress;
