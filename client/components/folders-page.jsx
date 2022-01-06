import React from 'react';
import BottomNavBar from './bottom-nav-bar';
import SentenceStrip from './sentence-strip';
import FolderIconCards from './folders-icon-cards';

export default class FoldersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: []
    };
    this.openFolder = this.openFolder.bind(this);
  }

  openFolder() {
    // eslint-disable-next-line no-console
    console.log('It clicked');
  }

  render() {
    return (
      <div className='home-page-container'>
        <div className='top-nav-bar'></div>
        <SentenceStrip words={this.state.icons} />
        <div className='icons-container' onClick={this.openFolder}>
          <FolderIconCards />
        </div>
        <BottomNavBar />
      </div>);
  }
}
