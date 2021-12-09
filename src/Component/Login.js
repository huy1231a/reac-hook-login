import React, {useEffect , useState} from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import Item from "antd/lib/list/Item";

const Login = () =>{
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const [username, setUsername] = useState({username:""});
      const [password, setPassword] = useState({password:""});

      function login(){
        let i = {username, password}; 
        fetch("http://118.69.37.109:3000/auth/login" ,{
          method : 'POST',
          headers:{
            "Content-Type":"application/json",
            "Accept": "application/json"
          },
          body:JSON.stringify(i)
        })
      }      
    
      return (
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            onChange = {(e)=> setUsername(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            onChange = {(e)=> setUsername(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick={login}>
              Submit
            </Button>
          </Form.Item>
        </Form>
    )
}

export default Login;