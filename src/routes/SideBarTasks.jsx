import { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

export default function SidebarTasks() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // TODO: fetch today's tasks
    setTasks([]);
  }, []);

  const addTask = async () => {
    if (!task.trim()) return;
    // TODO: post task
    setTask('');
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Today's Tasks
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="New task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button fullWidth variant="contained" sx={{ mt: 1 }} onClick={addTask}>
        Add Task
      </Button>
      <List>
        {tasks.length > 0 ? (
          tasks.map((t) => (
            <ListItem key={t.id} divider>
              <ListItemText primary={t.text} />
            </ListItem>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            No tasks for today.
          </Typography>
        )}
      </List>
    </div>
  );
}
