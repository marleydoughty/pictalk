import React from 'react';
import Home from './pages/home';
import parseRoute from './lib/parse-route';
// import AuthForm from './components/auth-form';
// import HomePage from './components/home-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('user-jwt', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.removeItem('user-jwt');
    this.setState({ user: null });
    window.location.hash = '#sign-in';
  }

  // renderPage() {
  //   const { route } = this.state;
  //   if (route.path === 'sign-up' || route.path === 'sign-in') {
  //     return <AuthForm/>;
  //   } else if (route.path === '') {
  //     return <HomePage/>;
  //   }
  // }

  render() {
    return (
    <>
      <Home />
      {/* {this.renderPage()}; */}
    </>
    );
  }
}
