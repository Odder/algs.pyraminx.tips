import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CaseCard from './components/CaseCard';
import { Case } from './data/types';
import L4E from './data/l4e';
import useMediaQuery from '@mui/material/useMediaQuery';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Odder
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const allCases = L4E;

// TODO remove, this demo shouldn't need to reset the theme.

export default function App() {
  const [cases, setCases] = useState([] as Case[]);
  const [variants, setVariants] = useState(false);
  const subsets = ['L3E', 'Last Layer', 'Flippy', 'Polish Flip', 'Separated Bar', 'Connected Bar', 'No Bar']

  React.useEffect(() => {
    setCases(allCases.filter((x: Case) => x.variant == 'solved'));
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

  const toggleVariants = () => {
    setCases(!variants ? allCases : allCases.filter((x: Case) => x.variant == 'solved'));
    setVariants(!variants);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Pyraminx algs
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
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
              <Button onClick={() => toggleVariants()} variant={variants ? 'contained' : 'outlined'}>Show variants</Button>
            </Stack>
          </Container>
        </Box>
        {subsets.map((subset, i) => (
          <Container sx={{ py: 8 }} maxWidth="md" key={i}>
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
                <Grid item xs={12} sm={6} md={4} key={pyraCase.name + pyraCase.variant}>
                  <CaseCard case={pyraCase}></CaseCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        ))}
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}