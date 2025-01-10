import React from 'react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className='not-found-main'>
      <div className='not-found-content'>
        <h1 className='not-found-title'>404</h1>
        <h2 className='not-found-subtitle'>Page Not Found</h2>
        <p className='not-found-message'>Oops! It seems the page you are looking for has been disconnected.</p>
        <p className='not-found-suggestion'>Don't worry, our generators are always up and running! Return to the <a href='/'>home page</a> to find your way.</p>
      </div>
    </div>
  );
}
