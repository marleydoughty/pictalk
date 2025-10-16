import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import { api } from '../lib/api';

export default function FolderItems() {
  const [folders, setFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getFolders()
      .then(data => {
        setFolders(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
        console.error('Error fetching folders:', err);
      });
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '200px',
          width: '100%'
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ width: '100%', px: 2 }}>
        <Alert severity="error">Error: {error}</Alert>
      </Box>
    );
  }

  return (
    <>
      {folders.map(folder => (
        <Link
          to={`/home?folderId=${folder.folderId}`}
          key={folder.folderId}
          style={{ textDecoration: 'none' }}
        >
          <Card
            sx={{
              width: 140,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 6
              }
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image="/icons/folder-icon.png"
                alt={folder.name}
                sx={{
                  objectFit: 'contain',
                  p: 2
                }}
              />
              <CardContent sx={{ textAlign: 'center', py: 1.5 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: 'text.primary',
                    fontSize: '0.9rem'
                  }}
                >
                  {folder.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </>
  );
}
