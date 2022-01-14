import React from 'react';
import BottomNavBar from '../components/bottom-nav-bar';
import FolderItems from '../components/folder-items';
import Header from '../components/header';

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
