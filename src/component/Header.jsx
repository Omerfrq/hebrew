import React from 'react';
import ContactMethods from './ContactMethods';
import DownArrow from '../assets/images/Arrow/Arrow.png';
// import BackgroundVideo from './BackgroundVideo';
import video from '../assets/header-muted.mp4';

const Header = () => {
  return (
    <header>
      <div className='container'>
        {/* <video className='video' autoPlay loop>
          <source src={video} type='video/mp4' />
        </video> */}
        <div className='content'>
          <div>
            <h1>גיוטק-המומחים למדידות</h1>
            <h2>מודדים מוסמכים והנדסה אזרחית</h2>
          </div>
          <button onClick={()=>window.location.href='#contact-form'} className='price-suggestion'>קבלו הצעת מחיר</button>
          <div className='down-arrow bounce'>
            <img src={DownArrow} alt='down-arrow' />
          </div>
          <ContactMethods onNav={false} />
        </div>
      </div>
    </header>
  );
};
export default Header;
