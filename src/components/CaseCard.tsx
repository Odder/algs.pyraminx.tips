import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
        align='center'
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <AlgViewer case={c}></AlgViewer>
      </CardContent>
    </Card>
  );
}