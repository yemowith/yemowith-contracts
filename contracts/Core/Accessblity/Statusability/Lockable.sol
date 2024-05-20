// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Lockable {
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

    function _lock(uint256 numberOfBlocks) internal virtual {
        _isLocked = true;
        _lockedUntilBlock = block.number + numberOfBlocks;
        emit Locked(_lockedUntilBlock);
    }

    function _unlock() internal virtual {
        _isLocked = false;
        emit Unlocked();
    }

    function isLocked() public view returns (bool) {
        return _isLocked && (block.number <= _lockedUntilBlock);
    }
}
