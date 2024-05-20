// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Libraries/Objects/Core/Base/BaseObject.sol";

contract Wallet is BaseObject {
    mapping(bytes4 => address) public enabledModules;
    mapping(address => bool) public authorised;

    event Received(uint indexed value, address indexed sender, bytes data);

    modifier moduleOnly() {
        require(
            authorisedModules[msg.sender],
            "Unauthorized: caller is not an approved module"
        );
        _;
    }

    function invoke(
        address _target,
        uint _value,
        bytes calldata _data
    ) external moduleOnly returns (bytes memory _result) {
        bool success;
        (success, _result) = _target.call{ value: _value }(_data);
        if (!success) {
            // solhint-disable-next-line no-inline-assembly
            assembly {
                returndatacopy(0, 0, returndatasize())
                revert(0, returndatasize())
            }
        }
        emit Invoked(msg.sender, _target, _value, _data);
    }

    // Constructor is replaced by an initializer
    function initialize(address superAdmin) public {
        BaseObject.initialize(superAdmin); // Initialize the BaseObject with superAdmin
    }

    // Enable a module for a specific function signature
    function enableModule(bytes4 sig, address moduleAddress) public onlyAdmin {
        enabledModules[sig] = moduleAddress;
    }

    // Authorize or deauthorize a module
    function setAuthorisation(address module, bool status) public onlyAdmin {
        authorised[module] = status;
    }

    // Fallback function to handle incoming calls
    fallback() external payable onlyAvailable {
        address module = enabledModules[msg.sig];
        if (module == address(0)) {
            emit Received(msg.value, msg.sender, msg.data);
        } else {
            require(authorised[module], "BW: unauthorised module");

            // solhint-disable-next-line no-inline-assembly
            assembly {
                calldatacopy(0, 0, calldatasize())
                let result := staticcall(gas(), module, 0, calldatasize(), 0, 0)
                returndatacopy(0, 0, returndatasize())
                switch result
                case 0 {
                    revert(0, returndatasize())
                }
                default {
                    return(0, returndatasize())
                }
            }
        }
    }
}
