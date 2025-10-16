import React, { useState, useEffect } from 'react';
import { Paper, Box, IconButton, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import IconCardItem from './icon-card-item';

const SentenceStrip = ({ words, handleDelete, handleClearAll }) => {
  const [speechRate, setSpeechRate] = useState(0.9);

  useEffect(() => {
    const savedRate = localStorage.getItem('speechRate');
    if (savedRate) {
      setSpeechRate(parseFloat(savedRate));
    }
  }, []);

  const handleSpeakSentence = () => {
    if (words.length === 0) return;

    const sentence = words.map(word => word.name).join(' ');
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'en-US';
    utterance.rate = speechRate;
    window.speechSynthesis.speak(utterance);
  };

  const handleSpeakWord = (word, event) => {
    event.stopPropagation();

    const textToSpeak = word.name.length === 1 ? `${word.name}.` : word.name;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = speechRate;
    window.speechSynthesis.speak(utterance);
  };

  const allIcons = words.map(icon => (
    <Box
      key={icon.iconId}
      onClick={e => handleSpeakWord(icon, e)}
      sx={{
        cursor: 'pointer',
        borderRadius: 1,
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundColor: 'rgba(102, 126, 234, 0.1)'
        }
      }}
    >
      <IconCardItem icon={icon} />
    </Box>
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
      <Box
        onClick={handleSpeakSentence}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          flex: 1,
          alignItems: 'center',
          minHeight: '80px',
          overflowX: 'auto',
          overflowY: 'hidden',
          cursor: words.length > 0 ? 'pointer' : 'default',
          padding: 1,
          borderRadius: 1,
          transition: 'background-color 0.2s ease',
          '&:hover': {
            backgroundColor:
              words.length > 0 ? 'rgba(76, 175, 80, 0.05)' : 'transparent'
          },
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
              ml: 1,
              pointerEvents: 'none'
            }}
          >
            Tap icons to build a sentence, then click here to speak...
          </Box>
            )
          : (
              allIcons
            )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        <Tooltip title="Undo last" placement="left">
          <span>
            <IconButton
              onClick={handleDelete}
              disabled={words.length === 0}
              sx={{
                '&.Mui-disabled': {
                  color: 'action.disabled'
                }
              }}
            >
              <ArrowBackIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </span>
        </Tooltip>

        <Tooltip title="Clear all" placement="left">
          <span>
            <IconButton
              onClick={handleClearAll}
              disabled={words.length === 0}
              sx={{
                '&.Mui-disabled': {
                  color: 'action.disabled'
                }
              }}
            >
              <CloseIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
    </Paper>
  );
};

export default SentenceStrip;
