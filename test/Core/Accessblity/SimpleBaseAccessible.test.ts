const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleBaseAccessible", function () {
    let SimpleBaseAccessible, simpleBaseAccessible;
    let owner, superAdmin, addr1, addr2;

    beforeEach(async function () {
        [owner, superAdmin, addr1, addr2] = await ethers.getSigners();
        SimpleBaseAccessible = await ethers.getContractFactory("SimpleBaseAccessible");
        simpleBaseAccessible = await SimpleBaseAccessible.deploy(owner.address, superAdmin.address);
        await simpleBaseAccessible.deployed();
    });

    it("should initialize with the correct roles", async function () {
        expect(await simpleBaseAccessible.hasRole(await simpleBaseAccessible.DEFAULT_ADMIN_ROLE(), owner.address)).to.be.true;
        expect(await simpleBaseAccessible.hasRole(await simpleBaseAccessible._getSuperAdminRole(), superAdmin.address)).to.be.true;
    });

    it("should allow the super admin to add and remove an admin", async function () {
        await simpleBaseAccessible.connect(superAdmin).testAddAdmin(addr1.address);
        expect(await simpleBaseAccessible.hasRole(await simpleBaseAccessible._getAdminRole(), addr1.address)).to.be.true;

        await simpleBaseAccessible.connect(superAdmin).testRemoveAdmin(addr1.address);
        expect(await simpleBaseAccessible.hasRole(await simpleBaseAccessible._getAdminRole(), addr1.address)).to.be.false;
    });

    it("should allow the super admin to add and remove from the whitelist", async function () {
        await simpleBaseAccessible.connect(superAdmin).testAddWhitelist(addr1.address);
        expect(await simpleBaseAccessible.isWhitelisted(addr1.address)).to.be.true;

        await simpleBaseAccessible.connect(superAdmin).testRemoveWhitelist(addr1.address);
        expect(await simpleBaseAccessible.isWhitelisted(addr1.address)).to.be.false;
    });

    it("should allow the super admin to lock and unlock the contract", async function () {
        await simpleBaseAccessible.connect(superAdmin).testLock(100);
        // Add your assertions for the lock functionality here

        await simpleBaseAccessible.connect(superAdmin).testUnlock();
        // Add your assertions for the unlock functionality here
    });

    it("should allow the super admin to pause and unpause the contract", async function () {
        await simpleBaseAccessible.connect(superAdmin).testPause();
        expect(await simpleBaseAccessible.paused()).to.be.true;

        await simpleBaseAccessible.connect(superAdmin).testUnpause();
        expect(await simpleBaseAccessible.paused()).to.be.false;
    });

    it("should allow the owner to change the owner and super admin", async function () {
        await simpleBaseAccessible.connect(owner).testChangeOwner(addr1.address);
        expect(await simpleBaseAccessible.hasRole(await simpleBaseAccessible._getOwnerRole(), addr1.address)).to.be.true;

        await simpleBaseAccessible.connect(owner).testSetSuperAdmin(addr2.address);
        expect(await simpleBaseAccessible.hasRole(await simpleBaseAccessible._getSuperAdminRole(), addr2.address)).to.be.true;
    });

    it("should allow the super admin to grant and revoke roles", async function () {
        const role = await simpleBaseAccessible._getAdminRole();
        await simpleBaseAccessible.connect(superAdmin).testGrantRole(role, addr1.address);
        expect(await simpleBaseAccessible.hasRole(role, addr1.address)).to.be.true;

        await simpleBaseAccessible.connect(superAdmin).testRevokeRole(role, addr1.address);
        expect(await simpleBaseAccessible.hasRole(role, addr1.address)).to.be.false;
    });

    it("should allow an account to renounce its role", async function () {
        const role = await simpleBaseAccessible._getAdminRole();
        await simpleBaseAccessible.connect(superAdmin).testGrantRole(role, addr1.address);
        expect(await simpleBaseAccessible.hasRole(role, addr1.address)).to.be.true;

        await simpleBaseAccessible.connect(addr1).testRenounceRole(role);
        expect(await simpleBaseAccessible.hasRole(role, addr1.address)).to.be.false;
    });

    it("should allow the default admin to set a role admin", async function () {
        const role = await simpleBaseAccessible._getAdminRole();
        const newAdminRole = await simpleBaseAccessible._getSuperAdminRole();
        await simpleBaseAccessible.connect(owner).testSetRoleAdmin(role, newAdminRole);
        expect(await simpleBaseAccessible.getRoleAdmin(role)).to.equal(newAdminRole);
    });

    it("should check if an address has a specific role", async function () {
        const role = await simpleBaseAccessible._getAdminRole();
        await simpleBaseAccessible.connect(superAdmin).testGrantRole(role, addr1.address);
        expect(await simpleBaseAccessible.hasRole(role, addr1.address)).to.be.true;

        expect(await simpleBaseAccessible.hasSpecificRole(role, addr1.address)).to.be.true;
        expect(await simpleBaseAccessible.hasSpecificRole(role, addr2.address)).to.be.false;
    });
});