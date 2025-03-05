import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const NotFoundPage = () => {
    const error = useRouteError();

    return (
      <div className='error-page'>
          <h1>Page Error</h1>
          <p>{error.statusText || error.message}</p>
          <Link to="/">Return to Home</Link>
      </div>
    )
}

export default NotFoundPage;