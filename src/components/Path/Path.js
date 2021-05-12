import React from 'react';
import './Path.css';

function Path() {
  return (
    <div className="path">
      <div className="path__item">
        <div className="path__header path__header_backend">1 неделя</div>
        <div className="path__description">Back-end</div>
      </div>
      <div className="path__item">
        <div className="path__header path__header_frontend">4 недели</div>
        <div className="path__description">Front-end</div>
      </div>
    </div>
  );
}

export default Path;
