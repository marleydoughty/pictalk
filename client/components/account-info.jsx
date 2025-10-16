import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Link,
  Stack,
  Divider
} from '@mui/material';
import { api } from '../lib/api';
import Header from './header';

export default function AccountInfo({ action }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const authMethod = action === 'sign-up' ? api.signUp : api.signIn;
      const result = await authMethod({ username, password });

      if (action === 'sign-up') {
        navigate('/login');
      } else {
        localStorage.setItem('token', result.token);
        navigate('/home');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = async e => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await api.signIn({ username: 'guest', password: 'guest' });
      localStorage.setItem('token', result.token);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)'
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ flex: 1, display: 'flex', alignItems: 'center', py: 4 }}
      >
        <Card elevation={3} sx={{ width: '100%' }}>
          <Header />

          <CardContent sx={{ p: 4 }}>
            {/* Header inside the card */}

            <Typography variant="h4" component="h2" align="center" gutterBottom>
              {action === 'sign-up' ? 'Sign Up' : 'Welcome Back!'}
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                  disabled={isLoading}
                  autoComplete="username"
                />

                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={isLoading}
                  sx={{ py: 1.5 }}
                >
                  {isLoading
                    ? (
                    <CircularProgress size={24} color="inherit" />
                      )
                    : action === 'sign-up'
                      ? (
                          'Sign Up'
                        )
                      : (
                          'Login'
                        )}
                </Button>

                <Divider>OR</Divider>

                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={handleGuestLogin}
                  disabled={isLoading}
                  sx={{ py: 1.5 }}
                >
                  Login as Guest
                </Button>

                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {action === 'sign-up'
                      ? 'Already a member?'
                      : 'Need an account?'}{' '}
                    <Link
                      component={RouterLink}
                      to={action === 'sign-in' ? '/sign-up' : '/login'}
                      underline="hover"
                    >
                      {action === 'sign-in' ? 'Sign Up' : 'Login'}
                    </Link>
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
