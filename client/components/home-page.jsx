import React from 'react';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: []
    };
  }

  render() {
    return (
      <div className='home-page-container'>
        <div className='top-nav-bar'></div>
        <div className='sentence-strip'></div>
        <div className='icon-container'>
          <img src='https://www.freeiconspng.com/thumbs/yes-png/yes-png-9.png'></img>
          <img src='https://www.freeiconspng.com/thumbs/yes-png/yes-png-9.png'></img>
          <img src='https://www.freeiconspng.com/thumbs/yes-png/yes-png-9.png'></img>
          <img src='https://www.freeiconspng.com/thumbs/yes-png/yes-png-9.png'></img>
          <img src='https://www.freeiconspng.com/thumbs/yes-png/yes-png-9.png'></img>
        </div>
        <div className='bottom-nav-bar'>
          <i className='fas fa-home home-button'></i>
        </div>
      </div>
    );
  }
}
