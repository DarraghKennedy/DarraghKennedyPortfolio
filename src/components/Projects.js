import React, { useRef, useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import educoachPic from '../assets/educoachPic.png';

const projects = [
  {
    title: 'EduCoach Tutoring Platform',
    image: educoachPic,
    description: 'A tutoring platform I created for a college project.\nIt connects students with tutors, manages sessions, and provides a user-friendly interface for learning.',
    link: 'http://educoach.infinityfreeapp.com/pages/home.php'
  },
  {
    title: 'Chair',
    image: 'https://images.unsplash.com/photo-1640938776314-4d303f8a1380?auto=format&fit=crop&w=400&q=80',
    description: 'A modern chair design project.'
  },
  {
    title: 'Ut enim ad minim veniam',
    image: 'https://images.unsplash.com/photo-1641259041823-e09935369105?auto=format&fit=crop&w=400&q=80',
    description: 'A creative project with a focus on minimalism.'
  },
  {
    title: 'Project 3',
    image: 'https://via.placeholder.com/400x300',
    description: 'A sample project description.'
  }
];

function useInView(threshold = 0.2) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function ProjectCard({ project }) {
  const [ref, inView] = useInView();
  return (
    <Card
      ref={ref}
      elevation={3}
      sx={{
        transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s, opacity 0.7s, translate 0.7s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 10,
        },
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(40px)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      style={{ willChange: 'opacity, transform' }}
    >
      <CardMedia
        component="img"
        height="180"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: 'contain', background: '#f4f4f4' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line', mb: 1 }}>
          {project.description}
        </Typography>
        {project.link && (
          <Button
            variant="outlined"
            color="primary"
            href={project.link}
            target="_blank"
            rel="noopener"
            sx={{ mt: 'auto' }}
          >
            Visit Site
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

const Projects = () => (
  <section id="projects">
    <Typography variant="h4" component="h2" fontWeight={700} gutterBottom sx={{ mt: 8, mb: 4 }}>
      My Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  </section>
);

export default Projects; 