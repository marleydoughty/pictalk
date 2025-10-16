import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';
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

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        paddingTop: 4,
        paddingBottom: '80px'
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: 2,
          pb: 2
        }}
      >
        {/* Sentence Strip Section */}
        <Box sx={{ mb: 3 }}>
          <SentenceStrip handleDelete={handleDelete} words={icons} />
        </Box>

        {/* Icons Grid Section */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1
          }}
        >
          <IconCards onClickIcon={onClickIcon} folderId={folderId} />
        </Box>
      </Container>

      <BottomNavBar />
    </Box>
  );
}
