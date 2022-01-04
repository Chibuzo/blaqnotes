import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import useUserAuth from '../../Hooks/useUserAuth';

const Login = ({ props }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login, loginError } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginStatus = await login(email, password);
        if (loginStatus === true) props.history.push('/user');
    }

    return (
        <div style={{ backgroundColor: '#000', borderRadius: '10px', color: '#fff' }} className="login-div">
            <div className="pane">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        Forgotten password?
                    </Form.Text>
                    <p className="mt-3 float-right"><span className="text-muted">Don't have an account?</span> <a href="/signup">Sign Up</a></p>
                    <br /><br />
                    {loginError && <Alert variant="danger">{loginError}</Alert>}
                    <Button variant="danger" type="submit" style={{ padding: '7px 45px' }} className="clearfix">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;