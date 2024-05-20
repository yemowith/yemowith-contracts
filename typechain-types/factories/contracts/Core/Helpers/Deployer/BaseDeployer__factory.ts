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
  BaseDeployer,
  BaseDeployerInterface,
} from "../../../../../contracts/Core/Helpers/Deployer/BaseDeployer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "ContractDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "_computeAddress",
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
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "deploy",
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
        internalType: "bytes",
        name: "_bytecode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "initiateDeployment",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506103c5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063204f09eb146100465780634af63f02146100f15780637e711c0614610104575b600080fd5b6100c86100543660046102da565b8151602092830120604080517fff00000000000000000000000000000000000000000000000000000000000000818601523060601b6bffffffffffffffffffffffff191660218201526035810193909352605580840192909252805180840390920182526075909201909152805191012090565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100c86100ff3660046102da565b610117565b6100c86101123660046102da565b610192565b8151602080840191909120604080517fff00000000000000000000000000000000000000000000000000000000000000818501526bffffffffffffffffffffffff193060601b1660218201526035810185905260558082019390935281518082039093018352607501905280519101206000905b9392505050565b600061018b838360008083516000036101f25760405162461bcd60e51b815260206004820152601760248201527f42797465636f6465206c656e677468206973207a65726f00000000000000000060448201526064015b60405180910390fd5b828451602086016000f5905073ffffffffffffffffffffffffffffffffffffffff81166102615760405162461bcd60e51b815260206004820152601960248201527f4661696c656420746f206465706c6f7920636f6e74726163740000000000000060448201526064016101e9565b60405173ffffffffffffffffffffffffffffffffffffffff82169033907f33c981baba081f8fd2c52ac6ad1ea95b6814b4376640f55689051f658472968890600090a39392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156102ed57600080fd5b823567ffffffffffffffff8082111561030557600080fd5b818501915085601f83011261031957600080fd5b81358181111561032b5761032b6102ab565b604051601f8201601f19908116603f01168101908382118183101715610353576103536102ab565b8160405282815288602084870101111561036c57600080fd5b82602086016020830137600060209382018401529896909101359650505050505056fea2646970667358221220745c7cd90a58653d81f756c685e4f93401e6f2a9ed57a580682557d863c8673f64736f6c63430008140033";

type BaseDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseDeployer__factory extends ContractFactory {
  constructor(...args: BaseDeployerConstructorParams) {
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
      BaseDeployer & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BaseDeployer__factory {
    return super.connect(runner) as BaseDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseDeployerInterface {
    return new Interface(_abi) as BaseDeployerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BaseDeployer {
    return new Contract(address, _abi, runner) as unknown as BaseDeployer;
  }
}