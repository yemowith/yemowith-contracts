import _spc from "./utils/_base";

type SPCType = typeof _spc;

declare global {
  var _spc: SPCType;
}

import "hardhat/types/runtime";
