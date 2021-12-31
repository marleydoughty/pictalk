import React from 'react';
// import IconCard from './icon-card';
import IconCardItem from './icon-card-item';
export default class SentenceStrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
    });
    this.handleSpeak = this.handleSpeak.bind(this);
  }

  handleSpeak() {
    const utterance = new SpeechSynthesisUtterance('I want help please');
    window.speechSynthesis.speak(utterance);
  }

  render() {
    const icons = this.props.words;
    const allIcons = icons.map(icon => (
      <IconCardItem icon={icon} onClick={() => this.props.onClickIcon(icon)} key={icon.iconId} />
    ));
    return (
      <div className='sentence-strip'>
        {allIcons}
        <button className='play-button' onClick={this.handleSpeak}><i className='fas fa-play'></i></button>
      </div>
    );
  }
}
