import CID from "cids";
import { ethers } from "ethers";

function capitalize([first, ...rest]: string) {
  return first.toUpperCase() + rest.join("").toLowerCase();
}

function convertToKebabCase(string: string) {
  return string.replace(/\s+/g, "-").toLowerCase();
}

function splitCIDS(cids: string[]) {
  const base16cids = Array(cids.length);
  const firstParts = Array(cids.length);
  const secondParts = Array(cids.length);
  cids.forEach((elem, index) => {
    base16cids[index] = new CID(elem).toV1().toString("base16");
    firstParts[index] = `0x${base16cids[index].slice(1, 9)}`;
    secondParts[index] = `0x${base16cids[index].slice(9)}`;
  });
  return { base16cids, firstParts, secondParts };
}

function hexToString(balance: ethers.BigNumber) {
  return ethers.utils.formatEther(balance);
}

export { capitalize, convertToKebabCase, splitCIDS, hexToString };
