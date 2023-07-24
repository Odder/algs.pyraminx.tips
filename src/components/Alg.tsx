import * as React from 'react'
import './AlgViewer.css'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../contexts/globalContext'

type Algorithm = string;

export default function Alg({ alg }: { alg: string }) {
  const { algs: { shortnames, setShortnames, moveCount, setMovecount }, filters } = useContext(GlobalContext);
  const supportedShortnames = ['hedge-sledge', 'triggers'];

  useEffect(() => {
    setShortnames(filters.filter((filter: string) => supportedShortnames.includes(filter)));
    setMovecount(filters.includes('movecount'));
  }, [filters])

  const replaces = {
    'hedge-sledge': (alg: Algorithm): Algorithm => alg.replace(/R' L R L'/g, 'S').replace(/L R' L' R(?!['2])/g, 'H'),
    'triggers': (alg: Algorithm): Algorithm => alg.replace(/R U R'/g, 'Rt').replace(/L' U L/g, 'Lt').replace(/R U' R'/g, 'Rt\'').replace(/L' U' L/g, 'Lt\''),
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