import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material';

const IconCardItem = ({ icon, onClick }) => (
  <Card
    sx={{
      width: 120,
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: 4
      }
    }}
  >
    <CardActionArea onClick={onClick}>
      <CardMedia
        component="img"
        height="100"
        image={icon.url}
        alt={icon.name}
        sx={{
          objectFit: 'contain',
          p: 1.5
        }}
      />
      <CardContent
        sx={{
          textAlign: 'center',
          py: 1,
          px: 0.5,
          '&:last-child': { pb: 1 }
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: 'text.primary',
            fontSize: '0.85rem',
            lineHeight: 1.2
          }}
        >
          {icon.name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default IconCardItem;
