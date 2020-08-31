import React from 'react';
// import NavBar from '../component/NavBar';
import Header from '../component/Header';
import Introduction from './introduction';
import WhoAreWe from './WhoAreWe';
import ContactUs from './ContactUs';

const MainApp = () => {
  return (
    <>
      <Header />
      <Introduction />
      <WhoAreWe />
      <ContactUs />
    </>
  );
};
export default MainApp;
