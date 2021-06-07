import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const SignupConfirm = () => {
    return(
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="pane text-center">
                            <p>Thank you for signing up with the BlaqNotes Community. You mail has been sent to the email address you provided.
                                Kindly complete your registration process by clicking on the link in the email. Thank you.
                            </p>
                            <br /><br />
                            <p>
                                <strong>Open Mail</strong>
                            </p>
                            <br />
                            <p>
                                <strong><Link to="/">RETURN TO HOME</Link></strong>
                            </p>
                        </div>    
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default SignupConfirm;