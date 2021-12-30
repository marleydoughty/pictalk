import React from 'react';
import IconCard from './icon-card';

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
        <div className='sentence-strip'>
        </div>
        <div className='icons-container'>
          <IconCard />
          {/* icons={this.state.icons}  */}
        </div>
        <div className='bottom-nav-bar'>
          <a href='#home=page'><i className='fas fa-home home-button'></i></a>
        </div>
      </div>
    );
  }
}
