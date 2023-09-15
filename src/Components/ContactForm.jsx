import { Form, Input, Button, Typography} from 'antd'

const {Title} =  Typography;

function ContactForm() {
  return (
    <div className="contactForm">
        <Form className="form">
            <Title level={3} className='contactTitle'>Contact Us</Title>
            <Form.Item htmlFor="userName">
                <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Your Name"
                className="input"
                />
            </Form.Item>
            <Form.Item htmlFor="phoneNumber" className="name">
                <Input
                type="number"
                name="phoneNumber"
                id="phone"
                placeholder="Phone"
                className="input"
                />
            </Form.Item>
            <Form.Item htmlFor="email">
                <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email Id"
                className="input"
                />
            </Form.Item>
            <Form.Item htmlFor="lookingFor" className="name">
                <Input
                type="text"
                name="lookingFor"
                id="location"
                placeholder="Seeking Enquiry for"
                className="input"
                />
            </Form.Item>
            <Form.Item htmlFor="location" className="name">
                <Input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
                />
            </Form.Item>

            <Button className="btn">
                Send Message
            </Button>
        </Form>
    </div>
  )
}

export default ContactForm
