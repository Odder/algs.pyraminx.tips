export type Case = {
  name: string;
  variant?: string;
  setup: string;
  mask?: string;
  algs: string[];
}

export type AlgSet = {
  id: string;
  name: string;
  subsets: Subset[];
}

export type Subset = {
  id: string;
  name: string;
  cases: Case[];
}