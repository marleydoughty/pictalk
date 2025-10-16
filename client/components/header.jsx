import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', py: 1.5 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 600,
              letterSpacing: '0.5px',
              color: 'white'
            }}
          >
            PicTalk
          </Typography>
          <i
            className="far fa-comment"
            style={{ fontSize: '32px', color: 'white' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
