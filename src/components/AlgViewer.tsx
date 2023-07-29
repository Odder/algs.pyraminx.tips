import * as React from 'react'
import './AlgViewer.css'
import { TwistyPlayer } from 'cubing/twisty';
import { useEffect, useRef, useState } from 'react';
import Typography from '@mui/material/Typography';
import Alg from './Alg';
import { Case } from '../data/types';

export default function AlgViewer({ case: pyraCase }: { case: Case }) {
  const ref = useRef<any>(null);
  const [player, setPlayer] = useState(null as any);

  const showAlg = (alg: string) => {
    player.alg = alg;
    player.play();
  }

  const handleShowAlg = (el: any, alg: string) => {
    showAlg(alg);
    selectText(el);
    setTimeout(() => {
      player.timestamp = 0;
    }, 15000);
  }

  const selectText = (e: any) => {
    window?.getSelection()?.removeAllRanges();
    var range = document.createRange();
    range.selectNode(e);
    window?.getSelection()?.addRange(range);
  }

  useEffect(() => {
    if (!player) return;
    ref.current.innerHTML = '';
    ref.current.appendChild(player);
  }, [player]);

  useEffect(() => {
    const player = new TwistyPlayer({
      puzzle: "pyraminx",
      experimentalStickeringMaskOrbits: pyraCase.mask ?? "CORNERS:----,CORNERS2:----,EDGES:------",
      alg: pyraCase.algs[0],
      hintFacelets: "floating",
      experimentalSetupAnchor: "end",
      controlPanel: "none",
      background: "none",
      cameraLatitudeLimit: 90,
      cameraLatitude: 80
    });

    let callback: any;
    player.experimentalModel.coarseTimelineInfo.addFreshListener(async (info) => {
      if (info.atEnd && !info.atStart && info.playing === false) {
        if (callback) {
          clearTimeout(callback);
        }
        callback = () => {
          player.timestamp = 0;
        }
        setTimeout(callback, 700);
      }
    });

    setPlayer(player);
  }, []);


  return (
    <>
      <div ref={ref}>
      </div>

      {pyraCase.algs.map((alg, i) => (
        <Typography gutterBottom variant='h6' component='h4' key={i} onClick={(event) => handleShowAlg(event.target, alg)} style={{ cursor: 'pointer' }}>
          <Alg alg={alg}></Alg>
        </Typography >
      ))
      }
    </>
  );
}