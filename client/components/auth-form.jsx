import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ value: '' });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className='header'>
          <h3>PicTalk</h3>
          <i className='far fa-comment comment-icon'></i>
        </div>
        <div className='card-container'>
          <form onClick={this.handleSubmit}>
            <div className='form-inputs'>
              <label>Email
                <div className='email'><input id="email" type="email" placeholder="example@example.com" value={this.state.value} onChange={this.handleChange}></input></div>
              </label>
              <label>Username
                <div className='username'><input id="username" type="text" placeholder="Username" value={this.state.value} onChange={this.handleChange}></input></div>
              </label>
              <label>Password
                <div className='password'><input id="password" type="password" placeholder="*******" value={this.state.value} onChange={this.handleChange}></input></div>
              </label>
              <div className='button-container'>
                <button id='sign-up'>Sign Up</button>
                <button id='login'>Login</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
