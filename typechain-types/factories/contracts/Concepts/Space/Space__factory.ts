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
import type { NonPayableOverrides } from "../../../../common";
import type {
  Space,
  SpaceInterface,
} from "../../../../contracts/Concepts/Space/Space";

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
    name: "AppliesConcepts",
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
    inputs: [],
    name: "_accountRegistry",
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
    name: "_contractManager",
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
    name: "_encoder",
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
    name: "_gatewaysManagement",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060008054336001600160a01b0319918216811783556001805490921681178255808352600260205260408320805460ff191690921790915590819061005690826100b1565b6100807fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e836100b1565b6100aa7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c47689826100b1565b5050610185565b6100bb82826100bf565b5050565b60008281526003602052604090206100d79082610118565b156100bb5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b600061012d836001600160a01b038416610136565b90505b92915050565b600081815260018301602052604081205461017d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610130565b506000610130565b610d6880620001956000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c8063893d20e8116100e3578063a697d2c31161008c578063db721e5a11610066578063db721e5a1461037e578063e58378bb14610398578063f80f5dd5146103bf57600080fd5b8063a697d2c31461034d578063b187bd2614610360578063d547741f1461036b57600080fd5b8063929255ee116100bd578063929255ee1461032a578063a217fddf1461033d578063a4e2d6341461034557600080fd5b8063893d20e8146102f35780638eea947b1461030457806391d148541461031757600080fd5b8063485cc9551161014557806378c8cda71161011f57806378c8cda7146102a85780637a997ab7146102bb5780638204c326146102e257600080fd5b8063485cc955146102435780635895be971461025657806375b238fc1461028157600080fd5b80632f2ff15d116101765780632f2ff15d146101e857806336568abe146101fb5780634460bdd61461020e57600080fd5b80631e4e00911461019257806324d7806c146101a7575b600080fd5b6101a56101a0366004610c36565b6103d2565b005b6101d36101b5366004610c74565b6001600160a01b031660009081526002602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6101a56101f6366004610c8f565b61049d565b6101a5610209366004610c8f565b610525565b6102357f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768981565b6040519081526020016101df565b6101a5610251366004610cbb565b6105b1565b600954610269906001600160a01b031681565b6040516001600160a01b0390911681526020016101df565b6102357fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b6101a56102b6366004610c74565b610763565b6102357fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be676081565b6001546001600160a01b0316610269565b6000546001600160a01b0316610269565b600a54610269906001600160a01b031681565b6101d3610325366004610c8f565b610815565b600854610269906001600160a01b031681565b610235600081565b6101d3610836565b600754610269906001600160a01b031681565b60065460ff166101d3565b6101a5610379366004610c8f565b610852565b60065461026990630100000090046001600160a01b031681565b6102357fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b6101a56103cd366004610c74565b6108d5565b60006103de8133610815565b6104405760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b60648201526084015b60405180910390fd5b60008381526003602090815260409182902060020180549085905582518181529182018590528251909286927fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff929081900390910190a250505050565b6000828152600360205260409020600201546104b98133610815565b6105165760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610437565b6105208383610983565b505050565b6001600160a01b03811633146105a35760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610437565b6105ad82826109dc565b5050565b60065462010000900460ff16806105d05750600654610100900460ff16155b6106425760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610437565b60065462010000900460ff16158015610667576006805462ffff001916620101001790555b600654610100900460ff16156106e55760405162461bcd60e51b815260206004820152602a60248201527f416476616e636564416363657373436f6e74726f6c3a20616c7265616479206960448201527f6e697469616c697a6564000000000000000000000000000000000000000000006064820152608401610437565b6106f0600084610a35565b61071a7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e84610a35565b6107447f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768983610a35565b61074c610a3f565b8015610520576006805462ff000019169055505050565b7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768961078e8133610815565b6107eb5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610437565b6105ad7fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be6760836109dc565b600082815260036020526040812061082d9083610aa8565b90505b92915050565b60045460009060ff16801561084d57506005544311155b905090565b60008281526003602052604090206002015461086e8133610815565b6108cb5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610437565b61052083836109dc565b7f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c476896109008133610815565b61095d5760405162461bcd60e51b815260206004820152602860248201527f416363657373436f6e74726f6c3a2073656e64657220646f6573206e6f74206860448201526761766520726f6c6560c01b6064820152608401610437565b6105ad7fdc72ed553f2544c34465af23b847953efeb813428162d767f9ba5f4013be6760835b600082815260036020526040902061099b9082610aca565b156105ad5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b60008281526003602052604090206109f49082610adf565b156105ad5760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b6105ad8282610983565b600654610100900460ff1615610a975760405162461bcd60e51b815260206004820152601c60248201527f436f6e747261637420616c726561647920696e697469616c697a6564000000006044820152606401610437565b6006805461ff001916610100179055565b6001600160a01b0381166000908152600183016020526040812054151561082d565b600061082d836001600160a01b038416610af4565b600061082d836001600160a01b038416610b43565b6000818152600183016020526040812054610b3b57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610830565b506000610830565b60008181526001830160205260408120548015610c2c576000610b67600183610ce5565b8554909150600090610b7b90600190610ce5565b9050808214610be0576000866000018281548110610b9b57610b9b610d06565b9060005260206000200154905080876000018481548110610bbe57610bbe610d06565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610bf157610bf1610d1c565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610830565b6000915050610830565b60008060408385031215610c4957600080fd5b50508035926020909101359150565b80356001600160a01b0381168114610c6f57600080fd5b919050565b600060208284031215610c8657600080fd5b61082d82610c58565b60008060408385031215610ca257600080fd5b82359150610cb260208401610c58565b90509250929050565b60008060408385031215610cce57600080fd5b610cd783610c58565b9150610cb260208401610c58565b8181038181111561083057634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220092b74b7cb310d7307180212e1aa1a15177c06e7f3b196dd329d485e517371bf64736f6c63430008140033";

type SpaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SpaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Space__factory extends ContractFactory {
  constructor(...args: SpaceConstructorParams) {
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
      Space & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Space__factory {
    return super.connect(runner) as Space__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SpaceInterface {
    return new Interface(_abi) as SpaceInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Space {
    return new Contract(address, _abi, runner) as unknown as Space;
  }
}