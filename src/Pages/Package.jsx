import React from 'react'
import ServicesPageContent from '../Components/ServicesPagesContent';

function Package() {
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
       
      ];
    
      const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vitae dui sagittis varius. ...`; 
    
      return (
        <div>
          <h1 style={{textAlign: "center"}}>Package Page</h1>
          <ServicesPageContent images={images} content={content} />
        </div>
      );
}

export default Package
