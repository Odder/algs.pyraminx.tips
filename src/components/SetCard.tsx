import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function SetCard({ set }: { set: any }) {
  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardHeader
        title={set.name}
        align='center'
      />
      <CardContent sx={{ flexGrow: 1 }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati a odit quibusdam ipsam quaerat ducimus aliquid, necessitatibus corrupti expedita at ratione? Nulla possimus fugit illum asperiores omnis tempora veniam eveniet!
      </CardContent>
      <CardActions>
        <Link to={`/sets/${set.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}