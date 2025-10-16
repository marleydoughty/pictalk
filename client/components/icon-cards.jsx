import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Alert } from '@mui/material';
import { api } from '../lib/api';
import IconCardItem from './icon-card-item';

export default function IconCards({ onClickIcon, folderId }) {
  const [icons, setIcons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    api
      .getIcons(folderId || 1)
      .then(data => {
        setIcons(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
        console.error('Error fetching icons:', err);
      });
  }, [folderId]);

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
      {icons.map(icon => (
        <IconCardItem
          icon={icon}
          onClick={() => onClickIcon(icon)}
          key={icon.iconId}
        />
      ))}
    </>
  );
}
