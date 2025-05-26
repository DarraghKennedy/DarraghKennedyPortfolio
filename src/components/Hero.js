import React from 'react';
import { Box, Typography, Avatar, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TypingText from './TypingText';
import profilePic from '../assets/Profilepic.jpeg';

const Hero = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      sx={{
        py: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDark
          ? 'linear-gradient(135deg, #23232a 0%, #18181b 100%)'
          : 'linear-gradient(135deg, #7C3AED 0%, #06b6d4 100%)',
        borderRadius: 4,
        boxShadow: 3,
        mb: 6,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated floating shape */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 20, md: -40 },
          right: { xs: -60, md: -100 },
          width: { xs: 180, md: 300 },
          height: { xs: 180, md: 300 },
          zIndex: 0,
          opacity: 0.25,
          filter: 'blur(2px)',
          animation: 'floatShape 6s ease-in-out infinite',
          '@keyframes floatShape': {
            '0%, 100%': { transform: 'translateY(0) scale(1)' },
            '50%': { transform: 'translateY(30px) scale(1.08)' },
          },
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="150" cy="150" rx="140" ry="90" fill="#fff" />
        </svg>
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
        <Avatar
          alt="Darragh Kennedy"
          src={profilePic}
          sx={{
            width: 120,
            height: 120,
            boxShadow: 2,
            border: '4px solid #fff',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.08) rotate(-3deg)',
              boxShadow: 6,
            },
          }}
        />
        <Box sx={{
          opacity: 0,
          transform: 'translateY(40px)',
          animation: 'fadeSlideIn 1s 0.2s forwards',
          '@keyframes fadeSlideIn': {
            to: { opacity: 1, transform: 'none' },
          },
        }}>
          <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
            I'm Darragh Kennedy
          </Typography>
          <Typography variant="h5" color="inherit" gutterBottom>
            Computer Systems Student
          </Typography>
          <Typography variant="body1" color="inherit">
            <TypingText text="I have a passion for programming and computer systems. I love building useful web applications and learning new technologies." speed={50} />
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Hero; 