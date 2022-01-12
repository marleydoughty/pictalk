import React from 'react';
import HomePage from './components/home-page';
import AccountInfo from './components/account-info';
import FoldersPage from './components/folders-page';
import parseRoute from './lib/parse-route';
import SettingsPage from './components/settings-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      route: parseRoute(window.location.hash)
    });
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  render() {
    const { route } = this.state;
    if (route.path === 'login' || route.path === '') {
      return <AccountInfo action="sign-in" />;
    } else if (route.path === 'sign-up') {
      return <AccountInfo action="sign-up" />;
    } else if (route.path === 'home-page') {
      const folderId = route.params.get('folderId');
      return <HomePage folderId={folderId}/>;
    } else if (route.path === 'folders') {
      return <FoldersPage />;
    } else if (route.path === 'settings') {
      return <SettingsPage/>;
    } else {
      return <div className='return-not-found'>Uh oh, we could not find the page you were looking for! </div>;
    }
  }
}
