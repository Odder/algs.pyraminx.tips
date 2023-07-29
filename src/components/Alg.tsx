import * as React from 'react'
import './AlgViewer.css'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../contexts/globalContext'

type Algorithm = string;

export default function Alg({ alg }: { alg: string }) {
  const { algs: { shortnames, setShortnames, moveCount, setMovecount, ignoreAUF, setIgnoreAUF }, filters } = useContext(GlobalContext);
  const supportedShortnames = ['hedge-sledge', 'triggers', 'pynotation'];

  useEffect(() => {
    setShortnames(filters.filter((filter: string) => supportedShortnames.includes(filter)));
    setMovecount(filters.includes('movecount'));
    setIgnoreAUF(filters.includes('ignore-auf'));
  }, [filters])

  const replaces = {
    'pynotation': (alg: Algorithm): Algorithm => alg
      .replace(/R' L R L'/g, 'S')
      .replace(/R' L' R L(?!['2])/g, 'S\'')
      .replace(/R L R' L'/g, 's')
      .replace(/R L' R' L(?!['2])/g, 's\'')
      .replace(/L R' L' R(?!['2])/g, 'H')
      .replace(/L R L' R'/g, 'H\'')
      .replace(/L' R' L R(?!['2])/g, 'h')
      .replace(/L' R L R'/g, 'h\'')
      .replace(/R U R'/g, 'K')
      .replace(/R U' R'/g, 'K\'')
      .replace(/R' U R(?!['2])/g, 'k')
      .replace(/R' U' R(?!['2])/g, 'k\'')
      .replace(/L' U L(?!['2])/g, 'J')
      .replace(/L' U' L(?!['2])/g, 'J\'')
      .replace(/L U L'/g, 'j')
      .replace(/L U' L'/g, 'j\'')
      .replace(/R B R'/g, 'P')
      .replace(/R B' R'/g, 'P\'')
      .replace(/R' B R(?!['2])/g, 'p')
      .replace(/R' B' R(?!['2])/g, 'p\'')
      .replace(/L' B L(?!['2])/g, 'Q')
      .replace(/L' B' L(?!['2])/g, 'Q\'')
      .replace(/L B L'/g, 'q')
      .replace(/L B' L'/g, 'q\'')
      .replace(/R U(?!['2])/g, 'F')
      .replace(/R U'/g, 'F\'')
      .replace(/R' U(?!['2])/g, 'f')
      .replace(/R' U'/g, 'f\'')
      .replace(/L' U(?!['2])/g, 'T')
      .replace(/L' U'/g, 'T\'')
      .replace(/L U(?!['2])/g, 't')
      .replace(/L U'/g, 't\'')
      .replace(/U R(?!['2])/g, 'E')
      .replace(/U R'/g, 'E\'')
      .replace(/U' R(?!['2])/g, 'e')
      .replace(/U' R'/g, 'e\'')
      .replace(/U L'/g, 'I')
      .replace(/U L(?!['2])/g, 'I\'')
      .replace(/U' L'/g, 'i')
      .replace(/U' L(?!['2])/g, 'i\'')
      .replace(/R L' B L R'/g, 'X')
      .replace(/L' R B R' L(?!['2])/g, 'X')
      .replace(/R L' B' L R'/g, 'X\'')
      .replace(/L' R B' R' L/g, 'X\''),
    'hedge-sledge': (alg: Algorithm): Algorithm => alg.replace(/R' L R L'/g, 'S').replace(/L R' L' R(?!['2])/g, 'H'),
    'triggers': (alg: Algorithm): Algorithm => alg.replace(/R U R'/g, 'Rt').replace(/L' U L(?!['2])/g, 'Lt').replace(/R U' R'/g, 'Rt\'').replace(/L' U' L(?!['2])/g, 'Lt\''),
  } as { [key: string]: (alg: Algorithm) => Algorithm };

  const manipulateAlg = (alg: string) => {
    let newAlg = alg as Algorithm;
    let countOffset = 0;

    // Ignore AUF
    if (ignoreAUF) {
      newAlg = newAlg.replace(/^(U['2]?)/m, '($1)').replace(/U['2]?$/, '') as Algorithm;
      countOffset += (alg.match(/(^U|U['2]?$)/g)?.length ?? 0);
    }

    // Replace with shortnames
    shortnames.map((shortname: string) => {
      newAlg = replaces[shortname](newAlg);
    });

    // Use double moves
    const doubleMoveRegex = /(([RLBU])([']?))\s\1/g;
    countOffset += (newAlg.match(doubleMoveRegex)?.length ?? 0);
    newAlg = newAlg.replace(doubleMoveRegex, '$22$3') as Algorithm;

    // Don't count rotations
    countOffset += (newAlg.match(/([y])[']?/g)?.length ?? 0);

    // Count moves
    if (moveCount) {
      const count = alg.split(' ').length - countOffset;
      newAlg += ` (${count})`;
    }

    return newAlg;
  }

  return <>
    {manipulateAlg(alg)}
  </>
}