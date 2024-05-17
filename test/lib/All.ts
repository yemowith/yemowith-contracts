import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";
import { deploy } from "../../utils/tools";

describe("All", function () {
  describe("Deployment", async () => {
    const encoder = await deploy("BaseEncoder", []);
    it("Should set the right unlockTime", async () => {
      (await encoder).deployed();
    });

    it("Should set the right unlockTime", async () => {
      (await encoder).deployed();
    });
  });
});
