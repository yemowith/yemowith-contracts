// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Ownablity/Adminable.sol"; // Ensure the path is correct

abstract contract Lockable is Adminable {
    bool private _isLocked;
    uint256 private _lockedUntilBlock;

    event Locked(uint256 untilBlock);
    event Unlocked();

    modifier notLocked() {
        require(
            !_isLocked || block.number > _lockedUntilBlock,
            "Contract is locked"
        );
        _;
    }

    function _initialize(address owner) internal virtual override {
        super._initialize(owner); // Initialize the base Adminable contract
        _isLocked = false; // Initially, the contract is not locked
    }

    function _lock(uint256 numberOfBlocks) internal virtual onlySuperAdmin {
        _isLocked = true;
        _lockedUntilBlock = block.number + numberOfBlocks;
        emit Locked(_lockedUntilBlock);
    }

    function _unlock() internal virtual onlySuperAdmin {
        _isLocked = false;
        emit Unlocked();
    }

    function isLocked() public view returns (bool) {
        return _isLocked && (block.number <= _lockedUntilBlock);
    }
}
