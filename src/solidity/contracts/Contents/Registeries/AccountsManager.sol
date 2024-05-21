// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@yemowith/Core/Objective/Accessblity/BaseAccessControl.sol";

contract AccountsManager is BaseAccessControl {
    /*
    struct Account {
        uint256 id;
        address externalAddress;
        address internalAddress;
        bytes32 salt;
        string walletMnemonic;
    }

    struct Wallet {
        string privateKey;
        string walletMnemonic;
        bool usedStatus;
        address usedBy;
    }

    Account[] public accounts;
    Wallet[] public wallets;

    bytes32 public constant WALLET_MANAGER_ROLE =
        keccak256("WALLET_MANAGER_ROLE");
    bytes32 public constant ACCOUNT_MANAGER_ROLE =
        keccak256("ACCOUNT_MANAGER_ROLE");

    event AccountAdded(
        uint256 indexed id,
        address externalAddress,
        address internalAddress
    );

    event WalletAdded(uint256 indexed id, string walletMnemonic);

    function initialize(address owner) external {
        _initialize(owner);
        _initializeSalt(owner);
        _setupRole(DEFAULT_ADMIN_ROLE, owner);
        _setupRole(WALLET_MANAGER_ROLE, owner);
        _setupRole(ACCOUNT_MANAGER_ROLE, owner);
    }

    function addWallet(
        string memory privateKey,
        string memory walletMnemonic
    ) external onlyRole(WALLET_MANAGER_ROLE) {
        wallets.push(Wallet(privateKey, walletMnemonic, false, address(0)));
        emit WalletAdded(wallets.length - 1, walletMnemonic);
    }

    function addAccount(
        address externalAddress,
        string memory walletMnemonic
    ) external onlyRole(ACCOUNT_MANAGER_ROLE) returns (Account memory) {
        _beforeRegister();

        // Find an unused wallet item randomly
        uint256 walletIndex = _findUnusedWallet();
        Wallet storage wallet = wallets[walletIndex];

        // Generate a new internal address (for simplicity, using the wallet mnemonic as a placeholder)
        address internalAddress = address(
            uint160(uint256(keccak256(abi.encodePacked(walletMnemonic))))
        );

        // Encode the internal address
        bytes32 salt = keccak256(abi.encodePacked(internalAddress));
        bytes memory encodedInternalAddress = _encode(
            abi.encodePacked(internalAddress),
            salt
        );

        // Bind the wallet with the account
        uint256 id = accounts.length;
        accounts.push(
            Account(id, externalAddress, internalAddress, salt, walletMnemonic)
        );
        emit AccountAdded(id, externalAddress, internalAddress);

        // Mark the wallet item as used and update the usedBy address
        wallet.usedStatus = true;
        wallet.usedBy = internalAddress;

        _afterAccount();
        return accounts[id];
    }

    function _findUnusedWallet() internal view returns (uint256) {
        uint256 unusedWalletCount = 0;
        for (uint256 i = 0; i < wallets.length; i++) {
            if (!wallets[i].usedStatus) {
                unusedWalletCount++;
            }
        }
        require(unusedWalletCount > 0, "No unused wallets available");

        uint256 randomIndex = uint256(
            keccak256(abi.encodePacked(block.timestamp, block.difficulty))
        ) % unusedWalletCount;
        for (uint256 i = 0; i < wallets.length; i++) {
            if (!wallets[i].usedStatus) {
                if (randomIndex == 0) {
                    return i;
                }
                randomIndex--;
            }
        }
        revert("Unused wallet not found");
    }

    function _beforeRegister() internal virtual {
        // Custom logic to be executed before registering an account
    }

    function _afterAccount() internal virtual {
        // Custom logic to be executed after registering an account
    }

    function getAccount(
        uint256 accountId
    ) external view returns (Account memory) {
        require(accountId < accounts.length, "Account does not exist");
        return accounts[accountId];
    }

    function encodeData(
        uint256 accountId,
        bytes memory data,
        bytes32 additionalParam
    ) public view returns (bytes memory) {
        require(accountId < accounts.length, "Account does not exist");
        return _encode(data, additionalParam);
    }

    function decodeData(
        uint256 accountId,
        bytes memory encodedData,
        bytes32 additionalParam
    ) public view returns (bytes memory) {
        require(accountId < accounts.length, "Account does not exist");
        return _decode(encodedData, additionalParam);
    }

    */
}
