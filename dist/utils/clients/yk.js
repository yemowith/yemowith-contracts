"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YemoKit = void 0;
const hardhat_1 = require("hardhat");
const YemoKit = async (address) => {
    const YK = await hardhat_1.ethers.getContractAt("YemoKit", address);
    let eemt = await hardhat_1.ethers.getContractAt("EEMT", await YK.eemt());
    let dplr = await hardhat_1.ethers.getContractAt("DPLR", await YK.dplr());
    let dsspf = await hardhat_1.ethers.getContractAt("DDSP", await YK.dsspf());
    let stg = await hardhat_1.ethers.getContractAt("STG", await YK.stg());
    let adrsb = await hardhat_1.ethers.getContractAt("ADRSB", await YK.adrsb());
    return {
        YK,
        eemt,
        dplr,
        dsspf,
        stg,
        adrsb,
    };
};
exports.YemoKit = YemoKit;
