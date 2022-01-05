import React from 'react';

const IconCardItem = ({ icon, onClick }) => (
  <div onClick={onClick} className='icon-card'>
    <img src={icon.url}></img>
    <p>{icon.name}</p>
  </div>
);

export default IconCardItem;
