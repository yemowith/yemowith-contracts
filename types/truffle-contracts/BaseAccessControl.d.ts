/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface BaseAccessControlContract
  extends Truffle.Contract<BaseAccessControlInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<BaseAccessControlInstance>;
}

export interface AdminAdded {
  name: "AdminAdded";
  args: {
    admin: string;
    0: string;
  };
}

export interface AdminRemoved {
  name: "AdminRemoved";
  args: {
    admin: string;
    0: string;
  };
}

export interface Locked {
  name: "Locked";
  args: {
    untilBlock: BN;
    0: BN;
  };
}

export interface Paused {
  name: "Paused";
  args: {};
}

export interface RoleAdminChanged {
  name: "RoleAdminChanged";
  args: {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface RoleGranted {
  name: "RoleGranted";
  args: {
    role: string;
    account: string;
    sender: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface RoleRevoked {
  name: "RoleRevoked";
  args: {
    role: string;
    account: string;
    sender: string;
    0: string;
    1: string;
    2: string;
  };
}

export interface SuperAdminChanged {
  name: "SuperAdminChanged";
  args: {
    previousSuperAdmin: string;
    newSuperAdmin: string;
    0: string;
    1: string;
  };
}

export interface Unlocked {
  name: "Unlocked";
  args: {};
}

export interface Unpaused {
  name: "Unpaused";
  args: {};
}

type AllEvents =
  | AdminAdded
  | AdminRemoved
  | Locked
  | Paused
  | RoleAdminChanged
  | RoleGranted
  | RoleRevoked
  | SuperAdminChanged
  | Unlocked
  | Unpaused;

export interface BaseAccessControlInstance extends Truffle.ContractInstance {
  ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  DEFAULT_ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  OWNER_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  SUPER_ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  WHITELIST_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getOwner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getSuperAdmin(txDetails?: Truffle.TransactionDetails): Promise<string>;

  grantRole: {
    (
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  hasRole(
    role: string,
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  isAdmin(
    user: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  isLocked(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  isPaused(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  renounceRole: {
    (
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  revokeRole: {
    (
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setRoleAdmin: {
    (
      role: string,
      newAdminRole: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      role: string,
      newAdminRole: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      role: string,
      newAdminRole: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      role: string,
      newAdminRole: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  initialize: {
    (
      owner: string,
      superAdmin: string,
      admin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      owner: string,
      superAdmin: string,
      admin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      owner: string,
      superAdmin: string,
      admin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      owner: string,
      superAdmin: string,
      admin: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  addWhitelist: {
    (account: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  removeWhitelist: {
    (account: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

    DEFAULT_ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

    OWNER_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

    SUPER_ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

    WHITELIST_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getOwner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getSuperAdmin(txDetails?: Truffle.TransactionDetails): Promise<string>;

    grantRole: {
      (
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    hasRole(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    isAdmin(
      user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    isLocked(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    isPaused(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    renounceRole: {
      (
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    revokeRole: {
      (
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        role: string,
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setRoleAdmin: {
      (
        role: string,
        newAdminRole: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        role: string,
        newAdminRole: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        role: string,
        newAdminRole: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        role: string,
        newAdminRole: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    initialize: {
      (
        owner: string,
        superAdmin: string,
        admin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        owner: string,
        superAdmin: string,
        admin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        owner: string,
        superAdmin: string,
        admin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        owner: string,
        superAdmin: string,
        admin: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    addWhitelist: {
      (account: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    removeWhitelist: {
      (account: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        account: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
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
