import React, { useEffect } from 'react'; 
import UserThumb from './Shared/UserThumb';
import useUserAuth from '../../Hooks/useUserAuth';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Dashboard = (props) => {
    const { user, isLoggedIn } = useUserAuth();

    useEffect(() => {
        isLoggedIn();
        //if (!user || !user.isLoggedIn) props.history.push('/')
    }, []);

    useEffect(() => {
        
    }, [user])

    return(
        <div style={{ backgroundColor: '#000', padding: '25px' }}>
            <Row style={{ color: '#fff' }}>
                <Col>
                    <UserThumb user={user} />
                </Col>
                <Col className="float-right" md={{ span: 2 }}>
                    View Wallet
                </Col>
            </Row>
            <div className="dashboard-div">
                <Row>
                    <Col md={{ span: 3 }}>
                        <ul>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-video-camera" />
                                    <span>Network</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-video-camera" />
                                    <span>Your Learning</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-video-camera" />
                                    <span>Consortium</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-video-camera" />
                                    <span>Dating</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <i className="fa fa-video-camera" />
                                    <span>Crowd Funding</span>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Start your e-learning journey here</h3>
                        <p>Introduction to Black History: Lesson 1</p>
                    </Col>
                </Row>
            </div>
        </div>    
    );
}

export default Dashboard;