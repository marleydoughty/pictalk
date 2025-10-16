import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Link as MuiLink
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import BottomNavBar from '../components/bottom-nav-bar';
import decodeToken from '../lib/decode-token';

export default function SettingsPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const userObj = decodeToken(token);
      setUsername(userObj.username);
    }
  }, []);

  const handleSignOut = e => {
    e.preventDefault();
    window.localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(109.6deg, rgba(204, 228, 247, 1) 11.2%, rgba(237, 246, 250, 1) 100.2%)',
        paddingTop: 4,
        paddingBottom: '80px'
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          py: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: 'calc(100vh - 80px)'
        }}
      >
        <Card
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: 500
          }}
        >
          <CardContent sx={{ p: 3 }}>
            {/* Header */}
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ mb: 3, fontWeight: 600 }}
            >
              Settings
            </Typography>

            {/* Account Info Section */}
            <List>
              <ListItem
                sx={{
                  px: 0,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ListItemIcon sx={{ minWidth: 'auto' }}>
                    <PersonIcon color="primary" />
                  </ListItemIcon>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ fontWeight: 600 }}
                  >
                    ACCOUNT INFO
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    pl: 4
                  }}
                >
                  <Typography variant="body1">
                    Username: <strong>{username}</strong>
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    startIcon={<LogoutIcon />}
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </Box>
              </ListItem>

              <Divider sx={{ my: 2 }} />

              {/* About Section */}
              <ListItem
                sx={{
                  px: 0,
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 1
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ListItemIcon sx={{ minWidth: 'auto' }}>
                    <HelpOutlineIcon color="primary" />
                  </ListItemIcon>
                  <Typography
                    variant="h6"
                    component="h4"
                    sx={{ fontWeight: 600 }}
                  >
                    ABOUT
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ pl: 4 }}>
                  All of the icons used in this application were sourced from{' '}
                  <MuiLink
                    href="https://flaticon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    Flaticon
                  </MuiLink>
                  . Click the link to explore their website or visit
                  www.flaticon.com
                </Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Container>

      <BottomNavBar />
    </Box>
  );
}
