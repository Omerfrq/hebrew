import React from 'react';

const GalleryItemBox = ({ src, title, titleOnHover, text }) => {
  return (
    <div>
      <img src={src} alt={title} />
      <span>{title}</span>
      <p className='gallery-overlay'>
        <section className='gallery-overlay-text'>
          <b>{titleOnHover}</b>
          <small>{text}</small>
        </section>
      </p>
    </div>
  );
};

export default GalleryItemBox;
