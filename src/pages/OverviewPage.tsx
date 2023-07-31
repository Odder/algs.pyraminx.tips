import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navigation from '../components/Navigation';
import './App.css';
import App from './App';
import SetCard from '../components/SetCard';
import { algSets } from '../data/AlgSets';

export default function OverviewPage() {

  return (
    <App>
      <Box sx={{ display: 'flex' }}>
        <Navigation></Navigation>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Typography
              component="h3"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
            </Typography>
            <Grid container spacing={4}>
              {algSets?.map((set: any, i) => (
                <Grid item xs={12} sm={6} md={4} key={set.id}>
                  <SetCard set={set} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </App>
  );
}