import React from 'react';

const BottomNavBar = () => {
  return (
  <div className='bottom-nav-bar'>
    <a href='#folders'><i className='fas fa-folder folders-btn'></i></a>
    <a href='#home-page'><i className='fas fa-home home-button'></i></a>
    <a href='#settings'><i className='fas fa-cog settings-btn'></i></a>
  </div>
  );
};
export default BottomNavBar;
