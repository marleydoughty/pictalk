import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container, Stack, Divider } from '@mui/material';
import IconCards from '../components/icon-cards';
import SentenceStrip from '../components/sentence-strip';
import BottomNavBar from '../components/bottom-nav-bar';
import RecentlyUsed from '../components/recently-used';

const MAX_RECENT_ICONS = 10;

export default function HomePage() {
  const [icons, setIcons] = useState([]);
  const [recentIcons, setRecentIcons] = useState([]);
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get('folderId');

  // Load recently used icons from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('recentIcons');
    if (stored) {
      try {
        setRecentIcons(JSON.parse(stored));
      } catch (err) {
        console.error('Error loading recent icons:', err);
      }
    }
  }, []);

  // Save recently used icons to localStorage whenever they change
  useEffect(() => {
    if (recentIcons.length > 0) {
      localStorage.setItem('recentIcons', JSON.stringify(recentIcons));
    }
  }, [recentIcons]);

  const onClickIcon = icon => {
    // Add to sentence
    setIcons([...icons, icon]);

    // Add to recently used (avoid duplicates, keep most recent)
    setRecentIcons(prev => {
      // Remove if already exists
      const filtered = prev.filter(i => i.iconId !== icon.iconId);
      // Add to front
      const updated = [icon, ...filtered];
      // Keep only the most recent MAX_RECENT_ICONS
      return updated.slice(0, MAX_RECENT_ICONS);
    });
  };

  const handleDelete = () => {
    const sentence = icons.filter((element, index) => {
      return index < icons.length - 1;
    });
    setIcons(sentence);
  };

  const handleClearAll = () => {
    setIcons([]);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
        paddingBottom: '80px'
      }}
    >
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Stack spacing={2}>
          <SentenceStrip
            handleDelete={handleDelete}
            handleClearAll={handleClearAll}
            words={icons}
          />

          {/* Recently Used Section */}
          {recentIcons.length > 0 && (
            <>
              <RecentlyUsed
                recentIcons={recentIcons}
                onClickIcon={onClickIcon}
              />
              <Divider sx={{ my: 1 }} />
            </>
          )}

          {/* Main Icons Grid */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.5
            }}
          >
            <IconCards onClickIcon={onClickIcon} folderId={folderId} />
          </Box>
        </Stack>
      </Container>

      <BottomNavBar />
    </Box>
  );
}
