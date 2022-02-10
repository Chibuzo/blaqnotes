import React, { useState, useEffect } from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from "react-router-dom";
import useUserAuth from '../../Hooks/useUserAuth';

const EmailVerification = () => {
    const [isActive, setIsActive] = useState();
    const [errorMessage, setErrorMessage] = useState(<i>Verifying email address</i>);
    const { verifyEmail } = useUserAuth();
    const { email_hash, hash_string } = useParams();

    useEffect(async () => {
        const verifyData = async () => {
            const { status, message, user } = await verifyEmail(email_hash, hash_string);
            if (status === false) {
                setErrorMessage(message);
            } else {
                setErrorMessage(
                    <div>
                        <p>
                            Thank you for verifying your email address. <br />
                            <strong><Link to="/">RETURN TO LOGIN</Link></strong>
                        </p>
                    </div>
                );
            }
        }

        verifyData();
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="pane text-center">
                            {errorMessage}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default EmailVerification;