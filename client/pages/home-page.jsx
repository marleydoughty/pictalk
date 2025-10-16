import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container, Stack } from '@mui/material';
import IconCards from '../components/icon-cards';
import SentenceStrip from '../components/sentence-strip';
import BottomNavBar from '../components/bottom-nav-bar';

export default function HomePage() {
  const [icons, setIcons] = useState([]);
  const [searchParams] = useSearchParams();
  const folderId = searchParams.get('folderId');

  const onClickIcon = icon => {
    setIcons([...icons, icon]);
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
