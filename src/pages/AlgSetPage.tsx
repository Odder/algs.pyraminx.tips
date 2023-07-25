import * as React from 'react';
import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CaseCard from '../components/CaseCard';
import { AlgSet, Case } from '../data/types';
import L4E from '../data/l4e';
import L3E from '../data/l3e';
import TOP_FIRST from '../data/top-first';
import Navigation from '../components/Navigation';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './App.css';
import ListSubheader from '@mui/material/ListSubheader';
import { GlobalContext } from '../contexts/globalContext';
import Filters from '../components/filters';
import { Divider } from '@mui/material';
import App from './App';
import { useParams } from 'react-router-dom';

export default function AlgSetPage() {
  const { pyraSet, filters } = useContext(GlobalContext);

  let { set: page }: any = useParams();

  const sets = {
    'l4e': L4E,
    'l3e': L3E,
    'top-first': TOP_FIRST,
  } as { [key: string]: AlgSet };

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
              {sets[page].subsets?.map((subset: any, index: any) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton component="a" href={`#subset-${subset.id}`}>
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
              {page.toUpperCase()}
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
              {pyraSet.description}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates vel enim, aut dolor sint saepe qui eius ducimus iure provident asperiores dignissimos aspernatur illum laborum rerum dolores molestiae repellendus!
            </Typography>
          </Container>
          {sets[page]?.subsets?.map((subset: any, i) => (
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
                {subset.cases?.filter((pyraCase: Case) => filters.includes('variants') || pyraCase.variant == 'solved').map((pyraCase: Case) => (
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