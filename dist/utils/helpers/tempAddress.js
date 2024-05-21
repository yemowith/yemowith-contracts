"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../core/logger");
class TempAddresses {
    constructor() {
        this.init = false;
        this.addresses = {};
        this.init = true;
    }
    initWallets() {
        this.init = true;
    }
    addWallet(code, address) {
        this.addresses[code] = address;
        logger_1.logg.info(`Added wallet ${code} with address ${address}`);
        ("");
    }
    addWallets(wallets) {
        wallets.forEach((wallet) => {
            this.addWallet(wallet.code, wallet.address);
        });
    }
    getWallet(codeOrAddress) {
        return (this.addresses[codeOrAddress] ||
            Object.entries(this.addresses).find(([key, value]) => value === codeOrAddress)?.[0]);
    }
    printWallet(address) {
        return Object.entries(this.addresses).find(([key, value]) => value === address)?.[0];
    }
}
exports.default = TempAddresses;
