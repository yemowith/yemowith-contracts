interface TruffleContract {
  require(name: string): any;
}

declare const artifacts: TruffleContract;
