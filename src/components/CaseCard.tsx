import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Case } from '../data/types';
import AlgViewer from './AlgViewer';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function CaseCard({ case: c }: { case: Case }) {

  const title = (
    <>
      {c.name}
    </>
  );


  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardHeader
        title={title}
        align='center'
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <AlgViewer case={c}></AlgViewer>
      </CardContent>
      {c.avoid &&
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <Chip label="Avoid" color="error" size="small" icon={<PriorityHighIcon />} />
        </CardContent>
      }
    </Card>
  );
}