/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { Adminable, AdminableInterface } from "../Adminable";

const _abi = [
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
] as const;

export class Adminable__factory {
  static readonly abi = _abi;
  static createInterface(): AdminableInterface {
    return new Interface(_abi) as AdminableInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Adminable {
    return new Contract(address, _abi, runner) as unknown as Adminable;
  }
}