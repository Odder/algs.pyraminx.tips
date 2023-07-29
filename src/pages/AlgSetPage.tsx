import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CaseCard from '../components/CaseCard';
import { Case } from '../data/types';
import Navigation from '../components/Navigation';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './App.css';
import ListSubheader from '@mui/material/ListSubheader';
import Filters from '../components/filters';
import { Divider } from '@mui/material';
import App from './App';
import { useParams } from 'react-router-dom';
import algSetMap from '../data/AlgSets';

export default function AlgSetPage() {
  let { set: page } = useParams() as { set: string };

  return (
    <App>
      <Box sx={{ display: 'flex' }}>
        <Navigation></Navigation>

        <Drawer
          variant="permanent"
          sx={{
            width: 300,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 300, boxSizing: 'border-box' },
            display: { xs: 'none', md: 'flex' }
          }}
        >
          <Toolbar />

          <Box sx={{ overflow: 'auto' }}>
            <List>
              <ListSubheader>Subsets</ListSubheader>
              {algSetMap[page].subsets?.map((subset: any, index: any) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton component="a" href={`/sets/${page}#subset-${subset.id}`}>
                    <ListItemText primary={subset.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <Filters></Filters>
          </Box>

        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <Container sx={{ py: 8 }} maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {algSetMap[page]?.name}
            </Typography>
            <twisty-player
              puzzle="pyraminx"
              experimental-stickering-mask-orbits={algSetMap[page]?.mask ?? "CORNERS:----,CORNERS2:----,EDGES:------"}
              alg=""
              hint-facelets="floating"
              experimental-setup-anchor="end"
              control-panel="none"
              background="none"
              camera-latitude-limit="90"
              camera-latitude="80"> </twisty-player>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
              {algSetMap[page]?.description}
            </Typography>
          </Container>
          {algSetMap[page]?.subsets?.map((subset: any, i) => (
            <Container id={`subset-${subset.id}`} sx={{ py: 8 }} maxWidth="md" key={i}>
              <Typography
                component="h3"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {subset.name}
              </Typography>
              <Grid container spacing={4}>
                {subset.cases?.map((pyraCase: Case) => (
                  <Grid item xs={12} sm={6} md={4} key={pyraCase.name + pyraCase.variant}>
                    <CaseCard case={pyraCase}></CaseCard>
                  </Grid>
                ))}
              </Grid>
            </Container>
          ))}
        </Box>
      </Box>
    </App>
  );
}