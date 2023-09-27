import CommonBanner from '../Components/CommonBanner'
import KnowMore from '../Components/KnowMore'
import '../scss/Clients.scss'

function Clients() {
  return (
   <>
   <CommonBanner title="Clients"/>
     <div className='clients'>
        <p className="text">ArinTractorWala is the best export and import service provider in the USA, and we take huge pride in meeting the unique needs of our clients. We provide you with an extensive range of services, including shipping, door-to-door services, packaging, warehousing, pick-up, and delivery services. We have huge years of experience team of experts, due to which we give commitment to our clients to meet excellent levels. By working consistently, we made a record of reliability and became your trusted import and export service provider. Our export and import services meet the unique needs of every industry we work. Whether you are part of agriculture, manufacturing, automotive, technology, or other sector, we covered all. One of our major strengths is our global reach, which connects us with a number of clients and makes a strong customer base. In this way, we make strong partnerships and international connections that allow us to import or export your goods seamlessly. In the manufacturing field, we understand the significance of efficient and timely supply chain management. ArinTractorwala provides you best logistics solutions and ensures that your goods and finished products are moved with accuracy, improve productivity, and reduce delays. Our team facilitates the flow of your products in such a way that it meets the global demand. </p>
        <div className="logos">
            <img src="https://img.freepik.com/premium-vector/job-search-gradient-logo-template_93835-1621.jpg" alt="" />
            <img src="https://img.freepik.com/premium-vector/job-search-gradient-logo-template_93835-1621.jpg" alt="" />
            <img src="https://img.freepik.com/premium-vector/job-search-gradient-logo-template_93835-1621.jpg" alt="" />
            <img src="https://img.freepik.com/premium-vector/job-search-gradient-logo-template_93835-1621.jpg" alt="" />
        </div>
    </div>
    <KnowMore/>
   </>
  )
}

export default Clients
