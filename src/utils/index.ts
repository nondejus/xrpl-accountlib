"use strict";

import BN from "bn.js";
import * as AddressCodec from "ripple-address-codec";
import Bip39 from "bip39";

function bytesToHex(a: number[]): string {
  return a
    .map(function(byteValue) {
      const hex = byteValue.toString(16).toUpperCase();
      return hex.length > 1 ? hex : "0" + hex;
    })
    .join("");
}

function hexToBytes(a: string): number[] {
  return new BN(a, 16).toArray(undefined, a.length / 2);
}

function bufferToHext(buffer: Buffer): string {
  return buffer.toString("hex").toUpperCase();
}

function getAlgorithmFromKey(key: string) {
  const bytes = hexToBytes(key);
  return bytes.length === 33 && bytes[0] === 0xed ? "ed25519" : "secp256k1";
}

function isValidClassicAddress(address: string): boolean {
  return AddressCodec.isValidClassicAddress(address);
}

function isValidAddress(address: string): boolean {
  return isValidClassicAddress(address);
}

function isValidSeed(seed: string): boolean {
  return AddressCodec.isValidSeed(seed);
}

function isValidMnemnic(words: string): boolean {
  return Bip39.validateMnemonic(words);
}

export {
  bytesToHex,
  hexToBytes,
  bufferToHext,
  getAlgorithmFromKey,
  isValidAddress,
  isValidClassicAddress,
  isValidSeed,
  isValidMnemnic
};
