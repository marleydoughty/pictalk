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
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.9);
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get('folderId');

  useEffect(() => {
    const storedRecent = localStorage.getItem('recentIcons');
    const storedAutoSpeak = localStorage.getItem('autoSpeak');
    const storedSpeechRate = localStorage.getItem('speechRate');

    if (storedRecent) {
      try {
        setRecentIcons(JSON.parse(storedRecent));
      } catch (err) {
        console.error('Error loading recent icons:', err);
      }
    }

    if (storedAutoSpeak) {
      setAutoSpeak(storedAutoSpeak === 'true');
    }

    if (storedSpeechRate) {
      setSpeechRate(parseFloat(storedSpeechRate));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (recentIcons.length > 0) {
      localStorage.setItem('recentIcons', JSON.stringify(recentIcons));
    }
  }, [recentIcons]);

  const speakWord = word => {
    const textToSpeak = word.name.length === 1 ? `${word.name}.` : word.name;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = speechRate;
    window.speechSynthesis.speak(utterance);
  };

  const onClickIcon = icon => {
    setIcons([...icons, icon]);

    if (autoSpeak) {
      speakWord(icon);
    }

    setRecentIcons(prev => {
      const filtered = prev.filter(i => i.iconId !== icon.iconId);
      const updated = [icon, ...filtered];
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
