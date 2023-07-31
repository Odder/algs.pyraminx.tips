export type AlgSet = {
  id: string;
  name: string;
  description: string;
  mask: string;
  subsets: Subset[];
}

export type Subset = {
  id: string;
  name: string;
  cases: Case[];
}

export type Case = {
  name: string;
  variants?: Case[];
  variant?: string;
  mask?: string;
  avoid?: boolean;
  algs: string[];
}