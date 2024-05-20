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
} from "./common";

export declare namespace GatewaysManagement {
  export type NodeStruct = { nodeAddress: AddressLike; nodeName: string };

  export type NodeStructOutput = [nodeAddress: string, nodeName: string] & {
    nodeAddress: string;
    nodeName: string;
  };
}

export interface GatewaysManagementInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADMIN_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "LOCKER_ROLE"
      | "PAUSER_ROLE"
      | "SUPER_ADMIN_ROLE"
      | "addNode"
      | "addProvider"
      | "getOwner"
      | "getProviderNodes"
      | "getProviders"
      | "getRoleAdmin"
      | "hasRole"
      | "isAdmin"
      | "isLocked"
      | "isPaused"
      | "providerList"
      | "providers"
      | "supportsInterface"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AccessibleInitialized"
      | "AdminStatusChanged"
      | "Locked"
      | "NodeAdded"
      | "OwnerChanged"
      | "Paused"
      | "ProviderAdded"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "StatusableInitialized"
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
    functionFragment: "LOCKER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SUPER_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addNode",
    values: [AddressLike, AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addProvider",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getProviderNodes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProviders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isLocked", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "providerList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "providers",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOCKER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SUPER_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addNode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProviderNodes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProviders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isLocked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "providerList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "providers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
}

export namespace AccessibleInitializedEvent {
  export type InputTuple = [owner: AddressLike];
  export type OutputTuple = [owner: string];
  export interface OutputObject {
    owner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AdminStatusChangedEvent {
  export type InputTuple = [admin: AddressLike, status: boolean];
  export type OutputTuple = [admin: string, status: boolean];
  export interface OutputObject {
    admin: string;
    status: boolean;
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

export namespace NodeAddedEvent {
  export type InputTuple = [
    providerAddress: AddressLike,
    nodeAddress: AddressLike,
    nodeName: string
  ];
  export type OutputTuple = [
    providerAddress: string,
    nodeAddress: string,
    nodeName: string
  ];
  export interface OutputObject {
    providerAddress: string;
    nodeAddress: string;
    nodeName: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnerChangedEvent {
  export type InputTuple = [oldOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [oldOwner: string, newOwner: string];
  export interface OutputObject {
    oldOwner: string;
    newOwner: string;
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

export namespace ProviderAddedEvent {
  export type InputTuple = [providerAddress: AddressLike, providerName: string];
  export type OutputTuple = [providerAddress: string, providerName: string];
  export interface OutputObject {
    providerAddress: string;
    providerName: string;
  }
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

export namespace StatusableInitializedEvent {
  export type InputTuple = [owner: AddressLike];
  export type OutputTuple = [owner: string];
  export interface OutputObject {
    owner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SuperAdminChangedEvent {
  export type InputTuple = [
    oldSuperAdmin: AddressLike,
    newSuperAdmin: AddressLike
  ];
  export type OutputTuple = [oldSuperAdmin: string, newSuperAdmin: string];
  export interface OutputObject {
    oldSuperAdmin: string;
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

export interface GatewaysManagement extends BaseContract {
  connect(runner?: ContractRunner | null): GatewaysManagement;
  waitForDeployment(): Promise<this>;

  interface: GatewaysManagementInterface;

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

  LOCKER_ROLE: TypedContractMethod<[], [string], "view">;

  PAUSER_ROLE: TypedContractMethod<[], [string], "view">;

  SUPER_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  addNode: TypedContractMethod<
    [providerAddress: AddressLike, nodeAddress: AddressLike, nodeName: string],
    [void],
    "nonpayable"
  >;

  addProvider: TypedContractMethod<
    [providerAddress: AddressLike, providerName: string],
    [void],
    "nonpayable"
  >;

  getOwner: TypedContractMethod<[], [string], "view">;

  getProviderNodes: TypedContractMethod<
    [providerAddress: AddressLike],
    [GatewaysManagement.NodeStructOutput[]],
    "view"
  >;

  getProviders: TypedContractMethod<[], [string[]], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isAdmin: TypedContractMethod<[user: AddressLike], [boolean], "view">;

  isLocked: TypedContractMethod<[], [boolean], "view">;

  isPaused: TypedContractMethod<[], [boolean], "view">;

  providerList: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  providers: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
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
    nameOrSignature: "LOCKER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PAUSER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "SUPER_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addNode"
  ): TypedContractMethod<
    [providerAddress: AddressLike, nodeAddress: AddressLike, nodeName: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addProvider"
  ): TypedContractMethod<
    [providerAddress: AddressLike, providerName: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getProviderNodes"
  ): TypedContractMethod<
    [providerAddress: AddressLike],
    [GatewaysManagement.NodeStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getProviders"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
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
    nameOrSignature: "providerList"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "providers"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  getEvent(
    key: "AccessibleInitialized"
  ): TypedContractEvent<
    AccessibleInitializedEvent.InputTuple,
    AccessibleInitializedEvent.OutputTuple,
    AccessibleInitializedEvent.OutputObject
  >;
  getEvent(
    key: "AdminStatusChanged"
  ): TypedContractEvent<
    AdminStatusChangedEvent.InputTuple,
    AdminStatusChangedEvent.OutputTuple,
    AdminStatusChangedEvent.OutputObject
  >;
  getEvent(
    key: "Locked"
  ): TypedContractEvent<
    LockedEvent.InputTuple,
    LockedEvent.OutputTuple,
    LockedEvent.OutputObject
  >;
  getEvent(
    key: "NodeAdded"
  ): TypedContractEvent<
    NodeAddedEvent.InputTuple,
    NodeAddedEvent.OutputTuple,
    NodeAddedEvent.OutputObject
  >;
  getEvent(
    key: "OwnerChanged"
  ): TypedContractEvent<
    OwnerChangedEvent.InputTuple,
    OwnerChangedEvent.OutputTuple,
    OwnerChangedEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "ProviderAdded"
  ): TypedContractEvent<
    ProviderAddedEvent.InputTuple,
    ProviderAddedEvent.OutputTuple,
    ProviderAddedEvent.OutputObject
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
    key: "StatusableInitialized"
  ): TypedContractEvent<
    StatusableInitializedEvent.InputTuple,
    StatusableInitializedEvent.OutputTuple,
    StatusableInitializedEvent.OutputObject
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
    "AccessibleInitialized(address)": TypedContractEvent<
      AccessibleInitializedEvent.InputTuple,
      AccessibleInitializedEvent.OutputTuple,
      AccessibleInitializedEvent.OutputObject
    >;
    AccessibleInitialized: TypedContractEvent<
      AccessibleInitializedEvent.InputTuple,
      AccessibleInitializedEvent.OutputTuple,
      AccessibleInitializedEvent.OutputObject
    >;

    "AdminStatusChanged(address,bool)": TypedContractEvent<
      AdminStatusChangedEvent.InputTuple,
      AdminStatusChangedEvent.OutputTuple,
      AdminStatusChangedEvent.OutputObject
    >;
    AdminStatusChanged: TypedContractEvent<
      AdminStatusChangedEvent.InputTuple,
      AdminStatusChangedEvent.OutputTuple,
      AdminStatusChangedEvent.OutputObject
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

    "NodeAdded(address,address,string)": TypedContractEvent<
      NodeAddedEvent.InputTuple,
      NodeAddedEvent.OutputTuple,
      NodeAddedEvent.OutputObject
    >;
    NodeAdded: TypedContractEvent<
      NodeAddedEvent.InputTuple,
      NodeAddedEvent.OutputTuple,
      NodeAddedEvent.OutputObject
    >;

    "OwnerChanged(address,address)": TypedContractEvent<
      OwnerChangedEvent.InputTuple,
      OwnerChangedEvent.OutputTuple,
      OwnerChangedEvent.OutputObject
    >;
    OwnerChanged: TypedContractEvent<
      OwnerChangedEvent.InputTuple,
      OwnerChangedEvent.OutputTuple,
      OwnerChangedEvent.OutputObject
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

    "ProviderAdded(address,string)": TypedContractEvent<
      ProviderAddedEvent.InputTuple,
      ProviderAddedEvent.OutputTuple,
      ProviderAddedEvent.OutputObject
    >;
    ProviderAdded: TypedContractEvent<
      ProviderAddedEvent.InputTuple,
      ProviderAddedEvent.OutputTuple,
      ProviderAddedEvent.OutputObject
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

    "StatusableInitialized(address)": TypedContractEvent<
      StatusableInitializedEvent.InputTuple,
      StatusableInitializedEvent.OutputTuple,
      StatusableInitializedEvent.OutputObject
    >;
    StatusableInitialized: TypedContractEvent<
      StatusableInitializedEvent.InputTuple,
      StatusableInitializedEvent.OutputTuple,
      StatusableInitializedEvent.OutputObject
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
