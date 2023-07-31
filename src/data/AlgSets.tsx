import { AlgSet } from "./types";
import L3E from "./sets/l3e";
import L4E from "./sets/l4e";
import ML4E_LEFT from "./sets/ml4e-left";
import TOP_FIRST from "./sets/top-first";

type AlgSetMap = { [key: string]: AlgSet };

const algSetMap = {
  l4e: L4E,
  'ml4e-left': ML4E_LEFT,
  'top-first': TOP_FIRST,
  l3e: L3E,
} as AlgSetMap;

export const algSets = Object.values(algSetMap) as AlgSet[];
export default algSetMap as AlgSetMap;