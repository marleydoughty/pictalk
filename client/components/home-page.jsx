import React from 'react';
import IconCards from './icon-cards';
import SentenceStrip from './sentence-strip';
import BottomNavBar from './bottom-nav-bar';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: []
    };
    this.onClickIcon = this.onClickIcon.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  onClickIcon(icon) {
    this.setState({ icons: [...this.state.icons, icon] });
  }

  handleDelete() {
    const words = this.state.icons;
    const sentence = words.filter((element, index) => {
      return index < words.length - 1;
    });
    this.setState({ icons: sentence });
  }

  render() {
    return (
      <div className='home-page-container'>
        <div className='top-nav-bar'></div>
        <SentenceStrip handleDelete={this.handleDelete} words={this.state.icons}/>
        <div className='icons-container'>
          <IconCards onClickIcon={this.onClickIcon} />
        </div>
        <BottomNavBar/>
      </div>
    );
  }
}
