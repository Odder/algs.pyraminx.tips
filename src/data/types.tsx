export type Case = {
  name: string;
  variant?: string;
  mask?: string;
  algs: string[];
}

export type AlgSet = {
  id: string;
  name: string;
  description: string;
  subsets: Subset[];
}

export type Subset = {
  id: string;
  name: string;
  cases: Case[];
}