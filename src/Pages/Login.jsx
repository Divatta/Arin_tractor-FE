import React, {useState} from "react";
import { Button, Form, Input, Alert, Typography } from "antd";
import { NavLink, useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import logo from '../assets/arin_logo.png'

const {Title} = Typography;

const Login = () => {
  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
    show: false,
  });

  const [user, setUser] = useState({
    email : "",
    password : ""
  })

  const navigate = useNavigate()

  const readValue = (e)=>{
    const { name , value } = e.target;
    setUser({ ...user, [name]: value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const adminCredentials = {
      email: "admin@gmail.com",
      password: "admin123",
    };
  
    if (user.email === adminCredentials.email && user.password === adminCredentials.password) {
      try {
        console.log('login=', user);
  
        setAlertData({
          type: "success",
          message: "Login successful!",
          show: true,
        });
        localStorage.setItem("accessToken", "adminToken");
        navigate(`/adminpanel`);
        // window.location.href = "/adminpanel";
      } catch (error) {
        setAlertData({
          type: "error",
          message: error.response.data.msg,
          show: true,
        });
      }
    } else {
      setAlertData({
        type: "error",
        message: "Invalid credentials. Please try again.",
        show: true,
      });
    }
  };
  

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  return (
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      style={{
        maxWidth: 600,
        margin: "17vh auto",
        padding: "20px",
        backgroundColor: "lightblue"
      }}
      initialValues={{ remember: false }}
    >
      {/* <img src={logo} alt="no image" width={300} height={100}/> */}
      <Title level={2} style={{textAlign:"center"}}>Login</Title>
      {alertData.show && (
        <Alert
          message={alertData.message}
          type={alertData.type}
          showIcon
          closable
          onClose={() => setAlertData({ ...alertData, show: false })}
          style={{ marginTop: "20px" }}
        />
      )}
      {successMessage && (
        <Alert
          message={successMessage}
          type="success"
          showIcon
          closable
          style={{ marginBottom: "16px" }}
          onClose={() => setSuccessMessage(null)}
        />
      )}
      {errorMessage && (
        <Alert
          message={errorMessage}
          type="error"
          showIcon
          closable
          style={{ marginBottom: "16px" }}
          onClose={() => setErrorMessage(null)}
        />
      )}
      <Form.Item
        label="Email Id"
        rules={[
          { required: true, message: "Please input your Email Id!" },
        ]}
        htmlFor="email"
      >
        <Input
          type="email"
          name="email"
          id="email"
          onChange={readValue}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          type="password"
          name="password"
          id="password"
          onChange={readValue}
        />
      </Form.Item>
      {/* <p style={{textAlign: "right", marginRight: "46px"}}>
        <a href="#">Forgot Password</a>
      </p> */}

      <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
       <Button type="primary" htmlType="submit" onClick={submitHandler}>
          Login
        </Button>
      </Form.Item>
      {/* <p style={{textAlign: "center"}}>
        Don't Have an Account? <Link to={"/register"}>Register</Link>
      </p> */}
    </Form>
  );
};

export default Login;
