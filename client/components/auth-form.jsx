import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      username: '',
      password: ''
    });
    this.emailChange = this.emailChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  usernameChange(event) {
    this.setState({ username: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    const form = event.target;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/auth/sign-up', req)
      .then(res => res.json())
      .catch(err => console.error(err));

    form.reset();
  }

  render() {
    return (
      <>
        <div className='header'>
          <h3>PicTalk</h3>
          <i className='far fa-comment comment-icon'></i>
        </div>
        <div className='card-container'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-inputs'>
              <label>Email
                <div className='email'>
                  <input id="email" type="email" placeholder="example@example.com" value={this.state.value} onChange={this.emailChange}></input>
                </div>
              </label>
              <label>Username
                <div className='username'>
                  <input id="username" type="text" placeholder="Username" value={this.state.value} onChange={this.usernameChange}></input>
                </div>
              </label>
              <label>Password
                <div className='password'>
                  <input id="password" type="password" placeholder="*******" value={this.state.value} onChange={this.passwordChange}></input>
                </div>
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
