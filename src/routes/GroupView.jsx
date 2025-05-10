import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import React from 'react';

export default function GroupView() {
  const { groupId } = useParams();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // TODO: fetch group members from API
    // e.g. fetch(`/api/groups/${groupId}/members`)
    //        .then(res => res.json())
    //        .then(data => setMembers(data));
    setMembers([]);
  }, [groupId]);

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Group Leaderboard
      </Typography>
      <Paper elevation={2} sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.length > 0 ? (
              members.map((m) => (
                <TableRow key={m.id} hover>
                  <TableCell>{m.name}</TableCell>
                  <TableCell align="right">{m.score}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No members yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Members
        </Typography>
        {members.length > 0 ? (
          <Box component="ul" pl={2}>
            {members.map((m) => (
              <Box component="li" key={m.id}>
                {m.name}
              </Box>
            ))}
          </Box>
        ) : (
          <Typography color="textSecondary">
            No members to display.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
