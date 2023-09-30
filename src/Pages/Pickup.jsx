import React from 'react'
import ServicesPageContent from '../Components/ServicesPagesContent';
import CommonBanner from '../Components/CommonBanner';
import KnowMore from '../Components/KnowMore';

function Pickup() {
    const images = [
        'https://i.ytimg.com/vi/DfBD_ydaVkM/hqdefault.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KmGVIF92ad0uDK5fe4u9-WEztB7kPxdp0YG6EDWU7R1todWSJg5EcHLFoiW6da8XuIU&usqp=CAU',
        'https://www.tractortransport.com/blog/wp-content/uploads/2020/06/56392-1.jpeg',
       
      ];
    
      const content = `ArinTractorWala is the trusted export and import service provider in the USA that commits to giving you the best logistics solutions. With a focus on reliability and customer satisfaction, our pickup and delivery services stand out as a hallmark of our excellence and commitment. Whether you want to import your goods or export goods, our Pickup and delivery services ensure that your goods reach at destination safely on time. We have many years of experience in the import and export industry that developed experience in us to handle a number of cargo efficiently. We understand the complexity of your international trade and make it simpler. Our network of associates and partners works all over the world and delivers pickup and delivery services worldwide. Our robust connections ensure that we make every move smooth. We provide pickup and delivery services to a wide range of industries, including textiles, electronics, automotive, etc. Our experienced team handles your different types of cargo by using cutting-edge technology. The good thing is that you can also get the real-time status of your cargo after getting services from us. This feature gives you peace of mind during shipments of your cargo. We understand that every business has unique needs, and due to this, we provide customizable services to clients according to their needs. Our team is committed to giving value to our clients. we provide you with competitive pricing without compromising on quality. Our cost-effective services help you to optimize the supply chain and reduce shipping costs.`
      const content2 = `If you want to get seamless pickup services in the USA, then ArinTractorwala is best for you. We plan and execute services to reduce delays and ensure the timely delivery of your shipments. Our professional custom brokers handle all paperwork and compliance needs and ensure that your cargo makes custom clearance smoothly.  `; 

    
      return (
        <>
          <div>
           <CommonBanner title="PickUp and Delivery"/>
          {/* <h1 style={{textAlign: "center"}}>Pick up Page</h1> */}
          <ServicesPageContent images={images} content={content} content2={content2}/>
          </div>
          <KnowMore/>
        </>
      );
}

export default Pickup
