import React from 'react';
import './error.css';

const errorPage = () => {
  return (
    <div className="error-container">
      <div className="caterpillar">🐛</div>
      <h1>404</h1>
      <p>Oops! The page you're looking for has crawled away.</p>
      <div className="leaf">🍃</div>
      <p>Don't worry, our caterpillar is on the case!</p>
      <a href="/" className="home-button">Go Home</a>
    </div>
  );
};

export default errorPage;
