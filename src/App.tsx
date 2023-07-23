import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CaseCard from './components/CaseCard';
import { Case } from './data/types';
import L4E from './data/l4e';
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
  const [cases, setCases] = useState([] as Case[]);
  const [pyraSet, setSet] = useState([] as Case[]);
  const [subsets, setSubsets] = useState([] as string[]);
  const { filters, setFilters } = useContext(GlobalContext);

  const sets = {
    'L4E': L4E,
    '1-flip': L4E,
  }

  const filterCases = () => {
    const newCases = filters.includes('variants') ? pyraSet : pyraSet.filter((x: Case) => x.variant == 'solved')
    setCases(newCases);
  }

  useEffect(() => {
    const newCases = pyraSet;
    setSubsets(Array.from(new Set(newCases.map((x: Case) => x.subset))));
    setCases(newCases);
    filterCases();
  }, [pyraSet]);

  useEffect(() => {
    filterCases();
  }, [filters, pyraSet, subsets]);

  useEffect(() => {
    setSet(sets['L4E']);
    setCases(sets['L4E'].filter((x: Case) => x.variant == 'solved'));
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
        <Navigation setSet={setSet}></Navigation>

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
              {subsets.map((subset: any, index: any) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton component="a" href={`#subset-${subset}`}>
                    <ListItemText primary={subset} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <Filters></Filters>
          </Box>

        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              {/* <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Just random algs
            </Typography> */}
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                This is a collection of random algs that I use for pyraminx.
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
              </Stack>
            </Container>
          </Box>
          {subsets.map((subset, i) => (
            <Container id={`subset-${subset}`} sx={{ py: 8 }} maxWidth="md" key={i}>
              <Typography
                component="h2"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {subset}
              </Typography>
              <Grid container spacing={4}>
                {cases?.filter((x: Case) => x.subset == subset)?.map((pyraCase, j) => (
                  <Grid item xs={12} sm={6} md={4} key={pyraCase.name + pyraCase.variant + filters.join('.')}>
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