import React from 'react';

import HomePage from './components/home-page';
import AccountInfo from './components/account-info';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ route: parseRoute(window.location.hash) });
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === 'login' || route.path === '') {
      return <AccountInfo action="sign-in" />;
    } else if (route.path === 'sign-up') {
      return <AccountInfo action="sign-up" />;
    } else if (route.path === 'home-page') {
      return <HomePage/>;
    } else {
      return <div>Hash route not found</div>;
    }
  }

  render() {
    return (
    <>
      {this.renderPage()};
    </>
    );
  }
}
