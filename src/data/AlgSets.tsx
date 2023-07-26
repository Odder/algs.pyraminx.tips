import { AlgSet } from "./types";
import L3E from "./l3e";
import L4E from "./l4e";
import TOP_FIRST from "./top-first";

type AlgSetMap = { [key: string]: AlgSet };

const algSetMap = {
  l4e: L4E,
  'top-first': TOP_FIRST,
  l3e: L3E,
} as AlgSetMap;

export const algSets = Object.values(algSetMap) as AlgSet[];
export default algSetMap as AlgSetMap;