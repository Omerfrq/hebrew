import React from 'react';
import Hero from '../component/Hero';
import ContactMethods from '../component/ContactMethods';
import GalleryTwo from '../component/GalleryTwo';

const ThreeD = () => {
  return (
    <>
      <Hero />
      <GalleryTwo />
      <ContactMethods onNav={false} />
    </>
  );
};

export default ThreeD;
