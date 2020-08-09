import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Error404.scss';

const Error404 = () => {
  return (
    <div className="ErrorImageOverlay">
      <div className="ErrorImageContainer" />
      <div className="ErrorImageText">
        Great shot kid. That was one in a million.
      </div>
      <div className="ErrorImageTextLink">
        Let's get you back <Link to="/">home.</Link>
      </div>
    </div>
  );
};

export default withRouter(Error404);
