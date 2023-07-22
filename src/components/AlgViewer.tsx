import * as React from 'react'
import './AlgViewer.css'
import { TwistyPlayer } from 'cubing/twisty';
import { useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';

export default function AlgViewer({ algs }: { algs: string[] }) {
  const ref = useRef<any>(null);
  const player = new TwistyPlayer({
    puzzle: "pyraminx",
    alg: algs[0],
    hintFacelets: "floating",
    experimentalSetupAnchor: "end",
    controlPanel: "none",
    background: "none",
    cameraLatitudeLimit: 90,
    cameraLatitude: 80
  });

  const showAlg = (alg: string) => {
    player.alg = alg;
    player.play();
  }

  const handleClick = (el: any, alg: string) => {
    showAlg(alg);
    selectText(el)
    console.log('clicked', el)
  }

  const selectText = (e: any) => {
    window?.getSelection()?.removeAllRanges();
    var range = document.createRange();
    console.log('selecing', e)
    range.selectNode(e);
    window?.getSelection()?.addRange(range);
  }


  useEffect(() => {
    console.log('useEffect')
    ref.current.innerHTML = '';
    ref.current.appendChild(player);
  }, []);


  return (
    <>
      <div ref={ref} className='alg-viewer'>
      </div>

      {algs.map((alg, i) => (
        <Typography gutterBottom variant='h6' component='h4' key={i} onClick={(event) => handleClick(event.target, alg)} style={{ cursor: 'pointer' }}>
          {alg}
        </Typography >
      ))
      }
    </>
  );
}