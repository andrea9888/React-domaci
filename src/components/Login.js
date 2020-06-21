import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { auth } from "../auth/AuthService";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Login = (props) => {
  function handleSubmit() {
    auth.login();
    props.updateAuthStatus(true);
    props.history.push("/");
  }
  return (
    <Form
    name="normal_login"
    className="login-form"
    initialValues={{ remember: true }}
    onFinish={handleSubmit}
  >
    <Form.Item
      name="username"
      rules={[{ required: true, message: 'Please input your Username!' }]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please input your Password!' }]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
    </Form.Item>
  </Form>
);
};



export default withRouter(Login);