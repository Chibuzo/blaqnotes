import React, { useState } from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import useUserAuth from '../../Hooks/useUserAuth';

const ForgotPassword = () => {
    const [email, setEmail] = useState();
    const [status, setStatus] = useState();
    const [message, setMessage] = useState();
    const { sendPasswordResetEmail } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { status, message } = await sendPasswordResetEmail(email);
        const _status = status === 'error' ? 'danger' : 'info';
        setStatus(_status);
        setMessage(message);
    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="mt-5">
                        <p>You are about to reset your password. We will email you a password reset link</p>
                        <div style={{ backgroundColor: '#100f22', borderRadius: '10px', color: '#fff' }} className="login-div">
                            <div className="pane">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Enter the email you signed up with</Form.Label>
                                        <Form.Control type="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                                    </Form.Group>

                                    <br />
                                    <p className="mt-3 float-right"><Link to="/">Click here</Link><span className="text-muted"> to login</span></p>
                                    {status && <Alert variant={status}>{message}</Alert>}
                                    <Button variant="danger" type="submit" style={{ padding: '7px 45px' }} className="clearfix">
                                        Send Email
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default ForgotPassword;