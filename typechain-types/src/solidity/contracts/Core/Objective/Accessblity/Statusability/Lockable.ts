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
} from "../../../../../../../common";

export interface LockableInterface extends Interface {
  getFunction(nameOrSignature: "isLocked"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Locked" | "Unlocked"): EventFragment;

  encodeFunctionData(functionFragment: "isLocked", values?: undefined): string;

  decodeFunctionResult(functionFragment: "isLocked", data: BytesLike): Result;
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

export namespace UnlockedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Lockable extends BaseContract {
  connect(runner?: ContractRunner | null): Lockable;
  waitForDeployment(): Promise<this>;

  interface: LockableInterface;

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

  isLocked: TypedContractMethod<[], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "isLocked"
  ): TypedContractMethod<[], [boolean], "view">;

  getEvent(
    key: "Locked"
  ): TypedContractEvent<
    LockedEvent.InputTuple,
    LockedEvent.OutputTuple,
    LockedEvent.OutputObject
  >;
  getEvent(
    key: "Unlocked"
  ): TypedContractEvent<
    UnlockedEvent.InputTuple,
    UnlockedEvent.OutputTuple,
    UnlockedEvent.OutputObject
  >;

  filters: {
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
  };
}
