// ./pages/error404.js

import React from 'react';

const Error404 = () => {
  return (
    <div className="error-page">
      <h1 style={{ textAlign: 'center' }}>¡Error 404!</h1>
      <p style={{ textAlign: 'center' }}>Lo sentimos, parece que te has perdido en el camino.</p>
      <div style={{ textAlign: 'center' }}>
        <a href="http://localhost:3000">
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg.webp" alt="Error 404" />
        </a>
      </div>
    </div>
  );
};

export default Error404;
