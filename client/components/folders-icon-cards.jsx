import React from 'react';
import IconCardItem from './icon-card-item';

export default class FolderIconCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      icons: []
    });
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    fetch('/api/icons/11', {
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
    const allIcons = icons.map(icon => (
      <IconCardItem icon={icon} key={icon.iconId} />
    ));
    return (
      <>{allIcons}</>
    );
  }
}
// onClick = {() => this.props.onClickIcon(icon)}
