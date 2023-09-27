import React from 'react';
import { Carousel } from 'antd';

function Banners() {
  return (
    <div className="home-page">
      <div className="banners">
        <Carousel autoplay>
          <div className='bannerImages'>
            <img src="https://www.hidros.com.tr/wp-content/uploads/2020/03/TRACTOR-BANNER.png" alt="" />
            {/* <div className="banner-text">
              <p className="animated-text"> message for Banner 1</p>
            </div> */}
          </div>
          <div className='bannerImages'>
            <img src="https://www.deere.co.uk/assets/images/region-2/products/tractors/mid/6r-series/6r-series-new/6r-tractors-banner-category.jpg" alt="" />
            {/* <div className="banner-text">
              <p className="animated-text"> message for Banner 2</p>
            </div> */}
          </div>
          <div className='bannerImages'>
            <img src="https://www.tafe.com/tractors/tafe/tafe-8515-4wd-tractor-banner.jpg" alt="" />
            {/* <div className="banner-text">
              <p className="animated-text"> message for Banner 3</p>
            </div> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Banners;
