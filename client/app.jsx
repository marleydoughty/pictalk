import React from 'react';
import HomePage from './pages/home-page';
import AccountInfo from './components/account-info';
import FoldersPage from './pages/folders-page';
import parseRoute from './lib/parse-route';
import SettingsPage from './pages/settings-page';
import NotFoundPage from './pages/not-found-page';

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
      return <NotFoundPage/>;
    }
  }
}
