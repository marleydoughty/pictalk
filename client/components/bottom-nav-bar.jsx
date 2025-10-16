import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentValue = () => {
    if (location.pathname.includes('/folders')) return 0;
    if (location.pathname.includes('/home')) return 1;
    if (location.pathname.includes('/settings')) return 2;
    return 1;
  };

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate('/folders');
        break;
      case 1:
        navigate('/home');
        break;
      case 2:
        navigate('/settings');
        break;
      default:
        break;
    }
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 33
      }}
      elevation={3}
    >
      <BottomNavigation
        value={getCurrentValue()}
        onChange={handleChange}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          height: 48,
          '& .MuiBottomNavigationAction-root': {
            color: 'rgba(255, 255, 255, 0.8)',
            minWidth: 80
          },
          '& .Mui-selected': {
            color: 'white'
          }
        }}
      >
        <BottomNavigationAction icon={<FolderIcon sx={{ fontSize: 32 }} />} />
        <BottomNavigationAction icon={<HomeIcon sx={{ fontSize: 32 }} />} />
        <BottomNavigationAction icon={<SettingsIcon sx={{ fontSize: 32 }} />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
