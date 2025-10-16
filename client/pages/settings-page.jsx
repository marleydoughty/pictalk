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
  Avatar,
  Chip,
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SpeedIcon from '@mui/icons-material/Speed';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import BottomNavBar from '../components/bottom-nav-bar';
import decodeToken from '../lib/decode-token';

export default function SettingsPage() {
  const [username, setUsername] = useState('');
  const [speechRate, setSpeechRate] = useState(0.9);
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [clearDialogOpen, setClearDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      const userObj = decodeToken(token);
      setUsername(userObj.username);
    }

    // Load preferences
    const savedRate = localStorage.getItem('speechRate');
    const savedAutoSpeak = localStorage.getItem('autoSpeak');
    if (savedRate) setSpeechRate(parseFloat(savedRate));
    if (savedAutoSpeak) setAutoSpeak(savedAutoSpeak === 'true');
  }, []);

  const handleSignOut = () => {
    window.localStorage.removeItem('token');
    navigate('/login');
  };

  const handleOpenClearDialog = () => {
    setClearDialogOpen(true);
  };

  const handleCloseClearDialog = () => {
    setClearDialogOpen(false);
  };

  const handleConfirmClear = () => {
    localStorage.removeItem('recentIcons');
    setClearDialogOpen(false);
  };

  const handleSpeechRateChange = event => {
    const newRate = parseFloat(event.target.value);
    setSpeechRate(newRate);
    localStorage.setItem('speechRate', newRate.toString());
  };

  const handleAutoSpeakChange = event => {
    const newValue = event.target.checked;
    setAutoSpeak(newValue);
    localStorage.setItem('autoSpeak', newValue.toString());
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(109.6deg, rgba(204, 228, 247, 1) 11.2%, rgba(237, 246, 250, 1) 100.2%)',
        paddingTop: 3,
        paddingBottom: '80px'
      }}
    >
      <Container maxWidth="sm">
        <Card elevation={3} sx={{ mb: 2 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ mb: 4, fontWeight: 600 }}
            >
              Settings
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}
              >
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                    background:
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                >
                  <PersonIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="overline" color="text.secondary">
                    Account
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {username}
                  </Typography>
                </Box>
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
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ mb: 3 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}
              >
                <VolumeUpIcon color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  SPEECH SETTINGS
                </Typography>
              </Box>

              <List sx={{ pl: 4 }}>
                <ListItem
                  sx={{ px: 0, flexDirection: 'column', alignItems: 'stretch' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      mb: 1
                    }}
                  >
                    <SpeedIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2">Speech Speed</Typography>
                    <Chip
                      label={`${speechRate}x`}
                      size="small"
                      sx={{ ml: 'auto' }}
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                  <input
                    type="range"
                    min="0.5"
                    max="1.5"
                    step="0.1"
                    value={speechRate}
                    onChange={handleSpeechRateChange}
                    style={{ width: '100%' }}
                  />
                </ListItem>

                <ListItem sx={{ px: 0 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={autoSpeak}
                        onChange={handleAutoSpeakChange}
                        color="primary"
                      />
                    }
                    label="Auto-speak when adding to sentence"
                  />
                </ListItem>
              </List>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ mb: 3 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}
              >
                <DeleteSweepIcon color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  DATA
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pl: 4
                }}
              >
                <Typography variant="body2">Recently Used Icons</Typography>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  startIcon={<DeleteSweepIcon />}
                  onClick={handleOpenClearDialog}
                >
                  Clear
                </Button>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* About Section */}
            <Box>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}
              >
                <HelpOutlineIcon color="primary" />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  ABOUT
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ pl: 4, mb: 2 }}>
                All of the icons used in this application were sourced from{' '}
                <a
                  href="https://flaticon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#667eea' }}
                >
                  Flaticon
                </a>
                .
              </Typography>

              <Box sx={{ pl: 4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip label="v1.0.0" size="small" variant="outlined" />
                <Chip
                  label="PicTalk"
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>

      <BottomNavBar />

      <Dialog
        open={clearDialogOpen}
        onClose={handleCloseClearDialog}
        PaperProps={{
          sx: {
            borderRadius: 2,
            minWidth: 300
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 600 }}>Clear Recently Used?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This will remove all icons from your recently used list. This action
            cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 0 }}>
          <Button onClick={handleCloseClearDialog} color="inherit">
            Cancel
          </Button>
          <Button
            onClick={handleConfirmClear}
            variant="contained"
            color="error"
            startIcon={<DeleteSweepIcon />}
          >
            Clear
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
