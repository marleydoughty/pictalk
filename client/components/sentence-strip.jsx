import React from 'react';
import IconCardItem from './icon-card-item';

const SentenceStrip = props => {
  const handleSpeak = () => {
    const words = props.words;
    const sentence = words.map(word => {
      return word.name;
    });
    const utterance = new SpeechSynthesisUtterance(sentence);
    window.speechSynthesis.speak(utterance);
  };

  const icons = props.words;
  const allIcons = icons.map(icon => (
    <IconCardItem icon={icon} onClick={() => props.onClickIcon(icon)} key={icon.iconId} />
  ));

  return (
    <div className='sentence-strip-container'>
      <div className='sentence-strip'>
        {allIcons}
      </div>
      <div className='buttons-container'>
        <button onClick={handleSpeak} className='play-btn-container'>
          <i className='fas fa-play play-btn'></i>
        </button>
        <button onClick={props.handleDelete}className='delete-btn-container'>
          <i className='fas fa-backspace delete-btn'></i>
        </button>
      </div>
    </div>
  );
};

export default SentenceStrip;
