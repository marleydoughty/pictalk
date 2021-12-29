import React from 'react';

export default class IconCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      icons: []
    });
  }

  render() {
    return (
      <div className='icon-card'>
        <img src="/icons/help.png"></img>
        <p>help</p>
      </div>
    );
  }
}
