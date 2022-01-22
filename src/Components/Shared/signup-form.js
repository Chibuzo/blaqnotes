import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import useUserAuth from '../../Hooks/useUserAuth';

const SignupForm = ({ props }) => {
    const [email, setEmaill] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [gender, setGender] = useState();
    const [phone, setPhone] = useState();
    const [dob, setDob] = useState();
    const { signUp, signupError } = useUserAuth();

    const handleForm = async (e) => {
        e.preventDefault();
        const body = {
            email, firstname, lastname, gender, phone, dob, password
        }
        const result = await signUp(body);
        if (result === true) props.history.push('/signup-confirm');
    }

    return (
        <Form className="mt-5" onSubmit={handleForm}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstname" onChange={e => setFirstname(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastname" onChange={e => setLastname(e.target.value)} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={e => setEmaill(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" name="phone" onChange={e => setPhone(e.target.value)} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control as="select" name="gender" onChange={e => setGender(e.target.value)}>
                        <option value="">-- Gender --</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control type="date" name="dob" onChange={e => setDob(e.target.value)} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Verify Password</Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
            </Form.Row>

            <br />
            {signupError && <Alert variant="danger">{signupError}</Alert>}
            <div className="text-center">
                <Button variant="dark" type="submit">
                    SIGN UP
                </Button>
                <br /><br />
                <p><small>By clicking sign up, you agree to our Terms, Data Policy and cookie Policy. You may receive SMS notifications from us and can opt out at any time.</small></p>
            </div>
        </Form>
    );
}

export default SignupForm;