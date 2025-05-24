import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, IconButton, Alert } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
          Contact Me
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 500,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            name="name"
            required
            fullWidth
            sx={{
              transition: 'box-shadow 0.3s',
              '& .MuiInputBase-root:focus-within': {
                boxShadow: 3,
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            required
            fullWidth
            sx={{
              transition: 'box-shadow 0.3s',
              '& .MuiInputBase-root:focus-within': {
                boxShadow: 3,
              },
            }}
          />
          <TextField
            label="Message"
            name="message"
            required
            fullWidth
            multiline
            rows={4}
            sx={{
              transition: 'box-shadow 0.3s',
              '& .MuiInputBase-root:focus-within': {
                boxShadow: 3,
              },
            }}
          />
          <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }} type="submit">
            Send Message
          </Button>
          {submitted && <Alert severity="success">Message sent! (This is a demo.)</Alert>}
        </Box>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <IconButton
            color="primary"
            component="a"
            href="https://www.linkedin.com/in/darragh-kennedy-b78986250"
            target="_blank"
            rel="noopener"
            sx={{
              transition: 'transform 0.2s, color 0.2s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#0A66C2',
              },
            }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="error"
            component="a"
            href="mailto:dkennedy121314@gmail.com"
            sx={{
              transition: 'transform 0.2s, color 0.2s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#EA4335',
              },
            }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Box>
    </section>
  );
};

export default ContactPage; 