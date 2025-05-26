import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, TextField, Button, Stack, IconButton, Alert } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("ZPMfzc4D5J4E1C_yJ");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSubmitted(false);

    try {
      // Send message to your email (using template_n6h486o)
      const messageToYou = {
        to_email: 'dkennedy121314@gmail.com',
        name: form.current.from_name.value,
        time: new Date().toLocaleString(),
        message: form.current.message.value
      };

      // Send auto-reply to the sender (using template_8kg364u)
      const autoReply = {
        to_email: form.current.reply_to.value,
        user_name: form.current.from_name.value,
        user_email: form.current.reply_to.value,
        user_message: form.current.message.value
      };

      // Send both emails
      const [messageResult, autoReplyResult] = await Promise.all([
        emailjs.send(
          'service_3cdjs9q',
          'template_n6h486o',
          messageToYou,
          'ZPMfzc4D5J4E1C_yJ'
        ),
        emailjs.send(
          'service_3cdjs9q',
          'template_8kg364u',
          autoReply,
          'ZPMfzc4D5J4E1C_yJ'
        )
      ]);

      if (messageResult.text === 'OK' && autoReplyResult.text === 'OK') {
        setSubmitted(true);
        form.current.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setError(false);
      }, 5000);
    }
  };

  return (
    <section id="contact">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
          Contact Me
        </Typography>
        <Box
          ref={form}
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
            name="from_name"
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
            name="reply_to"
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
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            sx={{ mt: 2 }} 
            type="submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
          {submitted && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Thank you for your message! I'll get back to you soon.
            </Alert>
          )}
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Sorry, there was an error sending your message. Please try again.
            </Alert>
          )}
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

export default Contact; 