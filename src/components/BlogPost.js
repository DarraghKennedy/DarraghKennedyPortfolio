import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@mui/material/styles';

// Initial posts (same as in Blog.js)
const initialPosts = [
  {
    id: 1,
    title: 'How I Built EduCoach: Lessons from a College Project',
    date: '2024-05-01',
    excerpt: 'A behind-the-scenes look at building a tutoring platform from scratch, the challenges faced, and what I learned.',
    content: 'Full article content here...'
  },
  {
    id: 2,
    title: 'My Favorite Tools for Productive Coding',
    date: '2024-04-15',
    excerpt: 'A rundown of the tools and extensions that help me code faster and smarter every day.',
    content: 'Full article content here...'
  },
  {
    id: 3,
    title: 'Why Every Developer Should Learn Linux',
    date: '2024-03-28',
    excerpt: "Linux skills are essential for modern developers. Here's why and how to get started.",
    content: 'Full article content here...'
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Load posts from localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    const posts = savedPosts ? JSON.parse(savedPosts) : initialPosts;
    const foundPost = posts.find(p => p.id === parseInt(id));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return (
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h5">Post not found</Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/blog')}
          sx={{ mt: 2 }}
        >
          Back to Blog
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 8, mb: 8, maxWidth: 800, mx: 'auto', px: 2 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/blog')}
        sx={{ mb: 4 }}
      >
        Back to Blog
      </Button>
      
      <Paper 
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)'
            : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
        }}
      >
        <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {post.date}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" sx={{ whiteSpace: 'pre-line', lineHeight: 1.8 }}>
            {post.content}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default BlogPost; 