import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Stack, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';

// Initial posts
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

const Blog = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    content: ''
  });

  // Load posts from localStorage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // If no posts in localStorage, initialize with default posts
      setPosts(initialPosts);
      localStorage.setItem('blogPosts', JSON.stringify(initialPosts));
    }
  }, []);

  // Check if user is admin
  useEffect(() => {
    const isAdminUser = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(isAdminUser);
  }, []);

  const handleAddPost = () => {
    const post = {
      id: Date.now(), // Use timestamp as unique ID
      title: newPost.title,
      date: new Date().toISOString().split('T')[0],
      excerpt: newPost.excerpt,
      content: newPost.content
    };
    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setOpenDialog(false);
    setNewPost({ title: '', excerpt: '', content: '' });
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  return (
    <Box sx={{ mt: 8, mb: 8, maxWidth: 800, mx: 'auto', px: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight={700}>
          Blog
        </Typography>
        {isAdmin && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => setOpenDialog(true)}
          >
            Add Post
          </Button>
        )}
      </Box>

      <Stack spacing={3}>
        {posts.map((post) => (
          <Card 
            key={post.id} 
            elevation={2}
            sx={{
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4,
                cursor: 'pointer'
              }
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box 
                  sx={{ flex: 1, cursor: 'pointer' }} 
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                    {post.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                </Box>
                {isAdmin && (
                  <IconButton 
                    color="error" 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (window.confirm('Are you sure you want to delete this post?')) {
                        handleDeletePost(post.id);
                      }
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* Add Post Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Add New Blog Post</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 2 }}>
            <TextField
              label="Title"
              fullWidth
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <TextField
              label="Excerpt"
              fullWidth
              multiline
              rows={2}
              value={newPost.excerpt}
              onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
            />
            <TextField
              label="Content"
              fullWidth
              multiline
              rows={6}
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button 
            onClick={handleAddPost} 
            variant="contained" 
            color="primary"
            disabled={!newPost.title || !newPost.excerpt || !newPost.content}
          >
            Add Post
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Blog; 