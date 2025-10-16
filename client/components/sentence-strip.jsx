import React from 'react';
import { Paper, Box, IconButton, Tooltip } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BackspaceIcon from '@mui/icons-material/Backspace';
import IconCardItem from './icon-card-item';

const SentenceStrip = ({ words, handleDelete }) => {
  const handleSpeak = () => {
    if (words.length === 0) return;

    const sentence = words.map(word => word.name).join(' ');
    const utterance = new SpeechSynthesisUtterance(sentence);
    window.speechSynthesis.speak(utterance);
  };

  const allIcons = words.map(icon => (
    <IconCardItem icon={icon} key={icon.iconId} />
  ));

  return (
    <Paper
      elevation={2}
      sx={{
        backgroundColor: 'white',
        borderRadius: 2,
        minHeight: '116px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        gap: 2
      }}
    >
      {/* Icons Display Area */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          flex: 1,
          alignItems: 'center',
          minHeight: '80px',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar': {
            height: '8px'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.2)',
            borderRadius: '4px'
          }
        }}
      >
        {words.length === 0
          ? (
          <Box
            sx={{
              color: 'text.secondary',
              fontStyle: 'italic',
              ml: 1
            }}
          >
            Tap icons to build a sentence...
          </Box>
            )
          : (
              allIcons
            )}
      </Box>

      {/* Action Buttons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        <Tooltip title="Play sentence" placement="left">
          <IconButton
            onClick={handleSpeak}
            disabled={words.length === 0}
            sx={{
              color: 'success.main',
              '&:hover': {
                backgroundColor: 'success.light',
                color: 'success.dark'
              },
              '&.Mui-disabled': {
                color: 'action.disabled'
              }
            }}
          >
            <PlayArrowIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete last icon" placement="left">
          <IconButton
            onClick={handleDelete}
            disabled={words.length === 0}
            sx={{
              color: 'error.main',
              '&:hover': {
                backgroundColor: 'error.light',
                color: 'error.dark'
              },
              '&.Mui-disabled': {
                color: 'action.disabled'
              }
            }}
          >
            <BackspaceIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Paper>
  );
};

export default SentenceStrip;
