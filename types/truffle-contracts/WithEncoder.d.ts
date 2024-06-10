/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface WithEncoderContract
  extends Truffle.Contract<WithEncoderInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<WithEncoderInstance>;
}

type AllEvents = never;

export interface WithEncoderInstance extends Truffle.ContractInstance {
  encodeData(
    data: string,
    additionalParam: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  decodeData(
    encodedData: string,
    additionalParam: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  validateEncodedData(
    encodedData: string,
    originalData: string,
    additionalParam: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  methods: {
    encodeData(
      data: string,
      additionalParam: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    decodeData(
      encodedData: string,
      additionalParam: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    validateEncodedData(
      encodedData: string,
      originalData: string,
      additionalParam: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
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