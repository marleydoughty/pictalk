import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import BottomNavBar from '../components/bottom-nav-bar';
import FolderItems from '../components/folder-items';

export default function FoldersPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        paddingTop: 4,
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: 4
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: 'text.primary',
            textAlign: 'center'
          }}
        >
          Folders
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2
          }}
        >
          <FolderItems />
        </Box>
      </Container>

      <BottomNavBar />
    </Box>
  );
}
