import ethers_js from "ethers";

export const ethers = {
  ...ethers_js,
  getSigners: async () => {
    /*
    const signers = await provider.listAccounts();
    return signers.map((address:string) => new ethers_js.Wallet(address, provider));
    */
  },
};

const getSigners = async () => {
  const [owner, superAdmin] = await ethers.getSigners();
  return { owner, superAdmin };
};

const _spc = await (async () => {
  const signers = await getSigners();
  return {
    ...signers,
    deploy: async () => {},
  };
})();

export default _spc;
