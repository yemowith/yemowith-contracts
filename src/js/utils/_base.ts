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
