import React from 'react';
import BottomNavBar from './bottom-nav-bar';
import FolderItems from './folder-items';
import Header from './header';

export default class FoldersPage extends React.Component {

  render() {
    return (
      <>
      <Header/>
      <div>
        <div className='icons-container'>
          <FolderItems />
        </div>
        <BottomNavBar />
      </div>
      </>
    );
  }
}
