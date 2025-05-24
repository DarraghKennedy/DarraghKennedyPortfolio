import React, { useMemo, useState, createContext, useContext } from 'react';
import { CssBaseline, Container, Box, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';
import About from './components/About';
import Blog from './components/Blog';
import ContactPage from './components/ContactPage';
import getTheme from './theme';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({ toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')) }),
    []
  );
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            transition: 'background-color 0.3s',
          }}
        >
          <Router>
            <Navbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <Projects />
                  </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </Container>
            <Box mt={8}>
              <Footer />
            </Box>
          </Router>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
