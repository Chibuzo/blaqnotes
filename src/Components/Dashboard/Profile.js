import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Profile = () => {
    return(
        <div>
            <Form>
                <Form.Row>
                    <Form.Label column lg={2}>
                        Date of birth
                    </Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder="Pick date" />
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
}

export default Profile;