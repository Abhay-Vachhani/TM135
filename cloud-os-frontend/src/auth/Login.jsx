import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage: 'url(/images/bgimage.jpg)', backgroundSize: 'cover', backdropFilter: 'blur(10px)' }}>
            <div style={{ border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '5px', padding: '20px', maxWidth: '500px', width: '80%', height: '400px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(50px)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ textAlign: 'center', color: '#fff' }}>Login</h2>

                <Form
                    id='box'
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={() => { }}
                    style={{ margin: '0px 20px', padding: '20px 0px', textAlign: 'center' }}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                        style={{ marginBottom: '20px' }}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" style={{ width: '80%', height: '40px' }} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                        style={{ marginBottom: '20px' }}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            style={{ width: '80%', height: '40px' }}
                        />
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '80%', height: '40px' }}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;
