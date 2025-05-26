import React, { useState } from 'react';
import { Box, Typography, Avatar, Stack, Chip, Paper, IconButton, Collapse } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SchoolIcon from '@mui/icons-material/School';
import profilePic from '../assets/Profilepic.jpeg';

const skills = [
  { name: 'JavaScript', icon: <CodeIcon />, category: 'Frontend' },
  { name: 'HTML', icon: <CodeIcon />, category: 'Frontend' },
  { name: 'CSS', icon: <CodeIcon />, category: 'Frontend' },
  { name: 'React', icon: <CodeIcon />, category: 'Frontend' },
  { name: 'Node.js', icon: <StorageIcon />, category: 'Backend' },
  { name: 'Java', icon: <CodeIcon />, category: 'Backend' },
  { name: 'C#', icon: <CodeIcon />, category: 'Backend' },
  { name: 'SQL', icon: <StorageIcon />, category: 'Database' },
  { name: 'PHP', icon: <CodeIcon />, category: 'Backend' },
  { name: 'Git', icon: <CodeIcon />, category: 'DevOps' }
];

const About = () => {
  const theme = useTheme();
  const [expandedSection, setExpandedSection] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleExpandClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const skillCategories = [...new Set(skills.map(skill => skill.category))];

  return (
    <Box sx={{ mt: 8, mb: 8, maxWidth: 800, mx: 'auto', px: 2 }}>
      <Paper 
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
          <Avatar
            alt="Darragh Kennedy"
            src={profilePic}
            sx={{
              width: 120,
              height: 120,
              boxShadow: 3,
              border: '4px solid',
              borderColor: 'primary.main',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1) rotate(5deg)',
              },
            }}
          />
          <Box>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              About Me
            </Typography>
            <Typography variant="subtitle1" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SchoolIcon /> Computer Systems Student
            </Typography>
          </Box>
        </Box>

        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 4,
            lineHeight: 1.8,
            opacity: 0,
            animation: 'fadeIn 1s ease-out forwards',
            '@keyframes fadeIn': {
              to: { opacity: 1 }
            }
          }}
        >
          Hi! I'm Darragh Kennedy, a passionate Computer Systems student with a love for programming, systems, and building useful web applications. I enjoy learning new technologies and solving real-world problems through code. Here are my relevant skills.
        </Typography>

        {skillCategories.map((category) => (
          <Box key={category} sx={{ mb: 3 }}>
            <Box
              onClick={() => handleExpandClick(category)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                p: 2,
                borderRadius: 2,
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                },
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                {category}
              </Typography>
              <IconButton>
                {expandedSection === category ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
            <Collapse in={expandedSection === category}>
              <Stack 
                direction="row" 
                spacing={1} 
                sx={{ 
                  p: 2,
                  flexWrap: 'wrap',
                  gap: 1,
                }}
              >
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <Chip
                      key={skill.name}
                      icon={skill.icon}
                      label={skill.name}
                      color="primary"
                      variant={hoveredSkill === skill.name ? "filled" : "outlined"}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      sx={{
                        transition: 'all 0.3s ease',
                        transform: hoveredSkill === skill.name ? 'scale(1.1)' : 'scale(1)',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          boxShadow: 3,
                        },
                      }}
                    />
                  ))}
              </Stack>
            </Collapse>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default About; 