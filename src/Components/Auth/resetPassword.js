import React, { useState } from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useParams, Link } from 'react-router-dom';
import useUserAuth from '../../Hooks/useUserAuth';

const ResetPassword = () => {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [status, setStatus] = useState();
    const [message, setMessage] = useState();
    const { email_hash, hash_string } = useParams();
    const { resetPassword } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setStatus('danger');
            setMessage('Password does\'t match!');
            return;
        }

        const { status, message } = await resetPassword(email_hash, hash_string, password);
        const _status = status === 'error' ? 'danger' : 'info';
        setStatus(_status);
        setMessage(message);
    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={{ span: 5, offset: 4 }} className="mt-5">
                        <div style={{ backgroundColor: '#100f22', borderRadius: '10px', color: '#fff' }} className="login-div">
                            <div className="pane">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Choose a new password</Form.Label>
                                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Enter new password" required />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Re-enter password</Form.Label>
                                        <Form.Control type="password" onChange={e => setConfirmPassword(e.target.value)} placeholder="Re-enter password" required />
                                    </Form.Group>

                                    <br />
                                    <p className="mt-3 float-right"><Link to="/">Click here</Link><span className="text-muted"> to login</span></p>
                                    {status && <Alert variant="danger">{message}</Alert>}
                                    <Button variant="danger" type="submit" style={{ padding: '7px 45px' }} className="clearfix">
                                        Save new password
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

export default ResetPassword;