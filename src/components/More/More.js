import React from 'react';
import './More.css';

function More({ onMoreClick }) {
  const handleMoreButtonClick = (e) => {
    onMoreClick();
  };

  return (
    <section className="more">
      <button type="button" className="more__button" onClick={handleMoreButtonClick}>
        Ещё
      </button>
    </section>
  );
}

export default More;
