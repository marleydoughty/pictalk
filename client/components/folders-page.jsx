import React from 'react';
import BottomNavBar from './bottom-nav-bar';
import FolderItems from './folder-items';

export default class FoldersPage extends React.Component {

  render() {
    return (
      <div className='home-page-container'>
        <div className='top-nav-bar'></div>
        <div className='icons-container'>
          <FolderItems />
        </div>
        <BottomNavBar />
      </div>);
  }
}
