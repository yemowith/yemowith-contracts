import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre, { artifacts } from "hardhat";
const Greeter = artifacts.readArtifactSync("Greeter");
const Lock = artifacts.readArtifactSync("Lock");

describe("Lock", function () {
  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {});
  });
});
