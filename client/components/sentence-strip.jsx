import React from 'react';
// import IconCard from './icon-card';

export default class SentenceStrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      words: []
    });
  }

  render() {
    return (
      <div className='sentence-strip'>
        {this.state.words}
      </div>
    );
  }
}
