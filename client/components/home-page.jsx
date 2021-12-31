import React from 'react';
import IconCard from './icon-card';
import SentenceStrip from './sentence-strip';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: []
    };
    this.onClickIcon = this.onClickIcon.bind(this);
  }

  onClickIcon(icon) {
    this.setState({ icons: [...this.state.icons, icon] });
  }

  render() {
    return (
      <div className='home-page-container'>
        <div className='top-nav-bar'></div>
        <SentenceStrip words={this.state.icons}/>
        <div className='icons-container'>
          <IconCard onClickIcon={this.onClickIcon} />
        </div>
        <div className='bottom-nav-bar'>
          <a href='#home=page'><i className='fas fa-home home-button'></i></a>
        </div>
      </div>
    );
  }
}
