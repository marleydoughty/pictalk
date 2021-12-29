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
        <div className='icon-container'></div>
        <div className='bottom-nav-bar'>
          <a href='#home=page'><i className='fas fa-home home-button'></i></a>

        </div>
      </div>
    );
  }
}
