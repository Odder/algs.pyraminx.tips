import { createContext, useState } from "react";
import React from "react";
import { AlgSet } from "../data/types";

const initialState = {
  algs: {
    shortnames: [] as string[],
    setShortnames: (shortnames: string[]) => { },
    moveCount: true,
    setMovecount: (moveCount: boolean) => { },
    ignoreAUF: true,
    setIgnoreAUF: (ignoreAUF: boolean) => { },
  },
  filters: [] as string[],
  setFilters: (filters: string[]) => { },
  page: '' as string,
  setPage: (page: string) => { },
  pyraSet: {} as AlgSet,
  setSet: (set: AlgSet) => { },
};


export const GlobalContext = createContext(initialState);

export default ({ children }: { children: any }) => {
  const [algShortnames, setAlgShortnames] = useState([] as string[]);
  const [algMoveCount, setAlgMoveCount] = useState(true);
  const [algIgnoreAUF, setAlgIgnoreAUF] = useState(true);
  const [filters, setFilters] = useState([] as string[]);
  const [page, setPage] = useState('L4E' as string);
  const [pyraSet, setSet] = useState({} as AlgSet);

  const state = {
    algs: {
      shortnames: algShortnames,
      setShortnames: setAlgShortnames,
      moveCount: algMoveCount,
      setMovecount: setAlgMoveCount,
      ignoreAUF: algIgnoreAUF,
      setIgnoreAUF: setAlgIgnoreAUF,
    },
    filters: filters,
    setFilters: setFilters,
    page: page,
    setPage: setPage,
    pyraSet: pyraSet,
    setSet: setSet,
  };

  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
}