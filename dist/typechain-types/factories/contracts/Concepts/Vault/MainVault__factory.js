"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainVault__factory = void 0;
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
const _bytecode = "0x608060405234801561001057600080fd5b5060008054336001600160a01b0319918216811783556001805490921681178255808352600260205260408320805460ff191690921790915590819061005690826100b6565b6100807fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e836100b6565b6100aa7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c47689826100b6565b5050600160075561018a565b6100c082826100c4565b5050565b60008281526003602052604090206100dc908261011d565b156100c05760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6000610132836001600160a01b03841661013b565b90505b92915050565b600081815260018301602052604081205461018257508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610135565b506000610135565b610ca7806101996000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80638204c326116100b2578063a4e2d63411610081578063d547741f11610066578063d547741f146102c4578063e58378bb146102d7578063f80f5dd5146102fe57600080fd5b8063a4e2d634146102b1578063b187bd26146102b957600080fd5b80638204c32614610260578063893d20e81461028557806391d1485414610296578063a217fddf146102a957600080fd5b80634460bdd61161010957806375b238fc116100ee57806375b238fc146101ff57806378c8cda7146102265780637a997ab71461023957600080fd5b80634460bdd6146101b7578063485cc955146101ec57600080fd5b80631e4e00911461013b57806324d7806c146101505780632f2ff15d1461019157806336568abe146101a4575b600080fd5b61014e610149366004610b75565b610311565b005b61017c61015e366004610bb3565b6001600160a01b031660009081526002602052604090205460ff1690565b60405190151581526020015b60405180910390f35b61014e61019f366004610bce565b6103dc565b61014e6101b2366004610bce565b610464565b6101de7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768981565b604051908152602001610188565b61014e6101fa366004610bfa565b6104f0565b6101de7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b61014e610234366004610bb3565b6106a2565b6101de7fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be676081565b6001546001600160a01b03165b6040516001600160a01b039091168152602001610188565b6000546001600160a01b031661026d565b61017c6102a4366004610bce565b610754565b6101de600081565b61017c610775565b60065460ff1661017c565b61014e6102d2366004610bce565b610791565b6101de7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b61014e61030c366004610bb3565b610814565b600061031d8133610754565b61037f5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b60648201526084015b60405180910390fd5b60008381526003602090815260409182902060020180549085905582518181529182018590528251909286927fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff929081900390910190a250505050565b6000828152600360205260409020600201546103f88133610754565b6104555760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610376565b61045f83836108c2565b505050565b6001600160a01b03811633146104e25760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610376565b6104ec828261091b565b5050565b60065462010000900460ff168061050f5750600654610100900460ff16155b6105815760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610376565b60065462010000900460ff161580156105a6576006805462ffff001916620101001790555b600654610100900460ff16156106245760405162461bcd60e51b815260206004820152602a60248201527f416476616e636564416363657373436f6e74726f6c3a20616c7265616479206960448201527f6e697469616c697a6564000000000000000000000000000000000000000000006064820152608401610376565b61062f600084610974565b6106597fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e84610974565b6106837f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768983610974565b61068b61097e565b801561045f576006805462ff000019169055505050565b7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c476896106cd8133610754565b61072a5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610376565b6104ec7fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be67608361091b565b600082815260036020526040812061076c90836109e7565b90505b92915050565b60045460009060ff16801561078c57506005544311155b905090565b6000828152600360205260409020600201546107ad8133610754565b61080a5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610376565b61045f838361091b565b7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768961083f8133610754565b61089c5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610376565b6104ec7fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be6760835b60008281526003602052604090206108da9082610a09565b156104ec5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60008281526003602052604090206109339082610a1e565b156104ec5760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b6104ec82826108c2565b600654610100900460ff16156109d65760405162461bcd60e51b815260206004820152601c60248201527f436f6e747261637420616c726561647920696e697469616c697a6564000000006044820152606401610376565b6006805461ff001916610100179055565b6001600160a01b0381166000908152600183016020526040812054151561076c565b600061076c836001600160a01b038416610a33565b600061076c836001600160a01b038416610a82565b6000818152600183016020526040812054610a7a5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561076f565b50600061076f565b60008181526001830160205260408120548015610b6b576000610aa6600183610c24565b8554909150600090610aba90600190610c24565b9050808214610b1f576000866000018281548110610ada57610ada610c45565b9060005260206000200154905080876000018481548110610afd57610afd610c45565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610b3057610b30610c5b565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061076f565b600091505061076f565b60008060408385031215610b8857600080fd5b50508035926020909101359150565b80356001600160a01b0381168114610bae57600080fd5b919050565b600060208284031215610bc557600080fd5b61076c82610b97565b60008060408385031215610be157600080fd5b82359150610bf160208401610b97565b90509250929050565b60008060408385031215610c0d57600080fd5b610c1683610b97565b9150610bf160208401610b97565b8181038181111561076f57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220586009092ae4e3edebaf8b6d509629541b43f47ef8f2bd847707d51a226c6bb764736f6c63430008140033";
const isSuperArgs = (xs) => xs.length > 1;
class MainVault__factory extends ethers_1.ContractFactory {
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
exports.MainVault__factory = MainVault__factory;
MainVault__factory.bytecode = _bytecode;
MainVault__factory.abi = _abi;
