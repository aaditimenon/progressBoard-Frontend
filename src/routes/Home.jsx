import React from 'react';
import { Button, Typography, Box, AppBar, Toolbar, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            GroupLeader
          </Typography>
          <Button color="inherit" component={RouterLink} to="/auth?mode=login">
            Login
          </Button>
          <Button color="inherit" component={RouterLink} to="/auth?mode=signup">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar> */}

      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="70vh"
          textAlign="center"
          gap={4}
        >
          {/* <Typography variant="h2" component="h1">
            GroupLeader
          </Typography> */}
          <Typography variant="h6" maxWidth={600}>
            Collaborate with your peers, track progress, and stay motivated with team-based leaderboards.
          </Typography>

          <Box>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/auth?mode=login"
              sx={{ mr: 2 }}
            >
              Login
            </Button>
            <Button variant="outlined" size="large" component={RouterLink} to="/auth?mode=signup">
              Sign Up
            </Button>
          </Box>
        </Box>

        <Box mt={6}>
          <Typography variant="h5" gutterBottom>🚀 Features</Typography>
          <ul style={{ fontSize: '1.1rem' }}>
            <li>Create or join groups to compete in daily productivity tasks</li>
            <li>Track group leaderboard based on task completion</li>
            <li>Collaborate with group members and view member list</li>
            <li>Log today’s tasks directly from your dashboard</li>
          </ul>
        </Box>
      </Container>
    </>
  );
}
