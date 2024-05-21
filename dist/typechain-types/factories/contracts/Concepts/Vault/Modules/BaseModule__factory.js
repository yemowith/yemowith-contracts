"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModule__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "admin",
                type: "address",
            },
        ],
        name: "AdminAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "admin",
                type: "address",
            },
        ],
        name: "AdminRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "untilBlock",
                type: "uint256",
            },
        ],
        name: "Locked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "module",
                type: "address",
            },
        ],
        name: "ModuleDisabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "module",
                type: "address",
            },
        ],
        name: "ModuleEnabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousSuperAdmin",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newSuperAdmin",
                type: "address",
            },
        ],
        name: "SuperAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "Unlocked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "Unpaused",
        type: "event",
    },
    {
        inputs: [],
        name: "ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "OWNER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "SUPER_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "WHITELIST_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "module",
                type: "address",
            },
        ],
        name: "disableModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "module",
                type: "address",
            },
        ],
        name: "enableModule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "enabledModules",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getSuperAdmin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "superAdmin",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "isAdmin",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "isLocked",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "module",
                type: "address",
            },
        ],
        name: "isModuleEnabled",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "isPaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "removeWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "setRoleAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060008054336001600160a01b0319918216811783556001805490921681178255808352600260205260408320805460ff1916909217909155908190620000599082620000b9565b620000857fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e83620000b9565b620000b17f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768982620000b9565b505062000197565b620000c58282620000c9565b5050565b6000828152600360205260409020620000e3908262000125565b15620000c55760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60006200013c836001600160a01b03841662000145565b90505b92915050565b60008181526001830160205260408120546200018e575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200013f565b5060006200013f565b610fdb80620001a76000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c80638204c326116100d8578063a95f52461161008c578063d547741f11610066578063d547741f14610385578063e58378bb14610398578063f80f5dd5146103bf57600080fd5b8063a95f524614610344578063b187bd2614610357578063bb41278c1461036257600080fd5b806391d14854116100bd57806391d1485414610321578063a217fddf14610334578063a4e2d6341461033c57600080fd5b80638204c326146102eb578063893d20e81461031057600080fd5b80634460bdd61161013a57806375b238fc1161011457806375b238fc1461028a57806378c8cda7146102b15780637a997ab7146102c457600080fd5b80634460bdd61461022f578063485cc95514610264578063610b59251461027757600080fd5b80632d9ad53d1161016b5780632d9ad53d146101dd5780632f2ff15d1461020957806336568abe1461021c57600080fd5b80631e4e00911461018757806324d7806c1461019c575b600080fd5b61019a610195366004610ea9565b6103d2565b005b6101c86101aa366004610ee7565b6001600160a01b031660009081526002602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6101c86101eb366004610ee7565b6001600160a01b031660009081526007602052604090205460ff1690565b61019a610217366004610f02565b61049d565b61019a61022a366004610f02565b610525565b6102567f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768981565b6040519081526020016101d4565b61019a610272366004610f2e565b6105b1565b61019a610285366004610ee7565b610763565b6102567fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b61019a6102bf366004610ee7565b610895565b6102567fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be676081565b6001546001600160a01b03165b6040516001600160a01b0390911681526020016101d4565b6000546001600160a01b03166102f8565b6101c861032f366004610f02565b610947565b610256600081565b6101c8610968565b61019a610352366004610ee7565b610984565b60065460ff166101c8565b6101c8610370366004610ee7565b60076020526000908152604090205460ff1681565b61019a610393366004610f02565b610ac5565b6102567fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b61019a6103cd366004610ee7565b610b48565b60006103de8133610947565b6104405760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b60648201526084015b60405180910390fd5b60008381526003602090815260409182902060020180549085905582518181529182018590528251909286927fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff929081900390910190a250505050565b6000828152600360205260409020600201546104b98133610947565b6105165760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610437565b6105208383610bf6565b505050565b6001600160a01b03811633146105a35760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610437565b6105ad8282610c4f565b5050565b60065462010000900460ff16806105d05750600654610100900460ff16155b6106425760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610437565b60065462010000900460ff16158015610667576006805462ffff001916620101001790555b600654610100900460ff16156106e55760405162461bcd60e51b815260206004820152602a60248201527f416476616e636564416363657373436f6e74726f6c3a20616c7265616479206960448201527f6e697469616c697a6564000000000000000000000000000000000000000000006064820152608401610437565b6106f0600084610ca8565b61071a7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e84610ca8565b6107447f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768983610ca8565b61074c610cb2565b8015610520576006805462ff000019169055505050565b600061076f8133610947565b6107cc5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610437565b6001600160a01b0382166108485760405162461bcd60e51b815260206004820152602960248201527f426173654d6f64756c653a206d6f64756c6520616464726573732063616e6e6f60448201527f74206265207a65726f00000000000000000000000000000000000000000000006064820152608401610437565b6001600160a01b038216600081815260076020526040808220805460ff19166001179055517f7a77214430737f5a548efc743650795815091c4d522683f9665bdc753bdb8c169190a25050565b7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c476896108c08133610947565b61091d5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610437565b6105ad7fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be676083610c4f565b600082815260036020526040812061095f9083610d1b565b90505b92915050565b60045460009060ff16801561097f57506005544311155b905090565b60006109908133610947565b6109ed5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610437565b6001600160a01b03821660009081526007602052604090205460ff16610a7b5760405162461bcd60e51b815260206004820152602160248201527f426173654d6f64756c653a206d6f64756c65206973206e6f7420656e61626c6560448201527f64000000000000000000000000000000000000000000000000000000000000006064820152608401610437565b6001600160a01b038216600081815260076020526040808220805460ff19169055517f24b3f8d8d24a659ee066d9959ce6855cd30740cacd7972f32c959a33e1d7e7c09190a25050565b600082815260036020526040902060020154610ae18133610947565b610b3e5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610437565b6105208383610c4f565b7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c47689610b738133610947565b610bd05760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610437565b6105ad7fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be6760835b6000828152600360205260409020610c0e9082610d3d565b156105ad5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6000828152600360205260409020610c679082610d52565b156105ad5760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b6105ad8282610bf6565b600654610100900460ff1615610d0a5760405162461bcd60e51b815260206004820152601c60248201527f436f6e747261637420616c726561647920696e697469616c697a6564000000006044820152606401610437565b6006805461ff001916610100179055565b6001600160a01b0381166000908152600183016020526040812054151561095f565b600061095f836001600160a01b038416610d67565b600061095f836001600160a01b038416610db6565b6000818152600183016020526040812054610dae57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610962565b506000610962565b60008181526001830160205260408120548015610e9f576000610dda600183610f58565b8554909150600090610dee90600190610f58565b9050808214610e53576000866000018281548110610e0e57610e0e610f79565b9060005260206000200154905080876000018481548110610e3157610e31610f79565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610e6457610e64610f8f565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610962565b6000915050610962565b60008060408385031215610ebc57600080fd5b50508035926020909101359150565b80356001600160a01b0381168114610ee257600080fd5b919050565b600060208284031215610ef957600080fd5b61095f82610ecb565b60008060408385031215610f1557600080fd5b82359150610f2560208401610ecb565b90509250929050565b60008060408385031215610f4157600080fd5b610f4a83610ecb565b9150610f2560208401610ecb565b8181038181111561096257634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212201b469cea38452f6b7c859f334e72c2f7cfaffc4eeb84264f1674d3e0877baf1e64736f6c63430008140033";
const isSuperArgs = (xs) => xs.length > 1;
class BaseModule__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.BaseModule__factory = BaseModule__factory;
BaseModule__factory.bytecode = _bytecode;
BaseModule__factory.abi = _abi;
