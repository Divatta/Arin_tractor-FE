import React from 'react'
import ServicesPageContent from '../Components/ServicesPagesContent';

function ImagesPage() {
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
       
      ];
        
      return (
        <div>
          <ServicesPageContent images={images} />
        </div>
      );
}

export default ImagesPage
