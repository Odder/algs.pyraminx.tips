import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CardActionArea from '@mui/material/CardActionArea';

export default function SetCard({ set }: { set: any }) {
  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardActionArea sx={{ height: '100%' }} component={Link} to={`/sets/${set.id}`}>
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
          <CardHeader
            title={set.name}
            align='center'
          />
          {set.description}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}