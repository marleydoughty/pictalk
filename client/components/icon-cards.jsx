import React from 'react';
import IconCardItem from './icon-card-item';

export default class IconCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      icons: [],
      isLoading: true
    });
  }

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    fetch(`/api/icons/${this.props.folderId || 1}`, {
      headers: {
        'X-Access-Token': token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          icons: data,
          isLoading: false
        });
      })
      .catch(err => console.error('Unexpected error occured', err));
  }

  render() {
    const icons = this.state.icons;
    const allIcons = icons.map(icon => (
      <IconCardItem icon={icon} onClick={() => this.props.onClickIcon(icon)} key={icon.iconId} />
    ));
    return (
      <>
        {this.state.isLoading && <div className='is-loading'>...Loading</div>}
        {allIcons}
      </>
    );
  }
}
