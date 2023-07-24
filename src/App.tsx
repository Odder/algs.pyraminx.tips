import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CaseCard from './components/CaseCard';
import { AlgSet, Case } from './data/types';
import L4E from './data/l4e';
import L3E from './data/l3e';
import TOP_FIRST from './data/top-first';
import Navigation from './components/Navigation';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './App.css';
import ListSubheader from '@mui/material/ListSubheader';
import { GlobalContext } from './contexts/globalContext';
import Filters from './components/filters';
import { CssBaseline, Divider, createTheme, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      Odder{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [pyraSet, setSet] = useState({} as AlgSet);
  const [page, setPage] = useState('L4E' as string);
  const [subsets, setSubsets] = useState([] as string[]);
  const { filters, setFilters } = useContext(GlobalContext);

  const sets = {
    'L4E': L4E,
    'L3E': L3E,
    'Top First': TOP_FIRST,
  } as { [key: string]: AlgSet };

  useEffect(() => {
  }, [pyraSet]);

  useEffect(() => {
    const pyraSet = sets[page];
    if (pyraSet) {
      setSet(pyraSet);
    }
  }, [page]);

  useEffect(() => {
  }, [filters, subsets]);

  useEffect(() => {
    setSet(sets[page]);
  }, []);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Navigation setPage={setPage}></Navigation>

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
              {pyraSet.subsets?.map((subset: any, index: any) => (
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
          {pyraSet.subsets?.map((subset: any, i) => (
            <Container id={`subset-${subset.id}`} sx={{ py: 8 }} maxWidth="md" key={i}>
              <Typography
                component="h2"
                variant="h3"
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
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}