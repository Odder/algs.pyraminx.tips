import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Case } from '../data/types';
import AlgViewer from './AlgViewer';
import CardHeader from '@mui/material/CardHeader';

export default function CaseCard({ case: c }: { case: Case }) {
  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardHeader
        title={c.name}
        subheader={c.variant}
        align='center'
      />
      <CardContent sx={{ flexGrow: 1 }}>

        <AlgViewer algs={c.algs}></AlgViewer>
      </CardContent>
    </Card>
  );
}