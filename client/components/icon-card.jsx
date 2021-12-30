import React from 'react';

export default class IconCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      icons: []
    });
  }

  componentDidMount() {
    fetch('/api/icons')
      .then(response => response.text())
      .then(data => {
        this.setState({
          icons: data
        });
      })
      .catch(err => console.error('Unexpected error occured', err));
  }

  render() {
    const icons = this.props.icons;
    const allIcons = icons.map(icon =>
      <div key={icon.iconId} className='icon-card'>
        <img src={icon.url}></img>
        <p>{icon.name}</p>
      </div>
    );
    return (
      <div>{allIcons}</div>
    );
  }
}
