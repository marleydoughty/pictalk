import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import IconCardItem from './icon-card-item';
import HistoryIcon from '@mui/icons-material/History';

const RecentlyUsed = ({ recentIcons, onClickIcon }) => {
  if (recentIcons.length === 0) return null;

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 2,
        boxShadow: 1
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 2
        }}
      >
        <HistoryIcon color="primary" />
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            color: 'text.primary'
          }}
        >
          Recently Used
        </Typography>
        <Chip
          label={recentIcons.length}
          size="small"
          color="primary"
          sx={{ ml: 'auto' }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1.5,
          justifyContent: 'flex-start'
        }}
      >
        {recentIcons.map(icon => (
          <Box
            key={`recent-${icon.iconId}-${Date.now()}`}
            onClick={() => onClickIcon(icon)}
          >
            <IconCardItem icon={icon} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecentlyUsed;
