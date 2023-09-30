import React from 'react'
import ServicesPageContent from '../Components/ServicesPagesContent';
import CommonBanner from '../Components/CommonBanner';
import KnowMore from '../Components/KnowMore';

function DoorToDoor() {
    const images = [
        'https://c8.alamy.com/comp/EYJ4CB/man-closes-door-farm-tractor-EYJ4CB.jpg',
        'https://tractoraddict.com/wp-content/uploads/2020/02/Kubota-MX5400-width-in-feet.jpg',
        'https://c8.alamy.com/comp/HDHJBK/man-driving-a-tractor-with-door-open-HDHJBK.jpg',
       
      ];
    
      const content = `If you are looking for the best door-to-door service solutions in the USA, then ArinTractorwala is best for you. Our experts know that in a globalized today world, businesses depend heavily on reliable and efficient transportation solutions and ensure the smooth flow of goods across global borders. Our door-to-door services are designed best to meet your needs. Thus, we provide you with complete and hassle-free services that fit your import and export needs. Our door-to-door services comprise a diverse range of logistics solutions that meet your needs. Whether you want to export your goods to international markets or import goods, we ensure to move your cargo efficiently and reach to right destination on time without any hassles. Our customization door-to-door solutions ensure that every client meets their specific needs because we understand every client has unique requirements and work accordingly. `
      const content2 = `While providing door-to-door solutions to our clients, we take some important factors into account, like budget, delivery time, and nature of your cargo. From small size goods to large quantity of goods, we have experience to handle all. The good thing is that door-to-door services offered by us cover your entire logistics chain, from the time when cargo is carried from the source till it reaches to exact destination. By getting door-to-door services from us, you can easily navigate from complex world of international trade. Moreover, our experts are also well-versed in import and export paperwork and ensure that all important documentation is in order. We ensure that your every shipment meets the industry requirements and reduces the risk of delays or any damages. In short, the ArinTractorwala door-to-door services reduce the risks effectively. We always prioritize the safety and security of your goods throughout the whole journey.`;
    
      return (
        <>
          <div>
          <CommonBanner title="Door To Door"/>
          {/* <h1 style={{textAlign: "center"}}>Door to Door Page</h1> */}
          <ServicesPageContent images={images} content={content} content2={content2}/>
          </div>
          <KnowMore/>
        </>
      );
}

export default DoorToDoor
