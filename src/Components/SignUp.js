import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignupForm from './Shared/signup-form';

const SignUp = (props) => {
    return(
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <SignupForm props={props} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default SignUp;