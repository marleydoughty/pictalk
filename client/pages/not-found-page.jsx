import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='return-not-found'>
      <p>Uh oh, we could not find the page you were looking for!<br />
        <button><a href='#home-page' className='rtn-home-btn'>Home</a></button>
      </p>
    </div>
  );
};

export default NotFoundPage;
