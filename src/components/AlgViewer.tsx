import * as React from 'react'
import './AlgViewer.css'
import { TwistyPlayer } from 'cubing/twisty';
import { useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Alg from './Alg';

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
  let attached = false

  const showAlg = (alg: string) => {
    if (!attached) {
      render();
    }
    player.alg = alg;
    player.play();
  }

  const handleClick = (el: any, alg: string) => {
    showAlg(alg);
    selectText(el)
  }

  const selectText = (e: any) => {
    window?.getSelection()?.removeAllRanges();
    var range = document.createRange();
    range.selectNode(e);
    window?.getSelection()?.addRange(range);
  }

  const render = () => {
    ref.current.innerHTML = '';
    ref.current.appendChild(player);
    attached = true;
  }


  useEffect(() => {
    render();
  }, []);


  return (
    <>
      <div ref={ref}>
      </div>

      {algs.map((alg, i) => (
        <Typography gutterBottom variant='h6' component='h4' key={i} onClick={(event) => handleClick(event.target, alg)} style={{ cursor: 'pointer' }}>
          <Alg alg={alg}></Alg>
        </Typography >
      ))
      }
    </>
  );
}