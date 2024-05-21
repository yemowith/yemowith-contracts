"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rndmNum = exports.chargeC = void 0;
const transfers_1 = require("./clients/transfers");
const tools_1 = require("./tools");
const logger_1 = require("./core/logger");
const chargeC = async (c, a) => {
    const b = await (0, transfers_1.balanceOfETH)(c);
    if (b < a) {
        logger_1.logg.info(`Charge ${a} ETH to ${c}`);
        await (0, transfers_1.sendETH)(c, (0, tools_1.toEther)(1));
    }
    return b;
};
exports.chargeC = chargeC;
const rndmNum = (maxAmtFlash, minmtFlash) => Math.random() * (maxAmtFlash - minmtFlash) + minmtFlash;
exports.rndmNum = rndmNum;
