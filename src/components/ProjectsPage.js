import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Button, 
  Chip,
  Stack,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  useTheme,
  Paper
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';

const projects = [
  {
    title: 'EduCoach Tutoring Platform',
    image: process.env.PUBLIC_URL + '/images/educoachPic.png',
    description: 'A tutoring platform I created for a college project.\nIt connects students with tutors, manages sessions, and provides a user-friendly interface for learning.',
    longDescription: `EduCoach is a full-stack web application built with PHP, MySQL, and JavaScript. 
    Features include:
    • User authentication and role-based access control
    • Real-time session scheduling and management
    • Interactive dashboard for both students and tutors
    • Payment integration
    • Responsive design for all devices`,
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
    category: 'Web Development',
    link: 'http://educoach.infinityfreeapp.com/pages/home.php',
    github: 'https://github.com/DarraghKennedy/CS4116_Group_1'
  }
];

const ProjectCard = ({ project, onOpenDialog }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      elevation={isHovered ? 8 : 3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        transform: isHovered ? 'translateY(-8px)' : 'none',
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)'
          : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
        '&:hover': {
          boxShadow: theme.shadows[15],
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{
          objectFit: 'cover',
          transition: 'transform 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="bold">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {project.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          size="small"
          color="primary"
          onClick={() => onOpenDialog(project)}
          startIcon={<CodeIcon />}
        >
          Learn More
        </Button>
        {project.github && (
          <IconButton
            href={project.github}
            target="_blank"
            rel="noopener"
            color="primary"
            sx={{
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          >
            <GitHubIcon />
          </IconButton>
        )}
        {project.link && (
          <IconButton
            href={project.link}
            target="_blank"
            rel="noopener"
            color="primary"
            sx={{
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.2)' },
            }}
          >
            <LaunchIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

const ProjectDialog = ({ project, open, onClose }) => {
  const theme = useTheme();

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 4,
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h4" component="div" fontWeight="bold">
          {project.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {project.category}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Box>
        <Typography variant="body1" paragraph>
          {project.longDescription}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Technologies Used
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                color="primary"
                variant="outlined"
                sx={{ m: 0.5 }}
              />
            ))}
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();

  return (
    <Box sx={{ mt: 8, mb: 8, px: 2 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
          mb: 6,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 4,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <ProjectCard
                project={project}
                onOpenDialog={setSelectedProject}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <ProjectDialog
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </Box>
  );
};

export default ProjectsPage; 