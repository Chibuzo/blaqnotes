import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import useUserAuth from '../../Hooks/useUserAuth';

const Login = ({ props }) => {
    const [email, setEmaill] = useState();
    const [password, setPassword] = useState();
    const { login, loginError } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginStatus = await login(email, password);
        if (loginStatus === true) props.history.push('/dashboard');
    }

    return(
        <div style={{ backgroundColor: '#000', borderRadius: '10px', color: '#fff' }}>
            <div className="pane">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={e => setEmaill(e.target.value)} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Text className="text-muted">
                        Forgotten password?
                    </Form.Text>
                    <p><a href="/signup" className="float-right">Sign Up</a></p>
                    <br />
                    {loginError && <Alert variant="danger">{loginError}</Alert>}
                    <Button variant="dark" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;