/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { StakeModule, StakeModuleInterface } from "../StakeModule";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_stakingToken",
        type: "address",
        internalType: "contract IERC20",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "LOCKER_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "PAUSER_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "SUPER_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOwner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getStakedBalance",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isAdmin",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isLocked",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isPaused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "stake",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "stakedBalances",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "stakingToken",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalStaked",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "unstake",
    inputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AccessibleInitialized",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AdminStatusChanged",
    inputs: [
      {
        name: "admin",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "status",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Locked",
    inputs: [
      {
        name: "untilBlock",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnerChanged",
    inputs: [
      {
        name: "oldOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "previousAdminRole",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "newAdminRole",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Staked",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StatusableInitialized",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SuperAdminChanged",
    inputs: [
      {
        name: "oldSuperAdmin",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newSuperAdmin",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unlocked",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unstaked",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50604051610935380380610935833981016040819052602c91605e565b60008054336001600160a01b031991821617909155600780549091166001600160a01b0392909216919091179055608c565b600060208284031215606f57600080fd5b81516001600160a01b0381168114608557600080fd5b9392505050565b61089a8061009b6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063817b1cd2116100a2578063a4e2d63411610071578063a4e2d63414610261578063a694fc3a14610269578063b187bd261461027c578063e63ab1e914610287578063f3621367146102ae57600080fd5b8063817b1cd21461022c578063893d20e81461023557806391d1485414610246578063a217fddf1461025957600080fd5b80632e17de78116100de5780632e17de781461019c5780633a02a42d146101b15780634460bdd6146101da57806372f702f31461020157600080fd5b806301ffc9a7146101105780631460fa8714610138578063248a9ca31461016657806324d7806c14610189575b600080fd5b61012361011e366004610760565b6102d5565b60405190151581526020015b60405180910390f35b6101586101463660046107a6565b60096020526000908152604090205481565b60405190815260200161012f565b6101586101743660046107c1565b60009081526006602052604090206002015490565b6101236101973660046107a6565b61030c565b6101af6101aa3660046107c1565b610343565b005b6101586101bf3660046107a6565b6001600160a01b031660009081526009602052604090205490565b6101587f7613a25ecc738585a232ad50a301178f12b3ba8887d13e138b523c4269c4768981565b600754610214906001600160a01b031681565b6040516001600160a01b03909116815260200161012f565b61015860085481565b6000546001600160a01b0316610214565b6101236102543660046107da565b610524565b610158600081565b61012361055c565b6101af6102773660046107c1565b610578565b60055460ff16610123565b6101587f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b6101587faf9a8bb3cbd6b84fbccefa71ff73e26e798553c6914585a84886212a46a9027981565b60006001600160e01b031982166301ffc9a760e01b148061030657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6001600160a01b03811660009081526002602052604081205460ff16806103065750506001546001600160a01b0390811691161490565b600061034f81336106f4565b600082116103a45760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f7420756e7374616b65203020746f6b656e7300000000000000000060448201526064015b60405180910390fd5b336000908152600960205260409020548211156103fa5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b604482015260640161039b565b336000908152600960205260408120805484929061041990849061081c565b925050819055508160086000828254610432919061081c565b909155505060075460405163a9059cbb60e01b8152336004820152602481018490526001600160a01b039091169063a9059cbb906044016020604051808303816000875af1158015610488573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ac919061082f565b6104ea5760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b604482015260640161039b565b60405182815233907f0f5bb82176feb1b5e747e28471aa92156a04d9f3ab9f45f28e2d704232b93f75906020015b60405180910390a25050565b600082815260066020526040812061055590836001600160a01b038116600090815260018301602052604081205415155b9392505050565b60035460009060ff16801561057357506004544311155b905090565b600061058481336106f4565b600082116105cc5760405162461bcd60e51b815260206004820152601560248201527443616e6e6f74207374616b65203020746f6b656e7360581b604482015260640161039b565b6007546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610623573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610647919061082f565b6106855760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b604482015260640161039b565b33600090815260096020526040812080548492906106a4908490610851565b9250508190555081600860008282546106bd9190610851565b909155505060405182815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d90602001610518565b6106fe8282610524565b61075c5760405162461bcd60e51b815260206004820152602960248201527f416363657373436f6e74726f6c3a206163636f756e7420646f6573206e6f74206044820152686861766520726f6c6560b81b606482015260840161039b565b5050565b60006020828403121561077257600080fd5b81356001600160e01b03198116811461055557600080fd5b80356001600160a01b03811681146107a157600080fd5b919050565b6000602082840312156107b857600080fd5b6105558261078a565b6000602082840312156107d357600080fd5b5035919050565b600080604083850312156107ed57600080fd5b823591506107fd6020840161078a565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561030657610306610806565b60006020828403121561084157600080fd5b8151801515811461055557600080fd5b808201808211156103065761030661080656fea2646970667358221220f8270f0f22ad50e097e19b7288dedf284a1bd7703489ca7a46df0b91027ad58764736f6c63430008190033";

type StakeModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakeModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakeModule__factory extends ContractFactory {
  constructor(...args: StakeModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _stakingToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_stakingToken, overrides || {});
  }
  override deploy(
    _stakingToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_stakingToken, overrides || {}) as Promise<
      StakeModule & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): StakeModule__factory {
    return super.connect(runner) as StakeModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakeModuleInterface {
    return new Interface(_abi) as StakeModuleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): StakeModule {
    return new Contract(address, _abi, runner) as unknown as StakeModule;
  }
}
