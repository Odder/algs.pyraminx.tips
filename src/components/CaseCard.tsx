import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Case } from '../data/types';
import AlgViewer from './AlgViewer';

export default function CaseCard({ case: c }: { case: Case }) {
  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {c.name}
        </Typography>
        {c.variant && <Typography align="center">variant: {c.variant}</Typography>}

        <AlgViewer algs={c.algs}></AlgViewer>
      </CardContent>
    </Card>
  );
}