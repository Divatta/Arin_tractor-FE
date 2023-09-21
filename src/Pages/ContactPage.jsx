import ContactForm from '../Components/ContactForm';
import '../scss/ContactPage.scss'
import { Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import Address from '../Components/Address';
import CommonBanner from '../Components/CommonBanner';

function ContactPage() {
  return (
      <>
        <CommonBanner title="Contact Us" />
        <div className="contact-page">
        <ContactForm/>
        <Address/>
        <div className="whatsapp-icon">
            <Button
            type="primary"
            shape="circle"
            icon={<WhatsAppOutlined/>}
            size="large"
            onClick={() => {
                // Add your WhatsApp link here
                window.open('https://whatsapp.com', '_blank');
            }}
            />
        </div>

    </div>
      </>

  )
}

export default ContactPage
