import React from 'react';
import { Box, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/auth?mode=login');
  };

  return (
    <Box display="flex" height="150vh">
      {/* Sidebar */}
      <Drawer variant="permanent" anchor="bottom">
        <List>
          <ListItem button>
            <ListItemText primary="My Groups" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Add Group" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Join Group" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box flex={1} p={3}>
        <Typography variant="h4" mb={2}>
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="body1" mb={2}>
          Select an option from the sidebar to get started.
        </Typography>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
}
