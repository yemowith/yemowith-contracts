/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../../../common";

export interface BaseFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADMIN_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "EXECUTOR_ROLE"
      | "MULTI_EXECUTOR_ROLE"
      | "OWNER_ROLE"
      | "STATIC_CALLER_ROLE"
      | "SUPER_ADMIN_ROLE"
      | "WHITELIST_ROLE"
      | "_computeAddress"
      | "addWhitelist"
      | "call"
      | "callStatic"
      | "computeContractAddress"
      | "decodeData"
      | "deploy"
      | "deployContract"
      | "encodeData"
      | "execute"
      | "getEncodedData(address,string,bytes)"
      | "getEncodedData(string,bytes)"
      | "getOwner"
      | "getSuperAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "initiateDeployment"
      | "isAdmin"
      | "isLocked"
      | "isPaused"
      | "multiExecute"
      | "removeWhitelist"
      | "renounceRole"
      | "revokeRole"
      | "setRoleAdmin"
      | "validateEncodedData"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminAdded"
      | "AdminRemoved"
      | "ContractDeployed"
      | "Locked"
      | "Paused"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "SuperAdminChanged"
      | "Unlocked"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EXECUTOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MULTI_EXECUTOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OWNER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STATIC_CALLER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SUPER_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WHITELIST_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_computeAddress",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addWhitelist",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "call",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "callStatic",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "computeContractAddress",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeData",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deployContract",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeData",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getEncodedData(address,string,bytes)",
    values: [AddressLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getEncodedData(string,bytes)",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getSuperAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateDeployment",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isLocked", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multiExecute",
    values: [AddressLike[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWhitelist",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoleAdmin",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateEncodedData",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EXECUTOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MULTI_EXECUTOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OWNER_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "STATIC_CALLER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SUPER_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WHITELIST_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_computeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "call", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "callStatic", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "computeContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decodeData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "encodeData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEncodedData(address,string,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEncodedData(string,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSuperAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initiateDeployment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isLocked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multiExecute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateEncodedData",
    data: BytesLike
  ): Result;
}

export namespace AdminAddedEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AdminRemovedEvent {
  export type InputTuple = [admin: AddressLike];
  export type OutputTuple = [admin: string];
  export interface OutputObject {
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ContractDeployedEvent {
  export type InputTuple = [
    deployer: AddressLike,
    contractAddress: AddressLike
  ];
  export type OutputTuple = [deployer: string, contractAddress: string];
  export interface OutputObject {
    deployer: string;
    contractAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LockedEvent {
  export type InputTuple = [untilBlock: BigNumberish];
  export type OutputTuple = [untilBlock: bigint];
  export interface OutputObject {
    untilBlock: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SuperAdminChangedEvent {
  export type InputTuple = [
    previousSuperAdmin: AddressLike,
    newSuperAdmin: AddressLike
  ];
  export type OutputTuple = [previousSuperAdmin: string, newSuperAdmin: string];
  export interface OutputObject {
    previousSuperAdmin: string;
    newSuperAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnlockedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BaseFactory extends BaseContract {
  connect(runner?: ContractRunner | null): BaseFactory;
  waitForDeployment(): Promise<this>;

  interface: BaseFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  EXECUTOR_ROLE: TypedContractMethod<[], [string], "view">;

  MULTI_EXECUTOR_ROLE: TypedContractMethod<[], [string], "view">;

  OWNER_ROLE: TypedContractMethod<[], [string], "view">;

  STATIC_CALLER_ROLE: TypedContractMethod<[], [string], "view">;

  SUPER_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  WHITELIST_ROLE: TypedContractMethod<[], [string], "view">;

  _computeAddress: TypedContractMethod<
    [_bytecode: BytesLike, _salt: BytesLike],
    [string],
    "view"
  >;

  addWhitelist: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  call: TypedContractMethod<
    [target: AddressLike, data: BytesLike],
    [string],
    "nonpayable"
  >;

  callStatic: TypedContractMethod<
    [target: AddressLike, data: BytesLike],
    [string],
    "view"
  >;

  computeContractAddress: TypedContractMethod<
    [bytecode: BytesLike, salt: BytesLike],
    [string],
    "view"
  >;

  decodeData: TypedContractMethod<
    [encodedData: BytesLike, additionalParam: BytesLike],
    [string],
    "view"
  >;

  deploy: TypedContractMethod<
    [_bytecode: BytesLike, _salt: BytesLike],
    [string],
    "view"
  >;

  deployContract: TypedContractMethod<
    [bytecode: BytesLike, salt: BytesLike],
    [string],
    "nonpayable"
  >;

  encodeData: TypedContractMethod<
    [data: BytesLike, additionalParam: BytesLike],
    [string],
    "view"
  >;

  execute: TypedContractMethod<
    [target: AddressLike, data: BytesLike],
    [string],
    "nonpayable"
  >;

  "getEncodedData(address,string,bytes)": TypedContractMethod<
    [target: AddressLike, signature: string, params: BytesLike],
    [[string, string]],
    "view"
  >;

  "getEncodedData(string,bytes)": TypedContractMethod<
    [signature: string, params: BytesLike],
    [string],
    "view"
  >;

  getOwner: TypedContractMethod<[], [string], "view">;

  getSuperAdmin: TypedContractMethod<[], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<
    [owner: AddressLike, superAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  initiateDeployment: TypedContractMethod<
    [_bytecode: BytesLike, _salt: BytesLike],
    [string],
    "nonpayable"
  >;

  isAdmin: TypedContractMethod<[user: AddressLike], [boolean], "view">;

  isLocked: TypedContractMethod<[], [boolean], "view">;

  isPaused: TypedContractMethod<[], [boolean], "view">;

  multiExecute: TypedContractMethod<
    [targets: AddressLike[], data: BytesLike[]],
    [string[]],
    "nonpayable"
  >;

  removeWhitelist: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  setRoleAdmin: TypedContractMethod<
    [role: BytesLike, newAdminRole: BytesLike],
    [void],
    "nonpayable"
  >;

  validateEncodedData: TypedContractMethod<
    [
      encodedData: BytesLike,
      originalData: BytesLike,
      additionalParam: BytesLike
    ],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "EXECUTOR_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MULTI_EXECUTOR_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "OWNER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "STATIC_CALLER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "SUPER_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WHITELIST_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_computeAddress"
  ): TypedContractMethod<
    [_bytecode: BytesLike, _salt: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "addWhitelist"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "call"
  ): TypedContractMethod<
    [target: AddressLike, data: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "callStatic"
  ): TypedContractMethod<
    [target: AddressLike, data: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "computeContractAddress"
  ): TypedContractMethod<
    [bytecode: BytesLike, salt: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "decodeData"
  ): TypedContractMethod<
    [encodedData: BytesLike, additionalParam: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "deploy"
  ): TypedContractMethod<
    [_bytecode: BytesLike, _salt: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "deployContract"
  ): TypedContractMethod<
    [bytecode: BytesLike, salt: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "encodeData"
  ): TypedContractMethod<
    [data: BytesLike, additionalParam: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<
    [target: AddressLike, data: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getEncodedData(address,string,bytes)"
  ): TypedContractMethod<
    [target: AddressLike, signature: string, params: BytesLike],
    [[string, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getEncodedData(string,bytes)"
  ): TypedContractMethod<
    [signature: string, params: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getSuperAdmin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [owner: AddressLike, superAdmin: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initiateDeployment"
  ): TypedContractMethod<
    [_bytecode: BytesLike, _salt: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isAdmin"
  ): TypedContractMethod<[user: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isLocked"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isPaused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "multiExecute"
  ): TypedContractMethod<
    [targets: AddressLike[], data: BytesLike[]],
    [string[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeWhitelist"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRoleAdmin"
  ): TypedContractMethod<
    [role: BytesLike, newAdminRole: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "validateEncodedData"
  ): TypedContractMethod<
    [
      encodedData: BytesLike,
      originalData: BytesLike,
      additionalParam: BytesLike
    ],
    [boolean],
    "view"
  >;

  getEvent(
    key: "AdminAdded"
  ): TypedContractEvent<
    AdminAddedEvent.InputTuple,
    AdminAddedEvent.OutputTuple,
    AdminAddedEvent.OutputObject
  >;
  getEvent(
    key: "AdminRemoved"
  ): TypedContractEvent<
    AdminRemovedEvent.InputTuple,
    AdminRemovedEvent.OutputTuple,
    AdminRemovedEvent.OutputObject
  >;
  getEvent(
    key: "ContractDeployed"
  ): TypedContractEvent<
    ContractDeployedEvent.InputTuple,
    ContractDeployedEvent.OutputTuple,
    ContractDeployedEvent.OutputObject
  >;
  getEvent(
    key: "Locked"
  ): TypedContractEvent<
    LockedEvent.InputTuple,
    LockedEvent.OutputTuple,
    LockedEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "SuperAdminChanged"
  ): TypedContractEvent<
    SuperAdminChangedEvent.InputTuple,
    SuperAdminChangedEvent.OutputTuple,
    SuperAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "Unlocked"
  ): TypedContractEvent<
    UnlockedEvent.InputTuple,
    UnlockedEvent.OutputTuple,
    UnlockedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "AdminAdded(address)": TypedContractEvent<
      AdminAddedEvent.InputTuple,
      AdminAddedEvent.OutputTuple,
      AdminAddedEvent.OutputObject
    >;
    AdminAdded: TypedContractEvent<
      AdminAddedEvent.InputTuple,
      AdminAddedEvent.OutputTuple,
      AdminAddedEvent.OutputObject
    >;

    "AdminRemoved(address)": TypedContractEvent<
      AdminRemovedEvent.InputTuple,
      AdminRemovedEvent.OutputTuple,
      AdminRemovedEvent.OutputObject
    >;
    AdminRemoved: TypedContractEvent<
      AdminRemovedEvent.InputTuple,
      AdminRemovedEvent.OutputTuple,
      AdminRemovedEvent.OutputObject
    >;

    "ContractDeployed(address,address)": TypedContractEvent<
      ContractDeployedEvent.InputTuple,
      ContractDeployedEvent.OutputTuple,
      ContractDeployedEvent.OutputObject
    >;
    ContractDeployed: TypedContractEvent<
      ContractDeployedEvent.InputTuple,
      ContractDeployedEvent.OutputTuple,
      ContractDeployedEvent.OutputObject
    >;

    "Locked(uint256)": TypedContractEvent<
      LockedEvent.InputTuple,
      LockedEvent.OutputTuple,
      LockedEvent.OutputObject
    >;
    Locked: TypedContractEvent<
      LockedEvent.InputTuple,
      LockedEvent.OutputTuple,
      LockedEvent.OutputObject
    >;

    "Paused()": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "SuperAdminChanged(address,address)": TypedContractEvent<
      SuperAdminChangedEvent.InputTuple,
      SuperAdminChangedEvent.OutputTuple,
      SuperAdminChangedEvent.OutputObject
    >;
    SuperAdminChanged: TypedContractEvent<
      SuperAdminChangedEvent.InputTuple,
      SuperAdminChangedEvent.OutputTuple,
      SuperAdminChangedEvent.OutputObject
    >;

    "Unlocked()": TypedContractEvent<
      UnlockedEvent.InputTuple,
      UnlockedEvent.OutputTuple,
      UnlockedEvent.OutputObject
    >;
    Unlocked: TypedContractEvent<
      UnlockedEvent.InputTuple,
      UnlockedEvent.OutputTuple,
      UnlockedEvent.OutputObject
    >;

    "Unpaused()": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}
