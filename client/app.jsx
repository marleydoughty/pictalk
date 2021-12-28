import React from 'react';
import Home from './pages/home';
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
    if (route.path === '') {
      return <AccountInfo routePath={route.path} />;
    } else if (route.path === 'home-page') {
      return <HomePage/>;
    }
  }

  render() {
    return (
    <>
      <Home />
      {this.renderPage()};
    </>
    );
  }
}
