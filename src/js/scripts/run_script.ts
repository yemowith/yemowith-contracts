import initSpace from "./localnode/1_init_space";
import basicGetway from "./localnode/0_basic_getway";

const availableCommands = {
  basicGetway: basicGetway,
  init: initSpace,
};

const script = async () => {
  await availableCommands.init();
};

(async () => {
  await script();
})();
