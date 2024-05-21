"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("../../utils/tools");
describe("All", function () {
    describe("Deployment", async () => {
        const encoder = await (0, tools_1.deploy)("BaseEncoder", []);
        it("Should set the right unlockTime", async () => {
            (await encoder).deployed();
        });
        it("Should set the right unlockTime", async () => {
            (await encoder).deployed();
        });
    });
});
