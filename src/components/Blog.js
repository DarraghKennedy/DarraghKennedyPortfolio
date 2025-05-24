import React from 'react';
import { Box, Typography, Card, CardContent, Stack } from '@mui/material';

const posts = [
  {
    title: 'How I Built EduCoach: Lessons from a College Project',
    date: '2024-05-01',
    excerpt: 'A behind-the-scenes look at building a tutoring platform from scratch, the challenges faced, and what I learned.'
  },
  {
    title: 'My Favorite Tools for Productive Coding',
    date: '2024-04-15',
    excerpt: 'A rundown of the tools and extensions that help me code faster and smarter every day.'
  },
  {
    title: 'Why Every Developer Should Learn Linux',
    date: '2024-03-28',
    excerpt: "Linux skills are essential for modern developers. Here's why and how to get started."
  }
];

const Blog = () => (
  <Box sx={{ mt: 8, mb: 8, maxWidth: 800, mx: 'auto' }}>
    <Typography variant="h4" fontWeight={700} gutterBottom>
      Blog
    </Typography>
    <Stack spacing={3}>
      {posts.map((post, idx) => (
        <Card key={idx} elevation={2}>
          <CardContent>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
              {post.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.excerpt}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
);

export default Blog; 