import React from 'react';
import { Box, Typography } from '@mui/material';

const Resume = () => (
  <Box sx={{ mt: 8, mb: 8 }}>
    <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
      Resume
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
        title="Darragh Kennedy Resume"
        src={process.env.PUBLIC_URL + '/DarraghKennedyResume.pdf'}
        width="100%"
        height="800px"
        style={{ border: 0, maxWidth: '900px' }}
      />
    </Box>
  </Box>
);

export default Resume; 