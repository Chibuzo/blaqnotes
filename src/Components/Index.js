import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Auth/Login';
import bg from '../images/home-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChalkboardTeacher, faGlobe, faBriefcase, faFunnelDollar, faHeart } from "@fortawesome/free-solid-svg-icons";

const Index = (props) => {
    const features = [
        {
            text: 'Learning is very important part of the BlaqNotes community. Each learning module you complete increases your influence level and each session lasts only 15 minutes.',
            icon: faChalkboardTeacher,
            title: 'learn'
        },
        {
            text: 'Join our exclusive market place as a buyer, seller or advertiser. Our goal is to support each other and help our businesses to each phantom heights globally.',
            icon: faShoppingCart,
            title: 'Buy & sell'
        },
        {
            text: 'Raise funds for projects, start-up, health care etc using the BlaqNotes Community Crowd Funding Platform. Givers increase influence levels in the Community.',
            icon: faFunnelDollar,
            title: 'contribute'
        },
        {
            text: 'Make new friends, gain new business associates and meet that special person in BlaqNotes Community.',
            icon: faGlobe,
            title: 'connect'
        },
        {
            text: 'The BlaqNotes community has an online dating platform for members to meet their soulmates.',
            icon: faHeart,
            title: 'dating'
        },
        {
            text: 'The BlaqNotes job board is designed to empower all community members to find jobs and find adequate staff.',
            icon: faBriefcase,
            title: 'job board'
        }
    ];

    return(
        <div>
            <Header />
            <Container fluid style={{ backgroundImage: `url(${bg})`, backgroudRepeat: 'repeat', backgroundSize: 'cover', paddingTop: '80px', paddingBottom: '103px' }}>
                <Container>
                    <Row>
                        <Col xs={12} md={5}>
                            <h1 className="mt-5">Welcome to the BlaqNotes Community</h1>
                        </Col>
                        <Col xs={12} md={1}></Col>
                        <Col xs={12} md={6}>
                            <Login props={props} />
                        </Col>
                    </Row>
                </Container>
            </Container>    

            <Container fluid>
                <Row className="features mb-5">
                    <Col>
                        <div className="pane text-center"><br />
                            <h1>An Exciting world awaits you!</h1>
                            <br />
                            <Row>
                                {features.map(feature => {
                                    return(<Col md={{ span: 4 }} key={feature.title} className="mt-5 px-5">
                                        <span style={{ position: 'relative', top: '25px' }}>
                                            <h5 style={{ textTransform: 'uppercase' }}>{feature.title}</h5>
                                            <FontAwesomeIcon icon={feature.icon} size="3x" className="mt-3 mb-3" />
                                            <div className="feature-text">{feature.text}</div>
                                        </span>
                                    </Col>)    
                                })}
                            </Row>    
                        </div>    
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <div className="pane text-center mb-5">
                            <h3 style={{ color: '#333', lineHeight: '1.4' }}>Grow your network and influence in real life by contributing knowledge, by learning and supporting each other in the BlaqNotes Community.</h3>
                            <br />
                            <a href='/'>READ MORE >></a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default Index;