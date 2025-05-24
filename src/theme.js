import { createTheme } from '@mui/material/styles';

const accentColor = '#7C3AED'; // Vibrant purple
const fontFamily = [
  'Montserrat',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(',');

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: { main: accentColor },
            secondary: { main: '#06b6d4' },
            background: { default: '#f7f9fb', paper: '#fff' },
            text: { primary: '#18181b', secondary: '#444' },
          }
        : {
            primary: { main: accentColor },
            secondary: { main: '#06b6d4' },
            background: { default: '#18181b', paper: '#23232a' },
            text: { primary: '#f7f9fb', secondary: '#bbb' },
          }),
    },
    typography: {
      fontFamily,
      h1: { fontWeight: 800 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 700 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

export default getTheme; 