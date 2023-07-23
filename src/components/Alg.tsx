import * as React from 'react'
import './AlgViewer.css'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../contexts/globalContext'

type Algorithm = string;

export default function Alg({ alg }: { alg: string }) {
  const { algs: { shortnames, setShortnames, moveCount, setMovecount }, filters } = useContext(GlobalContext);

  useEffect(() => {
    if (filters.includes('hedge-sledge')) {
      setShortnames(['Hedge', 'Sledge']);
    }
    setMovecount(filters.includes('movecount'));
  }, [filters])

  const replaces = {
    'Sledge': (alg: Algorithm): Algorithm => alg.replace(/R' L R L'/g, 'S'),
    'Hedge': (alg: Algorithm): Algorithm => alg.replace(/L R' L' R(?!['2])/g, 'H'),
  } as { [key: string]: (alg: Algorithm) => Algorithm };


  const manipulateAlg = (alg: string) => {
    let newAlg = alg as Algorithm;
    shortnames.map((shortname: string) => {
      newAlg = replaces[shortname](newAlg);
    });

    if (moveCount) {
      const count = alg.split(' ').length;
      newAlg += ` (${count})`;
    }

    return newAlg;
  }

  return <>
    {manipulateAlg(alg)}
  </>
}