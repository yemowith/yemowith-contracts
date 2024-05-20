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
import type { NonPayableOverrides } from "../../common";
import type {
  MultiSendCallOnly,
  MultiSendCallOnlyInterface,
} from "../../MultiSendOnlyCall.sol/MultiSendCallOnly";

const _abi = [
  {
    type: "function",
    name: "multiSend",
    inputs: [
      {
        name: "transactions",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506101ae8061001f6000396000f3fe60806040526004361061001e5760003560e01c80638d80ff0a14610023575b600080fd5b6100366100313660046100c7565b610038565b005b805160205b818110156100ac578083015160f81c6001820184015160601c601583018501516035840186015160558501870160008560008114610082576001811461001e5761008e565b6000808585888a5af191505b508061009957600080fd5b505080605501850194505050505061003d565b505050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156100d957600080fd5b813567ffffffffffffffff808211156100f157600080fd5b818401915084601f83011261010557600080fd5b813581811115610117576101176100b1565b604051601f8201601f19908116603f0116810190838211818310171561013f5761013f6100b1565b8160405282815287602084870101111561015857600080fd5b82602086016020830137600092810160200192909252509594505050505056fea2646970667358221220da0b7ecde78f58f46c7c0e45f9533a1c98342a49011e5928fc9f9fd00d43d96a64736f6c63430008190033";

type MultiSendCallOnlyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiSendCallOnlyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiSendCallOnly__factory extends ContractFactory {
  constructor(...args: MultiSendCallOnlyConstructorParams) {
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
      MultiSendCallOnly & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MultiSendCallOnly__factory {
    return super.connect(runner) as MultiSendCallOnly__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSendCallOnlyInterface {
    return new Interface(_abi) as MultiSendCallOnlyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MultiSendCallOnly {
    return new Contract(address, _abi, runner) as unknown as MultiSendCallOnly;
  }
}
