import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../App';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 700 }}
          component={RouterLink}
          to="/"
          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
        >
          Darragh.K
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/about">About</Button>
          <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
          <Button color="inherit" component={RouterLink} to="/blog">Blog</Button>
          <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
          <Button color="inherit" component={RouterLink} to="/resume">Resume</Button>
        </Box>
        <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
          {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          <Switch
            checked={theme.palette.mode === 'dark'}
            onChange={colorMode.toggleColorMode}
            color="default"
            inputProps={{ 'aria-label': 'theme toggle' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 