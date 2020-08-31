import React from 'react';
import video from '../assets/videos/header.mp4';

const BackgroundVideo = () => {
  return (
    // <video width="420" height="345" url={video}>
    // </video>
    <iframe
      title='vimeo-player'
      src='https://player.vimeo.com/video/451398828?autoplay=1&loop=1&muted=1'
      width='420'
      height='345'
      frameborder='0'
      allow={true}
      allowfullscreen
      // style='pointer-events: none;'
    ></iframe>
  );
};

export default BackgroundVideo;
