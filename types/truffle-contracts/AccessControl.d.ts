/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface AccessControlContract
  extends Truffle.Contract<AccessControlInstance> {
  "new"(
    owner: string,
    superAdmin: string,
    meta?: Truffle.TransactionDetails
  ): Promise<AccessControlInstance>;
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

type AllEvents =
  | AdminAdded
  | AdminRemoved
  | RoleAdminChanged
  | RoleGranted
  | RoleRevoked
  | SuperAdminChanged;

export interface AccessControlInstance extends Truffle.ContractInstance {
  DEFAULT_ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  OWNER_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  SUPER_ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getOwner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getSuperAdmin(txDetails?: Truffle.TransactionDetails): Promise<string>;

  isAdmin(
    user: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  hasRole(
    role: string,
    account: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

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

  methods: {
    DEFAULT_ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

    OWNER_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

    SUPER_ADMIN_ROLE(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getOwner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    getSuperAdmin(txDetails?: Truffle.TransactionDetails): Promise<string>;

    isAdmin(
      user: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    hasRole(
      role: string,
      account: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

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
