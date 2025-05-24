import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      textAlign: 'center',
      bgcolor: 'background.paper',
      background: 'linear-gradient(90deg, #7C3AED 0%, #06b6d4 100%)',
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

export default Footer; 