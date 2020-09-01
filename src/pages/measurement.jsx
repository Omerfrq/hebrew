import React from 'react';
import Hero from '../component/Hero';
import GalleryOne from '../component/GalleryOne';
import ContactMethods from '../component/ContactMethods';

const Measurement = () => {
  return (
    <>
      <Hero />
      <GalleryOne />
      <ContactMethods onNav={false} />
    </>
  );
};

export default Measurement;
