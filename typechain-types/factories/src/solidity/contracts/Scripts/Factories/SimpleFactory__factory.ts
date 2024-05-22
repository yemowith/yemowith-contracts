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
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  SimpleFactory,
  SimpleFactoryInterface,
} from "../../../../../../src/solidity/contracts/Scripts/Factories/SimpleFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "contracts",
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
        name: "_contract",
        type: "address",
      },
    ],
    name: "createContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getContract",
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
    name: "getContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102d6806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063474da79a146100515780636ebc8c8614610081578063c3a2a93a14610094578063e2d73ccd146100a9575b600080fd5b61006461005f3660046101db565b610120565b6040516001600160a01b0390911681526020015b60405180910390f35b61006461008f3660046101db565b61014a565b61009c610179565b60405161007891906101f4565b61011e6100b7366004610241565b600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b005b6000818154811061013057600080fd5b6000918252602090912001546001600160a01b0316905081565b600080828154811061015e5761015e610271565b6000918252602090912001546001600160a01b031692915050565b606060008054806020026020016040519081016040528092919081815260200182805480156101d157602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101b3575b5050505050905090565b6000602082840312156101ed57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b818110156102355783516001600160a01b031683529284019291840191600101610210565b50909695505050505050565b60006020828403121561025357600080fd5b81356001600160a01b038116811461026a57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212209045387d90f69a015f185fcbf2c28c27af7b6b5bb375b0871563e12d403c4baa64736f6c63430008140033";

type SimpleFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleFactory__factory extends ContractFactory {
  constructor(...args: SimpleFactoryConstructorParams) {
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
      SimpleFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SimpleFactory__factory {
    return super.connect(runner) as SimpleFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleFactoryInterface {
    return new Interface(_abi) as SimpleFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SimpleFactory {
    return new Contract(address, _abi, runner) as unknown as SimpleFactory;
  }
}
