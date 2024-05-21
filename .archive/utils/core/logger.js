"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logBalance = exports.logg = void 0;
const consola_1 = require("consola");
const logg = consola_1.consola;
exports.logg = logg;
const logBalance = (balance) => {
    logg.info(`Balance: ${balance}`);
};
exports.logBalance = logBalance;
