import React from 'react';
import BottomNavBar from './bottom-nav-bar';

export default class SettingsPage extends React.Component {
  render() {
    const username = localStorage.getItem('username');
    return (
      <div className='background-settings-page'>
        <div className='card-container'>
          <div className='card-content'>
            <div className='settings-header'>
              <h2>Settings</h2>
            </div>
            <div className='settings-section'>
              <div className='flex-center'>
                <i className='fas fa-user'></i>
                <h4>ACCOUNT INFO</h4>
              </div>
              <p>{`Username: ${username}`}</p>
              <div className='flex-center'>
                <i className='fas fa-question-circle'></i>
                <h4>ABOUT</h4>
              </div>
              <p>All of the icons used in this application were sourced from <a href='//flaticon.com'>Flaticon.</a>
              <br />Click the link to explore their website or visit www.flaticon.com</p>
            </div>
          </div>
          <BottomNavBar />
        </div>
      </div>

    );
  }
}
