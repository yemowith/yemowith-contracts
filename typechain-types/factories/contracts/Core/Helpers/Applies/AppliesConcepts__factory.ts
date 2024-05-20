/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  AppliesConcepts,
  AppliesConceptsInterface,
} from "../../../../../contracts/Core/Helpers/Applies/AppliesConcepts";

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
        indexed: true,
        internalType: "bytes32",
        name: "conceptId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum AppliesConcepts.OperationType",
        name: "operationType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum AppliesConcepts.Mode",
        name: "mode",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ConceptAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "conceptId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "inputValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outputValue",
        type: "uint256",
      },
    ],
    name: "ConceptApplied",
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
        internalType: "bytes32",
        name: "conceptId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "enum AppliesConcepts.OperationType",
        name: "operationType",
        type: "uint8",
      },
      {
        internalType: "enum AppliesConcepts.Mode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "addConcept",
    outputs: [],
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
    name: "addWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "conceptId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "inputValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "overrideValue",
        type: "uint256",
      },
    ],
    name: "applyConcept",
    outputs: [
      {
        internalType: "uint256",
        name: "originalValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "givenValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outputValue",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "difference",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "concepts",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "enum AppliesConcepts.OperationType",
        name: "operationType",
        type: "uint8",
      },
      {
        internalType: "enum AppliesConcepts.Mode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060008054336001600160a01b0319918216811783556001805490921681178255808352600260205260408320805460ff1916909217909155908190620000599082620000b9565b620000857fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e83620000b9565b620000b17f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768982620000b9565b505062000197565b620000c58282620000c9565b5050565b6000828152600360205260409020620000e3908262000125565b15620000c55760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60006200013c836001600160a01b03841662000145565b90505b92915050565b60008181526001830160205260408120546200018e575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200013f565b5060006200013f565b61176880620001a76000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c80637a997ab7116100d8578063a217fddf1161008c578063d547741f11610066578063d547741f14610372578063e58378bb14610385578063f80f5dd5146103ac57600080fd5b8063a217fddf14610357578063a4e2d6341461035f578063b187bd261461036757600080fd5b8063893d20e8116100bd578063893d20e81461032057806391d148541461033157806395047c491461034457600080fd5b80637a997ab7146102d45780638204c326146102fb57600080fd5b80634460bdd61161012f5780635d0ba4de116101145780635d0ba4de1461026757806375b238fc1461029a57806378c8cda7146102c157600080fd5b80634460bdd61461021f578063485cc9551461025457600080fd5b806324d7806c1161016057806324d7806c146101bd5780632f2ff15d146101f957806336568abe1461020c57600080fd5b806303f2b87d1461017c5780631e4e0091146101a8575b600080fd5b61018f61018a366004611279565b6103bf565b60405161019f94939291906112bc565b60405180910390f35b6101bb6101b6366004611336565b610476565b005b6101e96101cb366004611374565b6001600160a01b031660009081526002602052604090205460ff1690565b604051901515815260200161019f565b6101bb61020736600461138f565b610541565b6101bb61021a36600461138f565b6105c9565b6102467f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768981565b60405190815260200161019f565b6101bb6102623660046113bb565b610655565b61027a6102753660046113e5565b610807565b60408051948552602085019390935291830152606082015260800161019f565b6102467fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b6101bb6102cf366004611374565b610c37565b6102467fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be676081565b6001546001600160a01b03165b6040516001600160a01b03909116815260200161019f565b6000546001600160a01b0316610308565b6101e961033f36600461138f565b610ce9565b6101bb610352366004611445565b610d0a565b610246600081565b6101e9610e72565b60065460ff166101e9565b6101bb61038036600461138f565b610e8e565b6102467fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b6101bb6103ba366004611374565b610f11565b6007602052600090815260409020805481906103da90611529565b80601f016020809104026020016040519081016040528092919081815260200182805461040690611529565b80156104535780601f1061042857610100808354040283529160200191610453565b820191906000526020600020905b81548152906001019060200180831161043657829003601f168201915b505050506001830154600290930154919260ff8082169361010090920416915084565b60006104828133610ce9565b6104e45760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b60648201526084015b60405180910390fd5b60008381526003602090815260409182902060020180549085905582518181529182018590528251909286927fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff929081900390910190a250505050565b60008281526003602052604090206002015461055d8133610ce9565b6105ba5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b60648201526084016104db565b6105c48383610fbf565b505050565b6001600160a01b03811633146106475760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084016104db565b6106518282611018565b5050565b60065462010000900460ff16806106745750600654610100900460ff16155b6106e65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016104db565b60065462010000900460ff1615801561070b576006805462ffff001916620101001790555b600654610100900460ff16156107895760405162461bcd60e51b815260206004820152602a60248201527f416476616e636564416363657373436f6e74726f6c3a20616c7265616479206960448201527f6e697469616c697a65640000000000000000000000000000000000000000000060648201526084016104db565b610794600084611071565b6107be7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e84611071565b6107e87f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768983611071565b6107f061107b565b80156105c4576006805462ff000019169055505050565b60008060008060006007600089815260200190815260200160002060405180608001604052908160008201805461083d90611529565b80601f016020809104026020016040519081016040528092919081815260200182805461086990611529565b80156108b65780601f1061088b576101008083540402835291602001916108b6565b820191906000526020600020905b81548152906001019060200180831161089957829003601f168201915b5050509183525050600182015460209091019060ff1660038111156108dd576108dd611292565b60038111156108ee576108ee611292565b81526020016001820160019054906101000a900460ff16600181111561091657610916611292565b600181111561092757610927611292565b81526020016002820154815250509050869450869350869250600086600003610954578160600151610956565b865b905060008260400151600181111561097057610970611292565b03610a6d5760008260200151600381111561098d5761098d611292565b036109a35761099c8189611579565b9350610be4565b6001826020015160038111156109bb576109bb611292565b036109ca5761099c8189611590565b6002826020015160038111156109e2576109e2611292565b03610a415780600003610a375760405162461bcd60e51b815260206004820152601060248201527f4469766973696f6e206279207a65726f0000000000000000000000000000000060448201526064016104db565b61099c81896115a3565b600382602001516003811115610a5957610a59611292565b03610a685761099c81896115c5565b610be4565b600182604001516001811115610a8557610a85611292565b03610be457600082602001516003811115610aa257610aa2611292565b03610ac7576064610ab38282611590565b610abd908a611579565b61099c91906115a3565b600182602001516003811115610adf57610adf611292565b14610be457600182602001516003811115610afc57610afc611292565b03610b21576064610b0d828a611579565b610b1791906115a3565b61099c9089611590565b600282602001516003811115610b3957610b39611292565b03610ba45780600003610b8e5760405162461bcd60e51b815260206004820152601060248201527f4469766973696f6e206279207a65726f0000000000000000000000000000000060448201526064016104db565b610b99816064611590565b610abd896064611579565b600382602001516003811115610bbc57610bbc611292565b03610be4576064610bcd828a611579565b610bd791906115a3565b610be190896115c5565b93505b610bee88856115d8565b604080518a8152602081018790529194508a917f8f415b52b2c145a36704a2e9221869a9e0dc24835886d7c5a8a0461a1b15d5ff910160405180910390a2505093509350935093565b7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c47689610c628133610ce9565b610cbf5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b60648201526084016104db565b6106517fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be676083611018565b6000828152600360205260408120610d0190836110e4565b90505b92915050565b6000546001600160a01b03163314610d645760405162461bcd60e51b815260206004820152600d60248201527f4e6f7420746865206f776e65720000000000000000000000000000000000000060448201526064016104db565b6040518060800160405280858152602001846003811115610d8757610d87611292565b8152602001836001811115610d9e57610d9e611292565b81526020908101839052600087815260079091526040902081518190610dc49082611646565b50602082015160018083018054909160ff1990911690836003811115610dec57610dec611292565b021790555060408201518160010160016101000a81548160ff02191690836001811115610e1b57610e1b611292565b021790555060608201518160020155905050847f7c1cc337a07cd78a8a1bb0065bcc9b43f9747819fa509621f0dff1588ffcfe8285858585604051610e6394939291906112bc565b60405180910390a25050505050565b60045460009060ff168015610e8957506005544311155b905090565b600082815260036020526040902060020154610eaa8133610ce9565b610f075760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b60648201526084016104db565b6105c48383611018565b7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c47689610f3c8133610ce9565b610f995760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b60648201526084016104db565b6106517fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be6760835b6000828152600360205260409020610fd79082611106565b156106515760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b6000828152600360205260409020611030908261111b565b156106515760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b6106518282610fbf565b600654610100900460ff16156110d35760405162461bcd60e51b815260206004820152601c60248201527f436f6e747261637420616c726561647920696e697469616c697a65640000000060448201526064016104db565b6006805461ff001916610100179055565b6001600160a01b03811660009081526001830160205260408120541515610d01565b6000610d01836001600160a01b038416611130565b6000610d01836001600160a01b03841661117f565b600081815260018301602052604081205461117757508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610d04565b506000610d04565b600081815260018301602052604081205480156112685760006111a36001836115c5565b85549091506000906111b7906001906115c5565b905080821461121c5760008660000182815481106111d7576111d7611706565b90600052602060002001549050808760000184815481106111fa576111fa611706565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061122d5761122d61171c565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610d04565b6000915050610d04565b5092915050565b60006020828403121561128b57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b600281106112b8576112b8611292565b9052565b608081526000855180608084015260005b818110156112ea57602081890181015160a08684010152016112cd565b50600060a0828501015260a0601f19601f8301168401019150506004851061131457611314611292565b84602083015261132760408301856112a8565b82606083015295945050505050565b6000806040838503121561134957600080fd5b50508035926020909101359150565b80356001600160a01b038116811461136f57600080fd5b919050565b60006020828403121561138657600080fd5b610d0182611358565b600080604083850312156113a257600080fd5b823591506113b260208401611358565b90509250929050565b600080604083850312156113ce57600080fd5b6113d783611358565b91506113b260208401611358565b6000806000606084860312156113fa57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052604160045260246000fd5b80356004811061136f57600080fd5b80356002811061136f57600080fd5b600080600080600060a0868803121561145d57600080fd5b85359450602086013567ffffffffffffffff8082111561147c57600080fd5b818801915088601f83011261149057600080fd5b8135818111156114a2576114a2611411565b604051601f8201601f19908116603f011681019083821181831017156114ca576114ca611411565b816040528281528b60208487010111156114e357600080fd5b82602086016020830137600060208483010152809850505050505061150a60408701611427565b925061151860608701611436565b949793965091946080013592915050565b600181811c9082168061153d57607f821691505b60208210810361155d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610d0457610d04611563565b80820180821115610d0457610d04611563565b6000826115c057634e487b7160e01b600052601260045260246000fd5b500490565b81810381811115610d0457610d04611563565b818103600083128015838313168383128216171561127257611272611563565b601f8211156105c457600081815260208120601f850160051c8101602086101561161f5750805b601f850160051c820191505b8181101561163e5782815560010161162b565b505050505050565b815167ffffffffffffffff81111561166057611660611411565b6116748161166e8454611529565b846115f8565b602080601f8311600181146116a957600084156116915750858301515b600019600386901b1c1916600185901b17855561163e565b600085815260208120601f198616915b828110156116d8578886015182559484019460019091019084016116b9565b50858210156116f65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212201fcc6ee1e8145295de9877a61bfa51ee54b2c1c26c1e0917155f29de04b250da64736f6c63430008140033";

type AppliesConceptsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AppliesConceptsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AppliesConcepts__factory extends ContractFactory {
  constructor(...args: AppliesConceptsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AppliesConcepts & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AppliesConcepts__factory {
    return super.connect(runner) as AppliesConcepts__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AppliesConceptsInterface {
    return new Interface(_abi) as AppliesConceptsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AppliesConcepts {
    return new Contract(address, _abi, runner) as unknown as AppliesConcepts;
  }
}