"use strict";

import Keypairs from "ripple-keypairs";

import Account, { Algorithms } from "../schema/Account";

type Options = {
  algorithm?: Algorithms;
  entropy?: Buffer | Uint8Array;
};

const familySeed = (options: Options = {}): Account => {
  options = Object.assign(options, {
    algorithm: options.algorithm === "ed25519" ? "ed25519" : "secp256k1"
  })
  const Familyseed = Keypairs.generateSeed(options);
  const Keypair = Keypairs.deriveKeypair(Familyseed);
  const Address = Keypairs.deriveAddress(Keypair.publicKey);
  return new Account({
    algorithm: options.algorithm,
    address: Address,
    familySeed: Familyseed,
    keypair: Keypair
  });
};

export default familySeed;
