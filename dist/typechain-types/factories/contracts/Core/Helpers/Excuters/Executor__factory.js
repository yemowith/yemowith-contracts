"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executor__factory = void 0;
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
        name: "EXECUTOR_ROLE",
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
        name: "MULTI_EXECUTOR_ROLE",
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
        name: "STATIC_CALLER_ROLE",
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
                name: "target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "call",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "callStatic",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                internalType: "string",
                name: "signature",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "params",
                type: "bytes",
            },
        ],
        name: "getEncodedData",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "signature",
                type: "string",
            },
            {
                internalType: "bytes",
                name: "params",
                type: "bytes",
            },
        ],
        name: "getEncodedData",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "pure",
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
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
        ],
        name: "multiExecute",
        outputs: [
            {
                internalType: "bytes[]",
                name: "",
                type: "bytes[]",
            },
        ],
        stateMutability: "nonpayable",
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
const _bytecode = "0x60806040523480156200001157600080fd5b5060008054336001600160a01b0319918216811783556001805490921681178255808352600260205260408320805460ff1916909217909155908190620000599082620000b9565b620000857fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e83620000b9565b620000b17f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768982620000b9565b505062000197565b620000c58282620000c9565b5050565b6000828152600360205260409020620000e3908262000125565b15620000c55760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60006200013c836001600160a01b03841662000145565b90505b92915050565b60008181526001830160205260408120546200018e575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200013f565b5060006200013f565b6119bd80620001a76000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c806375b238fc116100f9578063a217fddf11610097578063d547741f11610071578063d547741f1461042f578063da73b13f14610442578063e58378bb14610469578063f80f5dd51461049057600080fd5b8063a217fddf14610414578063a4e2d6341461041c578063b187bd261461042457600080fd5b80637eaeabff116100d35780637eaeabff146103b85780638204c326146103cb578063893d20e8146103f057806391d148541461040157600080fd5b806375b238fc1461035757806378c8cda71461037e5780637a997ab71461039157600080fd5b806324d7806c116101665780634460bdd6116101405780634460bdd6146102e957806344eb646314610310578063485cc955146103235780634a3aad111461033657600080fd5b806324d7806c146102875780632f2ff15d146102c357806336568abe146102d657600080fd5b80631b8b921d116101975780631b8b921d1461023f5780631cff79cd1461025f5780631e4e00911461027257600080fd5b806307bd0265146101be5780630d2efdbb146101f85780631a8090bb1461021f575b600080fd5b6101e57fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b6040519081526020015b60405180910390f35b6101e57f24f6679db5ad89e1735cc3ff300ee2cf5477ec5cf71573e015430144c84b7ca781565b61023261022d3660046115b1565b6104a3565b6040516101ef91906116c1565b61025261024d366004611723565b610656565b6040516101ef9190611767565b61025261026d366004611723565b610798565b61028561028036600461177a565b610834565b005b6102b361029536600461179c565b6001600160a01b031660009081526002602052604090205460ff1690565b60405190151581526020016101ef565b6102856102d13660046117b7565b6108fa565b6102856102e43660046117b7565b610982565b6101e57f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768981565b61025261031e366004611723565b610a0e565b6102856103313660046117e3565b610b45565b61034961034436600461180d565b610cf7565b6040516101ef929190611881565b6101e57fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b61028561038c36600461179c565b610d8d565b6101e57fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be676081565b6102526103c63660046118a3565b610e3f565b6001546001600160a01b03165b6040516001600160a01b0390911681526020016101ef565b6000546001600160a01b03166103d8565b6102b361040f3660046117b7565b610ece565b6101e5600081565b6102b3610eed565b60065460ff166102b3565b61028561043d3660046117b7565b610f09565b6101e57f16d22fb0a3dea8ff8be795756b9481592d33d5cad2ba7d6d931b8de4c03e259281565b6101e57fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b61028561049e36600461179c565b610f8c565b60607f16d22fb0a3dea8ff8be795756b9481592d33d5cad2ba7d6d931b8de4c03e25926104d08133610ece565b6105325760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b60648201526084015b60405180910390fd5b82518451146105835760405162461bcd60e51b815260206004820181905260248201527f5461726765747320616e642064617461206c656e677468206d69736d617463686044820152606401610529565b6000845167ffffffffffffffff81111561059f5761059f61142a565b6040519080825280602002602001820160405280156105d257816020015b60608152602001906001900390816105bd5790505b50905060005b855181101561064d5761061d8682815181106105f6576105f66118fd565b6020026020010151868381518110610610576106106118fd565b602002602001015161103e565b82828151811061062f5761062f6118fd565b6020026020010181905250808061064590611929565b9150506105d8565b50949350505050565b60607fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e636106838133610ece565b6106e05760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610529565b600080856001600160a01b0316856040516106fb9190611942565b6000604051808303816000865af19150503d8060008114610738576040519150601f19603f3d011682016040523d82523d6000602084013e61073d565b606091505b50915091508161078f5760405162461bcd60e51b815260206004820152600b60248201527f43616c6c206661696c65640000000000000000000000000000000000000000006044820152606401610529565b95945050505050565b60607fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e636107c58133610ece565b6108225760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610529565b61082c848461103e565b949350505050565b60006108408133610ece565b61089d5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610529565b60008381526003602090815260409182902060020180549085905582518181529182018590528251909286927fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff929081900390910190a250505050565b6000828152600360205260409020600201546109168133610ece565b6109735760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610529565b61097d8383611177565b505050565b6001600160a01b0381163314610a005760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610529565b610a0a82826111d0565b5050565b60607f24f6679db5ad89e1735cc3ff300ee2cf5477ec5cf71573e015430144c84b7ca7610a3b8133610ece565b610a985760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610529565b600080856001600160a01b031685604051610ab39190611942565b600060405180830381855afa9150503d8060008114610aee576040519150601f19603f3d011682016040523d82523d6000602084013e610af3565b606091505b50915091508161078f5760405162461bcd60e51b815260206004820152601260248201527f5374617469632063616c6c206661696c656400000000000000000000000000006044820152606401610529565b60065462010000900460ff1680610b645750600654610100900460ff16155b610bd65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610529565b60065462010000900460ff16158015610bfb576006805462ffff001916620101001790555b600654610100900460ff1615610c795760405162461bcd60e51b815260206004820152602a60248201527f416476616e636564416363657373436f6e74726f6c3a20616c7265616479206960448201527f6e697469616c697a6564000000000000000000000000000000000000000000006064820152608401610529565b610c84600084611229565b610cae7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e84611229565b610cd87f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768983611229565b610ce0611233565b801561097d576006805462ff000019169055505050565b60006060848484604051602401610d0e9190611767565b60408051601f198184030181529082905291610d2991611942565b6040519081900390206020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009092169190911790529092509050935093915050565b7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c47689610db88133610ece565b610e155760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610529565b610a0a7fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be6760836111d0565b60608282604051602401610e539190611767565b60408051601f198184030181529082905291610e6e91611942565b6040519081900390206020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090921691909117905290505b92915050565b6000828152600360205260408120610ee6908361129c565b9392505050565b60045460009060ff168015610f0457506005544311155b905090565b600082815260036020526040902060020154610f258133610ece565b610f825760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610529565b61097d83836111d0565b7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c47689610fb78133610ece565b6110145760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610529565b610a0a7fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be676083611177565b60607fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6361106b8133610ece565b6110c85760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610529565b600080856001600160a01b0316856040516110e39190611942565b6000604051808303816000865af19150503d8060008114611120576040519150601f19603f3d011682016040523d82523d6000602084013e611125565b606091505b50915091508161078f5760405162461bcd60e51b815260206004820152601060248201527f457865637574696f6e206661696c6564000000000000000000000000000000006044820152606401610529565b600082815260036020526040902061118f90826112be565b15610a0a5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60008281526003602052604090206111e890826112d3565b15610a0a5760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b610a0a8282611177565b600654610100900460ff161561128b5760405162461bcd60e51b815260206004820152601c60248201527f436f6e747261637420616c726561647920696e697469616c697a6564000000006044820152606401610529565b6006805461ff001916610100179055565b6001600160a01b03811660009081526001830160205260408120541515610ee6565b6000610ee6836001600160a01b0384166112e8565b6000610ee6836001600160a01b038416611337565b600081815260018301602052604081205461132f57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610ec8565b506000610ec8565b6000818152600183016020526040812054801561142057600061135b60018361195e565b855490915060009061136f9060019061195e565b90508082146113d457600086600001828154811061138f5761138f6118fd565b90600052602060002001549050808760000184815481106113b2576113b26118fd565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806113e5576113e5611971565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610ec8565b6000915050610ec8565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156114695761146961142a565b604052919050565b600067ffffffffffffffff82111561148b5761148b61142a565b5060051b60200190565b80356001600160a01b03811681146114ac57600080fd5b919050565b600082601f8301126114c257600080fd5b813567ffffffffffffffff8111156114dc576114dc61142a565b6114ef601f8201601f1916602001611440565b81815284602083860101111561150457600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261153257600080fd5b8135602061154761154283611471565b611440565b82815260059290921b8401810191818101908684111561156657600080fd5b8286015b848110156115a657803567ffffffffffffffff81111561158a5760008081fd5b6115988986838b01016114b1565b84525091830191830161156a565b509695505050505050565b600080604083850312156115c457600080fd5b823567ffffffffffffffff808211156115dc57600080fd5b818501915085601f8301126115f057600080fd5b8135602061160061154283611471565b82815260059290921b8401810191818101908984111561161f57600080fd5b948201945b838610156116445761163586611495565b82529482019490820190611624565b9650508601359250508082111561165a57600080fd5b5061166785828601611521565b9150509250929050565b60005b8381101561168c578181015183820152602001611674565b50506000910152565b600081518084526116ad816020860160208601611671565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561171657603f19888603018452611704858351611695565b945092850192908501906001016116e8565b5092979650505050505050565b6000806040838503121561173657600080fd5b61173f83611495565b9150602083013567ffffffffffffffff81111561175b57600080fd5b611667858286016114b1565b602081526000610ee66020830184611695565b6000806040838503121561178d57600080fd5b50508035926020909101359150565b6000602082840312156117ae57600080fd5b610ee682611495565b600080604083850312156117ca57600080fd5b823591506117da60208401611495565b90509250929050565b600080604083850312156117f657600080fd5b6117ff83611495565b91506117da60208401611495565b60008060006060848603121561182257600080fd5b61182b84611495565b9250602084013567ffffffffffffffff8082111561184857600080fd5b611854878388016114b1565b9350604086013591508082111561186a57600080fd5b50611877868287016114b1565b9150509250925092565b6001600160a01b038316815260406020820152600061082c6040830184611695565b600080604083850312156118b657600080fd5b823567ffffffffffffffff808211156118ce57600080fd5b6118da868387016114b1565b935060208501359150808211156118f057600080fd5b50611667858286016114b1565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161193b5761193b611913565b5060010190565b60008251611954818460208701611671565b9190910192915050565b81810381811115610ec857610ec8611913565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220f8640047700a097972d57aa3c66f0736f8474b98031c6328764251fcb1f22e7964736f6c63430008140033";
const isSuperArgs = (xs) => xs.length > 1;
class Executor__factory extends ethers_1.ContractFactory {
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
exports.Executor__factory = Executor__factory;
Executor__factory.bytecode = _bytecode;
Executor__factory.abi = _abi;
