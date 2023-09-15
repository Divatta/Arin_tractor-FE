import React from 'react';
import { Carousel } from 'antd';

function Banners() {
  return (
    <div className="home-page">
      <div className="banners">
        <Carousel autoplay>
          <div className='bannerImages'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU" alt="" />
            <div className="banner-text">
              <p className="animated-text"> message for Banner 1</p>
            </div>
          </div>
          <div className='bannerImages'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4dNVhZSuR1RKhjJwOmzJe5yVd5FpTtX3fw&usqp=CAU" alt="" />
            <div className="banner-text">
              <p className="animated-text"> message for Banner 2</p>
            </div>
          </div>
          <div className='bannerImages'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5E5-Fxq1sqgdb4AFeXB3EAHcvnSeJ0LM6Q&usqp=CAU" alt="" />
            <div className="banner-text">
              <p className="animated-text"> message for Banner 3</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Banners;
