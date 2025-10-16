import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Avatar
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PeopleIcon from '@mui/icons-material/People';
import MoodIcon from '@mui/icons-material/Mood';
import ToysIcon from '@mui/icons-material/Toys';
import PetsIcon from '@mui/icons-material/Pets';
import CategoryIcon from '@mui/icons-material/Category';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PlaceIcon from '@mui/icons-material/Place';
import { api } from '../lib/api';

const folderConfig = {
  home: { icon: HomeIcon, color: '#667eea', bgColor: '#667eea15' },
  'self-help': {
    icon: SelfImprovementIcon,
    color: '#f093fb',
    bgColor: '#f093fb15'
  },
  food: { icon: RestaurantIcon, color: '#fa709a', bgColor: '#fa709a15' },
  people: { icon: PeopleIcon, color: '#4facfe', bgColor: '#4facfe15' },
  feelings: { icon: MoodIcon, color: '#43e97b', bgColor: '#43e97b15' },
  toys: { icon: ToysIcon, color: '#fa8bff', bgColor: '#fa8bff15' },
  animals: { icon: PetsIcon, color: '#2af598', bgColor: '#2af59815' },
  shapes: { icon: CategoryIcon, color: '#fee140', bgColor: '#fee14015' },
  clothes: { icon: CheckroomIcon, color: '#a8edea', bgColor: '#a8edea15' },
  places: { icon: PlaceIcon, color: '#ff6e7f', bgColor: '#ff6e7f15' }
};

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
      {folders.map(folder => {
        const config = folderConfig[folder.name.toLowerCase()] || {
          icon: CategoryIcon,
          color: '#667eea',
          bgColor: '#667eea15'
        };
        const IconComponent = config.icon;

        return (
          <Link
            to={`/home?folderId=${folder.folderId}`}
            key={folder.folderId}
            style={{ textDecoration: 'none' }}
          >
            <Card
              sx={{
                width: 160,
                height: 180,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8
                }
              }}
            >
              <CardActionArea
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  p: 2
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: config.bgColor,
                    mb: 2
                  }}
                >
                  <IconComponent sx={{ fontSize: 48, color: config.color }} />
                </Avatar>
                <CardContent sx={{ textAlign: 'center', py: 0, px: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      color: 'text.primary',
                      fontSize: '0.95rem',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {folder.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })}
    </>
  );
}
