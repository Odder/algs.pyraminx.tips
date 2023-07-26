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
        <twisty-player
          puzzle="pyraminx"
          experimental-stickering-mask-orbits={set.mask ?? "CORNERS:----,CORNERS2:----,EDGES:------"}
          alg=""
          hint-facelets="floating"
          experimental-setup-anchor="end"
          control-panel="none"
          background="none"
          camera-latitude-limit="90"
          camera-latitude="80"> </twisty-player>
        {set.description}
      </CardContent>
      <CardActions>
        <Link to={`/sets/${set.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}