import React from 'react';

export default class IconCardItem extends React.Component {
  render() {
    const { icon, onClick } = this.props;

    return <div onClick={onClick} className='icon-card'>
      <img src={icon.url}></img>
      <p>{icon.name}</p>
    </div>;
  }
}
