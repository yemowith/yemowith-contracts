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

export interface BaseAccountInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "LOCKER_ROLE"
      | "PAUSER_ROLE"
      | "SUPER_ADMIN_ROLE"
      | "_accountRegistry"
      | "_encoder"
      | "getOwner"
      | "getRoleAdmin"
      | "hasRole"
      | "isAdmin"
      | "isLocked"
      | "isPaused"
      | "supportsInterface"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AccessibleInitialized"
      | "AdminStatusChanged"
      | "Locked"
      | "OwnerChanged"
      | "Paused"
      | "Received"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "StatusableInitialized"
      | "SuperAdminChanged"
      | "Unlocked"
      | "Unpaused"
  ): EventFragment;

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
    functionFragment: "_accountRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_encoder", values?: undefined): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
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
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

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
  decodeFunctionResult(
    functionFragment: "_accountRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_encoder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isLocked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
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

export namespace ReceivedEvent {
  export type InputTuple = [
    value: BigNumberish,
    sender: AddressLike,
    data: BytesLike
  ];
  export type OutputTuple = [value: bigint, sender: string, data: string];
  export interface OutputObject {
    value: bigint;
    sender: string;
    data: string;
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

export interface BaseAccount extends BaseContract {
  connect(runner?: ContractRunner | null): BaseAccount;
  waitForDeployment(): Promise<this>;

  interface: BaseAccountInterface;

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

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  LOCKER_ROLE: TypedContractMethod<[], [string], "view">;

  PAUSER_ROLE: TypedContractMethod<[], [string], "view">;

  SUPER_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  _accountRegistry: TypedContractMethod<[], [string], "view">;

  _encoder: TypedContractMethod<[], [string], "view">;

  getOwner: TypedContractMethod<[], [string], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isAdmin: TypedContractMethod<[user: AddressLike], [boolean], "view">;

  isLocked: TypedContractMethod<[], [boolean], "view">;

  isPaused: TypedContractMethod<[], [boolean], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

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
    nameOrSignature: "_accountRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_encoder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getOwner"
  ): TypedContractMethod<[], [string], "view">;
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
    key: "Received"
  ): TypedContractEvent<
    ReceivedEvent.InputTuple,
    ReceivedEvent.OutputTuple,
    ReceivedEvent.OutputObject
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

    "Received(uint256,address,bytes)": TypedContractEvent<
      ReceivedEvent.InputTuple,
      ReceivedEvent.OutputTuple,
      ReceivedEvent.OutputObject
    >;
    Received: TypedContractEvent<
      ReceivedEvent.InputTuple,
      ReceivedEvent.OutputTuple,
      ReceivedEvent.OutputObject
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
