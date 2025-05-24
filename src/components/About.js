import React from 'react';
import { Box, Typography, Avatar, Stack, Chip } from '@mui/material';

const skills = [
  'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'PHP', 'Linux', 'Docker', 'Git'
];

const About = () => (
  <Box sx={{ mt: 8, mb: 8, maxWidth: 700, mx: 'auto', textAlign: 'center' }}>
    <Avatar
      alt="Darragh Kennedy"
      src="Profilepic.jpeg"
      sx={{ width: 120, height: 120, mx: 'auto', mb: 2, boxShadow: 2 }}//ss
    />
    <Typography variant="h4" fontWeight={700} gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
      Hi! I'm Darragh Kennedy, a passionate Computer Systems student with a love for programming, systems, and building useful web applications. I enjoy learning new technologies and solving real-world problems through code. My experience spans full-stack development, scripting, and cloud tools.
    </Typography>
    <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
      Skills
    </Typography>
    <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap">
      {skills.map(skill => (
        <Chip key={skill} label={skill} color="primary" variant="outlined" sx={{ mb: 1 }} />
      ))}
    </Stack>
  </Box>
);

export default About; 