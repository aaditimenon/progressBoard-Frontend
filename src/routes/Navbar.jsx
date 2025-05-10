import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
export default function Navbar() {
  try
{  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
        >
          GroupLeader
        </Typography>
        <Button color="inherit" component={RouterLink} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={RouterLink} to="/auth?mode=login">
          Login / Signup
        </Button>
      </Toolbar>
    </AppBar>
  );}
 catch (error) {
    console.error("App Error:", error);
    return <div>Error: {error.message}</div>;
  }
}
