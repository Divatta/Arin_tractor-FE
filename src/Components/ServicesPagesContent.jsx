import '../scss/ServicesPageContent.scss'
import { Card, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

const ServicesPageContent = ({ images, content }) => {
  return (
    <div className='services'>
      <Text>{content}</Text>
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
