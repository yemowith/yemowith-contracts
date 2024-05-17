import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.7.0",
      },
      {
        version: "0.6.0",
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      accounts: [
        {
          privateKey:
            "0x0123456789012345678901234567890123456789012345678901234567890123",
          balance:
            "100000000000000000000000000000000000000000000000000000000000000000",
        },
        {
          privateKey:
            "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
          balance:
            "100000000000000000000000000000000000000000000000000000000000000000",
        },
      ],
    },
  },
};

export default config;
