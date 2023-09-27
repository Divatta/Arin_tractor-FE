import React from 'react'
import ServicesPageContent from '../Components/ServicesPagesContent';
import CommonBanner from '../Components/CommonBanner';
import KnowMore from '../Components/KnowMore';

function WareHouse() {
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
       
      ];
    
      const content = `We at ArinTractorWala take huge pride in giving you top-notch warehouse facilities. We have a team of experts who work with pure dedication and provide you with seamless supply chain solutions. Our warehouses are strategically positioned in cities across the USA. This placement permits us to handle the import and export of goods efficiently. We ensure the cost-effective and quick distribution of goods to destinations. Whether you want to get short-term storage solutions or want to store your goods for a long time,  our warehousing facilities meet your needs. ArinTractorwala warehouses boast enough interiors that are well-designed to accommodate various products, from small products to large-size products. With our flexible storage configurations and racking systems, we store and arrange your goods efficiently. This versatility expands the temperature control storage options for goods that need particular environmental conditions. `
      const content2 = `We take the security factor in the export and import industry and take this seriously. Our warehouses use cutting-edge systems for security, including access control, 24/7 surveillance, and alarm systems. These measures ensure the integrity and security of your goods during storage at our warehouses. The good thing about our warehousing facilities is our efficient inventory management that ensures successful export and import service solutions. Our warehousing facilities are equipped with inventory management advanced systems and give you real-time versatility. It allows our team to track shipments and inventory levels and make informed decisions to streamline the supply chain. Our experience and skilled workforce ensure that your goods are handled with utmost precision and care. Our logistics experts work well to ensure that your goods are promptly shipped and accurately to the right destinations.`; 
    

    
      return (
        <>
          <div>
          <CommonBanner title="WareHouse Facility"/>
          {/* <h1 style={{textAlign: "center"}}>WareHouse Page</h1> */}
          <ServicesPageContent images={images} content={content} content2={content2}/>
          
          </div>
          <KnowMore/>
        </>
      );
}

export default WareHouse
