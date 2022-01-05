import React from 'react';
import BottomNavBar from './bottom-nav-bar';

export default class FoldersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: []
    };
  }

  render() {
    return (
      <>
      <BottomNavBar/>
      </>
    );
  }
}
