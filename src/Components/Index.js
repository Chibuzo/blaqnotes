import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Auth/Login';
import learn from '../images/learn.png';
import networking from '../images/networking.png';
import crowdfunding from '../images/crowdfunding.png';
import shopping from '../images/shopping.png';
import dating from '../images/dating.png';
import job from '../images/jobs.png';

const Index = (props) => {
    const features = [
        {
            text: 'Learning is very important part of the BlaqNotes community. Each learning module you complete increases your influence level and each session lasts only 15 minutes.',
            image: learn,
            title: 'learn'
        },
        {
            text: 'Make new friends, gain new business associates and meet that special person in BlaqNotes Community.',
            image: networking,
            title: 'connect'
        },
        {
            text: 'Raise funds for projects, start-up, health care etc using the BlaqNotes Community Crowd Funding Platform. Givers increase influence levels in the Community.',
            image: crowdfunding,
            title: 'contribute'
        },
        {
            text: 'Join our exclusive market place as a buyer, seller or advertiser. Our goal is to support each other and help our businesses to each phantom heights globally.',
            image: shopping,
            title: 'Buy & sell'
        },
        {
            text: 'The BlaqNotes community has an online dating platform for members to meet their soulmates.',
            image: dating,
            title: 'dating'
        },
        {
            text: 'The BlaqNotes job board is designed to empower all community members to find jobs and find adequate staff.',
            image: job,
            title: 'job board'
        }
    ];

    return(
        <div>
            <Header />
            <Container style={{ marginTop: '100px' }}>
                <Row>
                    <Col xs={12} md={6}>
                        <h1 className="mt-5">Welcome to the BlaqNotes Community</h1>
                    </Col>
                    <Col xs={12} md={6}>
                        <Login props={props} />
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row className="features mb-5">
                    <Col>
                        <div className="pane">
                            <h1 className="text-center">An Exciting world awaits you!</h1>
                                {features.map(feature => {
                                    return(<Row className="mt-5"><Col md={{ span: 6, offset: 3 }} key={feature.title}>
                                        <div className="float-sm-left text-center mr-5">
                                            <img src={feature.image} alt='' />
                                            <div style={{ textTransform: 'uppercase' }} className="mt-3">{feature.title}</div>
                                        </div>
                                        <span style={{ position: 'relative', top: '25px' }}>{feature.text}</span>
                                    </Col></Row>)    
                                })}
                        </div>    
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <div className="pane text-center mb-5">
                            <h1>Grow and network and influence in real life by contributing knowledge, by learning and supporting each other in the BlaqNotes Community.</h1>
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