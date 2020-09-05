import React from 'react';
import ContactMethods from './ContactMethods';
import DownArrow from '../assets/images/Arrow/Arrow.png';
import video from '../assets/header-muted.mp4';

const VideoWorkaround = ({ src }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
    <video
      muted
      autoplay
      playsinline
      src="${src}"
      class='video'
      type='video/mp4'
    />
  `,
    }}
  />
);

const Header = () => {
  return (
    <header>
      <div className='container'>
        <VideoWorkaround src={video} />

        {/* <ReactPlayer
          height='100%'
          width='100%'
          className='video'
          loop
          playing
          url='https://vimeo.com/451398828'
        /> */}

        <div className='content'>
          <div>
            <h1>גיוטק-המומחים למדידות</h1>
            <h2>מודדים מוסמכים והנדסה אזרחית</h2>
          </div>
          <button
            onClick={() => (window.location.href = '#contact-form')}
            className='price-suggestion'
          >
            קבלו הצעת מחיר
          </button>
          <div
            style={{
              cursor: 'pointer',
            }}
            onClick={() => (window.location.href = '#contact-form')}
            className='down-arrow bounce'
          >
            <img src={DownArrow} alt='down-arrow' />
          </div>
          <ContactMethods onNav={false} />
        </div>
      </div>
    </header>
  );
};
export default Header;
