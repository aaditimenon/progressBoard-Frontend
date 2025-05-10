import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './routes/Navbar';
import SidebarTasks from './routes/SideBarTasks';
import Home from './routes/Home';
import Auth from './routes/Auth';
import Dashboard from './routes/Dashboard';
import GroupView from './routes/GroupView';
import { Box } from '@mui/material';
import React from 'react';
export default function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  try{
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box display="flex" flex="1">
        <Box component="main" flex="1" p={2}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Auth/>} />
            <Route path="/group/:groupId" element={<GroupView />} />
          </Routes>
        </Box>
        {/* <Box width={240} bgcolor="background.paper" borderLeft={1} borderColor="divider" p={2}>
          <SidebarTasks />
        </Box> */}
      </Box>
      <Toaster position="bottom-right" />
    </Box>
  );
} catch(error) {
      console.error("App Error:", error);
    return <div>Error: {error.message}</div>;
}
}
