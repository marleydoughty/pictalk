import React from 'react';

export default class AccountInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      username: '',
      password: ''
    });

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  usernameChange(event) {
    this.setState({ username: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    const { action } = this.props;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/api/auth/${action}`, req)
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'login';
        } else if (action === 'sign-in') {
          window.localStorage.setItem('token', result.token);
          window.location.hash = 'home-page';
        }
      })
      .catch(err => console.error(err));

    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    const { action } = this.props;
    return (
      <>
        <div className='header'>
          <h3>PicTalk</h3>
          <i className='far fa-comment comment-icon'></i>
        </div>
        <div className='card-container'>
          <form onSubmit={this.handleSubmit}>
            <div className='form-inputs'>
              <h2>{action === 'sign-up' ? 'Sign up' : 'Welcome back!'}</h2>
              <div className='username'>
                 <label>Username
                   <input id="username"
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.usernameChange}></input>
                 </label>
               </div>
               <div className='password'>
                 <label>Password
                   <input id="password"
                   type="password"
                   placeholder="*******"
                   value={this.state.password}
                   onChange={this.passwordChange}></input>
                </label>
              </div>
              <div className='button-container'>
                <button id='sign-up'>
                  <a href="sign-up"></a>{action === 'sign-up' ? 'Sign up' : 'Login'}</button>
                <div><span>
                  {action === 'sign-up' ? 'Already a member?' : 'Need an account?'}
                  </span>
                  <a href={action === 'sign-in' ? '#sign-up' : '#login'} id='login'>
                    {action === 'sign-in' ? 'Sign up' : 'Login'}</a>
                  </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
