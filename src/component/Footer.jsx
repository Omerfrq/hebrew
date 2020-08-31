import React from 'react';
import Facebook from '../assets/images/ContactUs/facebookMobile.png';

import Phone from '../assets/images/ContactUs/phone.png';
import Mail from '../assets/images/ContactUs/mail.png';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='content'>
        <div className='geotech-title'>
          <span>
            גיו-טק מודדים מוסמכים <br></br>
            והנדסה אזרחית
          </span>
        </div>

        <div className='methods'>
          <div>
            <h3>שמרו על קשר:</h3>

            <img src={Facebook} alt='fb' />
          </div>

          <div className='quick-nav'>
            <h3>ניווט מהיר</h3>
            <ul>
              <li>עמוד הבית</li>
              <li>תלת מימד</li>
              <li>מדידות וחיפוי</li>
            </ul>
          </div>
          <div className='contact'>
            <h3>יצירת קשר</h3>
            <div>
              <img src={Phone} alt='phone' />
              <span>072-392-7547</span>
            </div>
            <div>
              <img src={Mail} alt='mail' />
              <span>geotech-mapping@hotmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className='all-right'>
        {' '}
        © כל הזכויות שמורות לגיו-טק מודדים מוסמכים והנדסה אזרחית
      </div>
    </section>
  );
};

export default Footer;
