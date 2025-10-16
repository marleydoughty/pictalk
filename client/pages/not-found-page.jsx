import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="return-not-found">
      <p>
        Uh oh, we could not find the page you were looking for!
        <br />
        <Link to="/home">
          <button className="rtn-home-btn">Home</button>
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
