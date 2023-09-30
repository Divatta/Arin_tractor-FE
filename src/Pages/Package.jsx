import React from 'react'
import ServicesPageContent from '../Components/ServicesPagesContent';
import CommonBanner from '../Components/CommonBanner';
import KnowMore from '../Components/KnowMore';

function Package() {
    const images = [
        'https://www.agprocompanies.com/webres/File/3025E%20complete%20package.jpg',
        'https://image.made-in-china.com/44f3j00uWTaSUOMYmpz/China-Taihong-4WD-80HP-Wheel-Farm-Tractor-TH-804-.webp',
        'https://image.made-in-china.com/44f3j00FivonIkscBqy/China-Premium-Agricultural-50HP-Farm-Tractors-for-Sale.webp',
       
      ];
    
      const content = `Packaging plays an important role in global trade because it affects the safety, integrity, and efficiency of the supply chain. If the items are packaged properly and start for the move, then they may be damaged or lost during the move. So, it is important to ensure the best packaging with quality packing material. Your trusted partner, ArinTractorwala, does not damage your items because we use quality packing material. We at ArinTractorwala are a renowned export and import service provider in the USA. We take immense pride in giving you a range of packaging services to businesses. We make your international trade easier by handling every item during packaging. We ensure the secure and safe transportation of goods across the world. With excellence and commitment, we deliver the best packaging services to our clients and make a strong customer base.`
      const content2 = `We understand that the need of every client is different, and they need particular packaging solutions. Our expert team works closely with customers to understand their needs, pack their products, and ensure cost-efficient solutions with the utmost protection. The good thing is that we use the highest packing quality material by meeting international standards. Our staff is well-trained to handle your packaging process and reduce the risk of damage during the move. We use the best practices and follow technical standards to secure your goods within packaging and prevent breakage and movement. We know that international trade involves numerous regulations regarding packaging. For this, we do the proper labeling and documentation of packed items, so no confusion leads, or you can make your move smooth. Our packaging services have become an integral part of our commitment to give you quality export and import solutions. You can contact us today to discuss how our packaging solutions benefit the international trade operations of your business. `;  
    
      return (
        <>
           <div>
          <CommonBanner title="Packaging"/>
          {/* <h1 style={{textAlign: "center"}}>Package Page</h1> */}
          <ServicesPageContent images={images} content={content} content2={content2}/>
          </div>
          <KnowMore/>
        </>
      );
}

export default Package
