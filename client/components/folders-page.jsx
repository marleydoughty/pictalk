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
        <SentenceStrip handleDelete={this.handleDelete} words={this.state.icons} />
        <div className='icons-container'>
          <FolderIconCards onClickIcon={this.onClickIcon} />
        </div>
        <BottomNavBar />
      </div>);
  }
}
