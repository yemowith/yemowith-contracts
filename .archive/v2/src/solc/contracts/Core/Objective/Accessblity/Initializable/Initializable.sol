// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Initializable {
    bool private _initialized;
    bool private _initializing;

    modifier onlyInitialized() {
        require(_initialized, "Contract not initialized");
        _;
    }

    modifier initializer() {
        require(
            _initializing || !_initialized,
            "Initializable: contract is already initialized"
        );

        bool isTopLevelCall = !_initializing;
        if (isTopLevelCall) {
            _initializing = true;
            _initialized = true;
        }

        _;

        if (isTopLevelCall) {
            _initializing = false;
        }
    }

    function _initialize() internal {
        require(!_initialized, "Contract already initialized");
        _initialized = true;
    }

    function isInitialized() internal view returns (bool) {
        return _initialized;
    }
}
