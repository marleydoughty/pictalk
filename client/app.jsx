import React from 'react';
import Home from './pages/home';

export default class App extends React.Component {
  // renderPage() {
  //   const { route } = this.state;
  //   if (route.path === '') {
  //     return <AuthForm/>;
  //   }
  //   if (route.path === '') {
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
