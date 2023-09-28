import { Form, Input, Button, Typography,message as antdMessage} from 'antd'
import axios from 'axios';
import React, {useState} from 'react';
const {Title} =  Typography;

function ContactForm() {
    const [contact, setContact] = useState({
        userName: "",
        phoneNumber: "",
        email:"",
        enquiry:"",
        location:""
    })

    const readValue = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.post(`https://arintractor.onrender.com/api/v1/contact/create`, contact, {
                headers:{
                    "Content-Type": "application/json"
                }
            })
            antdMessage.success("Message sent successfully");  
        } catch (error) {
            console.error("Error creating contact us:", error);
            antdMessage.error("Error creating contact us"); 
        }
    }
  return (
    <div className="contactForm">
         <div className="imageContact">
            <img src="https://img.freepik.com/premium-photo/business-concept-contact-us-text-icon-wooden-cubes-copy-space-text_577978-293.jpg" alt="no image" />
        </div>
        <Form className="form">
            {/* <Title level={3} className='contactTitle'>Contact Us</Title> */}
            <Form.Item htmlFor="userName">
                <Input
                type="text"
                name="userName"
                id="userName"
                placeholder="Your Name"
                className="input"
                onChange={readValue}
                />
            </Form.Item>
            <Form.Item htmlFor="phoneNumber" className="name">
                <Input
                type="number"
                name="phoneNumber"
                id="phone"
                placeholder="Phone"
                className="input"
                onChange={readValue}
                />
            </Form.Item>
            <Form.Item htmlFor="email">
                <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email Id"
                className="input"
                onChange={readValue}
                />
            </Form.Item>
            <Form.Item htmlFor="enquiry" className="name">
                <Input
                type="text"
                name="enquiry"
                id="enquiry"
                placeholder="Seeking Enquiry for"
                className="input"
                onChange={readValue}
                />
            </Form.Item>
            <Form.Item htmlFor="location" className="name">
                <Input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
                onChange={readValue}
                />
            </Form.Item>

            <button className='btn' onClick={handleSubmit}>
                Send Message
            </button>
        </Form>
       
    </div>
  )
}

export default ContactForm
