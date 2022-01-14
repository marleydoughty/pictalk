import React from 'react';
import BottomNavBar from '../components/bottom-nav-bar';
import decodeToken from '../lib/decode-token';

export default class SettingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ username: '' });
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    const userObj = decodeToken(token);
    this.setState({ username: userObj.username });
  }

  render() {
    const username = this.state.username;
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
              <div className='flex-justify'>
                <p>{`Username: ${username}`}</p>
                <a href='#'>Sign out</a>
              </div>
              <div className='flex-center'>
                <i className='fas fa-question-circle'></i>
                <h4>ABOUT</h4>
              </div>
              <p>All of the icons used in this application were sourced from <a href='//flaticon.com'>Flaticon.</a>
              <br /> Click the link to explore their website or visit www.flaticon.com</p>
            </div>
          </div>
          <BottomNavBar />
        </div>
      </div>

    );
  }
}
