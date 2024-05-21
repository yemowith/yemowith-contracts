import _spc from "../../.archive/utils/_base";

type SPCType = typeof _spc;

declare global {
  var _spc: SPCType;
}
