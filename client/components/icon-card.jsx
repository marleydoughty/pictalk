import React from 'react';

export default class IconCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      icons: []
    });
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    fetch('/api/icons', {
      headers: {
        'X-Access-Token': token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          icons: data
        });
      })
      .catch(err => console.error('Unexpected error occured', err));
  }

  render() {
    const icons = this.state.icons;
    const allIcons = icons.map(icon =>
      <div key={icon.iconId} className='icon-card'>
        <img src={icon.url}></img>
        <p>{icon.name}</p>
      </div>
    );
    return (
      <>{allIcons}</>
    );
  }
}
