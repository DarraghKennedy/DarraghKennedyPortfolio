import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: 'center',
        bgcolor: isDark ? 'background.paper' : 'background.paper',
        background: isDark 
          ? 'linear-gradient(90deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(90deg, #7C3AED 0%, #06b6d4 100%)',
        color: 'white',
        mt: 6,
        position: 'relative',
      }}
    >
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          mr: 1,
          animation: 'bounce 1.2s infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-8px)' },
          },
        }}
      >
        🚀
      </Box>
      <Typography variant="body2" color="inherit" component="span">
        &copy; {new Date().getFullYear()} Darragh Kennedy. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer; 