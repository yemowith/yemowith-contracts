/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  WithEncoder,
  WithEncoderInterface,
} from "../../../../../../../src/solidity/contracts/Core/Objective/Binders/WithEncoder";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedData",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "additionalParam",
        type: "bytes32",
      },
    ],
    name: "decodeData",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "additionalParam",
        type: "bytes32",
      },
    ],
    name: "encodeData",
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
        internalType: "bytes",
        name: "encodedData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "originalData",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "additionalParam",
        type: "bytes32",
      },
    ],
    name: "validateEncodedData",
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
] as const;

export class WithEncoder__factory {
  static readonly abi = _abi;
  static createInterface(): WithEncoderInterface {
    return new Interface(_abi) as WithEncoderInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): WithEncoder {
    return new Contract(address, _abi, runner) as unknown as WithEncoder;
  }
}
