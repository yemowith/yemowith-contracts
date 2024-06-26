/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface LockableContract extends Truffle.Contract<LockableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<LockableInstance>;
}

export interface Locked {
  name: "Locked";
  args: {
    untilBlock: BN;
    0: BN;
  };
}

export interface Unlocked {
  name: "Unlocked";
  args: {};
}

type AllEvents = Locked | Unlocked;

export interface LockableInstance extends Truffle.ContractInstance {
  isLocked(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  methods: {
    isLocked(txDetails?: Truffle.TransactionDetails): Promise<boolean>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
