import React from 'react';
import IconCardItem from './icon-card-item';

export default class SentenceStrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
    });
    this.handleSpeak = this.handleSpeak.bind(this);
  }

  handleSpeak() {
    const utterance = new SpeechSynthesisUtterance('how are you');
    window.speechSynthesis.speak(utterance);
  }

  render() {
    const icons = this.props.words;
    const allIcons = icons.map(icon => (
      <IconCardItem icon={icon} onClick={() => this.props.onClickIcon(icon)} key={icon.iconId} />
    ));
    return (
      <div className='sentence-strip-container'>
        <div className='sentence-strip'>
          {allIcons}
        </div>
        <div onClick={this.handleSpeak} className='play-button-container'>
         <i className='fas fa-play play-button'></i>
        </div>
      </div>
    );
  }
}
