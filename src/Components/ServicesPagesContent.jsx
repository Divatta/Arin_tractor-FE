import '../scss/ServicesPageContent.scss'
import { Card, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

const ServicesPageContent = ({ images, content, content2, content3 }) => {
  return (
    <div className='services'>

      <p className='text'>{content}</p>
      <p className='text'>{content2}</p>
      <p className='text'>{content3}</p>


      <div className='servicesContent'>
        {images.map((image, index) => (
          <Card key={index} className='imageCard' cover={<img alt={`Image ${index}`} src={image} />}>
            <Meta title={`Image ${index}`} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPageContent;
