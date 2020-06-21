import React from 'react';
import PostForma from '../../services/PostForm.js'
import { Form, Input, Button, Divider } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};



class Contact extends React.Component{
  onFinish = values => {
    this.posalji(values);
    
  };
  async posalji(data){
    await PostForma.post('/api/jsonBlob',data).then(res => {
        let result = res.headers.location;
        localStorage.setItem("blob-link", result);
        alert("Poslato!");
    }, () => {
        alert("Doslo je do greske! Pokusajte ponovo");
    });
}

render() {
    return (
        <React.Fragment>
        <Divider style={{ marginBottom: 60 }}>Form</Divider>
        <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
        <Form.Item name={'name'} label="Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name={'email'} label="Email" rules={[{ type: 'email', required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name={'message'} label="Message" rules={[{ required: true }]}>
            <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
    </React.Fragment>
    );
    }
};

export default Contact;