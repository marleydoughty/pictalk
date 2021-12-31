import React from 'react';
// import IconCard from './icon-card';
import IconCardItem from './icon-card-item';
export default class SentenceStrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
    });
  }

  render() {
    const icons = this.props.words;
    const allIcons = icons.map(icon => (
      <IconCardItem icon={icon} onClick={() => this.props.onClickIcon(icon)} key={icon.iconId} />
    ));
    return (
      <div className='sentence-strip'>
        {allIcons}
      </div>
    );
  }
}
