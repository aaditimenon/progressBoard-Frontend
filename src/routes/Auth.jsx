import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    setFormData({ username: '', email: '', password: '' });
  }, [isLogin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('isAuthenticated', 'true'); // simulate session
    navigate('/dashboard');
    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      groupIds: [],
      DayIds: []
    };

    console.log('Signup Payload:', JSON.stringify(payload, null, 2));

    // TODO: send to your backend API using fetch/axios
    // await fetch('/api/register', { method: 'POST', body: JSON.stringify(payload) })

    navigate('/dashboard');
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
      <Box component="form" onSubmit={handleSubmit} maxWidth={400} width="100%">
        <Typography variant="h5" mb={2} textAlign="center">
          {isLogin ? 'Login' : 'Sign Up'}
        </Typography>

        {!isLogin && (
          <TextField
            label="Username"
            name="username"
            fullWidth
            margin="normal"
            value={formData.username}
            onChange={handleChange}
          />
        )}
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Continue
        </Button>

        <Typography variant="body2" textAlign="center" mt={1}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Button
            variant="text"
            onClick={() => navigate(`/auth?mode=${isLogin ? 'signup' : 'login'}`)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}
