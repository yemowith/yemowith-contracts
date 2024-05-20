/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "SafeERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeERC20__factory>;
    getContractFactory(
      name: "Address",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Address__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Math",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Math__factory>;
    getContractFactory(
      name: "Strings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Strings__factory>;
    getContractFactory(
      name: "GatewaysManagement",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatewaysManagement__factory>;
    getContractFactory(
      name: "Space",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Space__factory>;
    getContractFactory(
      name: "BaseVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseVault__factory>;
    getContractFactory(
      name: "MainVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MainVault__factory>;
    getContractFactory(
      name: "BaseModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseModule__factory>;
    getContractFactory(
      name: "StakeModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakeModule__factory>;
    getContractFactory(
      name: "PairsManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PairsManager__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "BaseAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseAccessControl__factory>;
    getContractFactory(
      name: "OwnableContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableContract__factory>;
    getContractFactory(
      name: "Lockable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lockable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "Statusable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Statusable__factory>;
    getContractFactory(
      name: "AppliesConcepts",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AppliesConcepts__factory>;
    getContractFactory(
      name: "BaseDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseDeployer__factory>;
    getContractFactory(
      name: "WithEncoder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WithEncoder__factory>;
    getContractFactory(
      name: "Executor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Executor__factory>;
    getContractFactory(
      name: "MultiSend",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiSend__factory>;
    getContractFactory(
      name: "MultiSendCallOnly",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MultiSendCallOnly__factory>;
    getContractFactory(
      name: "AccountsManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccountsManager__factory>;
    getContractFactory(
      name: "ContractManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContractManager__factory>;
    getContractFactory(
      name: "MinimalProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinimalProxy__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "StaticExecutionProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StaticExecutionProxy__factory>;
    getContractFactory(
      name: "ERC20TOKEN",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20TOKEN__factory>;
    getContractFactory(
      name: "WrappedToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WrappedToken__factory>;
    getContractFactory(
      name: "SimpleBaseAccessible",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleBaseAccessible__factory>;

    getContractAt(
      name: "IERC1155Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "SafeERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeERC20>;
    getContractAt(
      name: "Address",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Address>;
    getContractAt(
      name: "ERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Math",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Math>;
    getContractAt(
      name: "Strings",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Strings>;
    getContractAt(
      name: "GatewaysManagement",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.GatewaysManagement>;
    getContractAt(
      name: "Space",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Space>;
    getContractAt(
      name: "BaseVault",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseVault>;
    getContractAt(
      name: "MainVault",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MainVault>;
    getContractAt(
      name: "BaseModule",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseModule>;
    getContractAt(
      name: "StakeModule",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.StakeModule>;
    getContractAt(
      name: "PairsManager",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.PairsManager>;
    getContractAt(
      name: "AccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "BaseAccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseAccessControl>;
    getContractAt(
      name: "OwnableContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableContract>;
    getContractAt(
      name: "Lockable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Lockable>;
    getContractAt(
      name: "Pausable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "Statusable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Statusable>;
    getContractAt(
      name: "AppliesConcepts",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AppliesConcepts>;
    getContractAt(
      name: "BaseDeployer",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseDeployer>;
    getContractAt(
      name: "WithEncoder",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.WithEncoder>;
    getContractAt(
      name: "Executor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Executor>;
    getContractAt(
      name: "MultiSend",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiSend>;
    getContractAt(
      name: "MultiSendCallOnly",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MultiSendCallOnly>;
    getContractAt(
      name: "AccountsManager",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AccountsManager>;
    getContractAt(
      name: "ContractManager",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ContractManager>;
    getContractAt(
      name: "MinimalProxy",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MinimalProxy>;
    getContractAt(
      name: "Proxy",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "StaticExecutionProxy",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.StaticExecutionProxy>;
    getContractAt(
      name: "ERC20TOKEN",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20TOKEN>;
    getContractAt(
      name: "WrappedToken",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.WrappedToken>;
    getContractAt(
      name: "SimpleBaseAccessible",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleBaseAccessible>;

    deployContract(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "SafeERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SafeERC20>;
    deployContract(
      name: "Address",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Address>;
    deployContract(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "Math",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Math>;
    deployContract(
      name: "Strings",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Strings>;
    deployContract(
      name: "GatewaysManagement",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GatewaysManagement>;
    deployContract(
      name: "Space",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Space>;
    deployContract(
      name: "BaseVault",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseVault>;
    deployContract(
      name: "MainVault",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MainVault>;
    deployContract(
      name: "BaseModule",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseModule>;
    deployContract(
      name: "StakeModule",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.StakeModule>;
    deployContract(
      name: "PairsManager",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PairsManager>;
    deployContract(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "BaseAccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseAccessControl>;
    deployContract(
      name: "OwnableContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OwnableContract>;
    deployContract(
      name: "Lockable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lockable>;
    deployContract(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Pausable>;
    deployContract(
      name: "Statusable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Statusable>;
    deployContract(
      name: "AppliesConcepts",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AppliesConcepts>;
    deployContract(
      name: "BaseDeployer",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseDeployer>;
    deployContract(
      name: "WithEncoder",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.WithEncoder>;
    deployContract(
      name: "Executor",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Executor>;
    deployContract(
      name: "MultiSend",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiSend>;
    deployContract(
      name: "MultiSendCallOnly",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiSendCallOnly>;
    deployContract(
      name: "AccountsManager",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccountsManager>;
    deployContract(
      name: "ContractManager",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ContractManager>;
    deployContract(
      name: "MinimalProxy",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MinimalProxy>;
    deployContract(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Proxy>;
    deployContract(
      name: "StaticExecutionProxy",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.StaticExecutionProxy>;
    deployContract(
      name: "ERC20TOKEN",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20TOKEN>;
    deployContract(
      name: "WrappedToken",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.WrappedToken>;
    deployContract(
      name: "SimpleBaseAccessible",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SimpleBaseAccessible>;

    deployContract(
      name: "IERC1155Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20Permit",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Permit>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "SafeERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SafeERC20>;
    deployContract(
      name: "Address",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Address>;
    deployContract(
      name: "ERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "Math",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Math>;
    deployContract(
      name: "Strings",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Strings>;
    deployContract(
      name: "GatewaysManagement",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.GatewaysManagement>;
    deployContract(
      name: "Space",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Space>;
    deployContract(
      name: "BaseVault",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseVault>;
    deployContract(
      name: "MainVault",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MainVault>;
    deployContract(
      name: "BaseModule",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseModule>;
    deployContract(
      name: "StakeModule",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.StakeModule>;
    deployContract(
      name: "PairsManager",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.PairsManager>;
    deployContract(
      name: "AccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "BaseAccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseAccessControl>;
    deployContract(
      name: "OwnableContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.OwnableContract>;
    deployContract(
      name: "Lockable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lockable>;
    deployContract(
      name: "Pausable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Pausable>;
    deployContract(
      name: "Statusable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Statusable>;
    deployContract(
      name: "AppliesConcepts",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AppliesConcepts>;
    deployContract(
      name: "BaseDeployer",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseDeployer>;
    deployContract(
      name: "WithEncoder",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.WithEncoder>;
    deployContract(
      name: "Executor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Executor>;
    deployContract(
      name: "MultiSend",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiSend>;
    deployContract(
      name: "MultiSendCallOnly",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MultiSendCallOnly>;
    deployContract(
      name: "AccountsManager",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccountsManager>;
    deployContract(
      name: "ContractManager",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ContractManager>;
    deployContract(
      name: "MinimalProxy",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MinimalProxy>;
    deployContract(
      name: "Proxy",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Proxy>;
    deployContract(
      name: "StaticExecutionProxy",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.StaticExecutionProxy>;
    deployContract(
      name: "ERC20TOKEN",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20TOKEN>;
    deployContract(
      name: "WrappedToken",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.WrappedToken>;
    deployContract(
      name: "SimpleBaseAccessible",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SimpleBaseAccessible>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}