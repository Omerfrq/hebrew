import React from 'react';

import FBLogo from '../assets/images/ContactMethods/Option1/facebook.png';
import MailLogo from '../assets/images/ContactMethods/Option1/mail.png';
import PhoneLogo from '../assets/images/ContactMethods/Option1/phone.png';
import WhatsApp from '../assets/images/ContactMethods/Option1/whatsapp.png';

const ContactMethods = () => {
  return (
    <div className='contact-methods'>
      <img src={MailLogo} alt='mail-logo' />
      <a href='tel:972543144332'>
        <img src={PhoneLogo} alt='phone' />
      </a>
      <img className='facebookLogo' src={FBLogo} alt='fb' />
      <a
        href='https://api.whatsapp.com/send?phone=972543144332&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.'
        class='float'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={WhatsApp} alt='whatsapp' />
      </a>
    </div>
  );
};
export default ContactMethods;
