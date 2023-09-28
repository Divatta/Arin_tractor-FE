import React from 'react'
import ServicesPageContent from '../Components/ServicesPagesContent';
import CommonBanner from '../Components/CommonBanner';
import KnowMore from '../Components/KnowMore';

function Shipping() {
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkxPXX8jypYNPDeTghU7Rru0sqZlPRUACbQ&usqp=CAU',
       
      ];
    
      const content = `Arin Tractorwala is your best-trusted partner if you are looking for shipping services in the USA. We take pride in giving you top-notch shipping solutions that meet your export and import needs. With our cutting-edge technology, commitment to excellence, and diverse network of partners, we ensure that your goods reach to right destination efficiently and safely. We provide a wide range of shipping services that meet your needs. Whether you want to export goods, import goods, or want some logistics solutions, then ArinTractorwala is the perfect solution for you.`;
      const content2 = `Our ocean freight shipping services are designed well to transit a large number of goods across seas. We make strong relationships with shipping lines that allow us to give timely deliveries and competitive rates to our clients. When time is your priority, our air freight services give you an efficient and fast shipping solution. We have a relationship with leading airlines that ensure that your cargo is reached safely to its destination on time. Our team handles all steps of the process, from packaging and customs clearance to timely delivery. We navigate the complexity of your custom regulations and overcome challenges. Our experienced team makes the process simpler, ensures that our compliance is met with customer requirements, and reduces delays. `;
      const content3 = `We provide you the state of state-of-the-art warehousing facilities and optimize your supply chain. Our shipping services are designed well to meet your demands and ensure that your products reach your destination on time. For heavy or oversize cargo, we are experts in handling project logistics cargo. With our many years of experience, we manage your shipments, whether they consist of equipment, machinery, or industrial components. Our core shipping services add value to us and become a reason for the success of your business. We tailored your shipping services needs by giving comprehensive solutions for your export and import requirements. `;
      
      return (
        <>
          <div>
          <CommonBanner title="Shipping"/>
          {/* <h1 style={{textAlign: "center"}}>Shipping Page</h1> */}
          <ServicesPageContent images={images} content={content} content2={content2} content3={content3}/>
          </div>
          <KnowMore/>
        </>
      );
}

export default Shipping
