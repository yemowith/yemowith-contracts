"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSend__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "transactions",
                type: "bytes",
            },
        ],
        name: "multiSend",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x60a060405234801561001057600080fd5b50306080526080516102a961002f6000396000604f01526102a96000f3fe60806040526004361061001e5760003560e01c80638d80ff0a14610023575b600080fd5b6100366100313660046101c2565b610038565b005b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610101576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4d756c746953656e642073686f756c64206f6e6c792062652063616c6c65642060448201527f7669612064656c656761746563616c6c00000000000000000000000000000000606482015260840160405180910390fd5b805160205b8181101561018e57828101805160018201516015830151603584015160f89390931c9360609290921c8015300217929091605501600085801561015057600181146101605761016b565b6000808585888a5af1915061016b565b6000808585895af491505b508061017b573d6000803e3d6000fd5b5050806055018501945050505050610106565b505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156101d457600080fd5b813567ffffffffffffffff808211156101ec57600080fd5b818401915084601f83011261020057600080fd5b81358181111561021257610212610193565b604051601f8201601f19908116603f0116810190838211818310171561023a5761023a610193565b8160405282815287602084870101111561025357600080fd5b82602086016020830137600092810160200192909252509594505050505056fea2646970667358221220c14fd3e61318f850f8219298dab1c9e84b8e69f61ad8a9ff0498c13a64caefaf64736f6c63430008140033";
const isSuperArgs = (xs) => xs.length > 1;
class MultiSend__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.MultiSend__factory = MultiSend__factory;
MultiSend__factory.bytecode = _bytecode;
MultiSend__factory.abi = _abi;
