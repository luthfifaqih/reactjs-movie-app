import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import antmanImage from '../assets/images/superheros/ant-man.jpg'
import avengerImage from '../assets/images/superheros/avenger.jpg'
import batmanImage from '../assets/images/superheros/batman.jpg'
import captainmarvelImage from '../assets/images/superheros/captain-marvel.jpg'
import spidermanImage from '../assets/images/superheros/spiderman.jpg'
import supermanImage from '../assets/images/superheros/superman.jpg'
const Superhero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className='text-center text-white'>Superhero</h1>
                <br/>
                <Row>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-light movieImage">
                            <Image src={antmanImage} alt="Dune"  width="100%" height="auto" className='Images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>DUNE</Card.Title>
                                        <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-light movieImage">
                            <Image src={avengerImage} alt="Dune"  width="100%" height="auto" className='Images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>DUNE</Card.Title>
                                        <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-light movieImage">
                            <Image src={batmanImage} alt="Dune"  width="100%" height="auto" className='Images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>DUNE</Card.Title>
                                        <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-light movieImage">
                            <Image src={captainmarvelImage} alt="Dune"  width="100%" height="auto" className='Images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>DUNE</Card.Title>
                                        <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-light movieImage">
                            <Image src={spidermanImage} alt="Dune"  width="100%" height="auto" className='Images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>DUNE</Card.Title>
                                        <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-light movieImage">
                            <Image src={supermanImage} alt="Dune"  width="100%" height="auto" className='Images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>DUNE</Card.Title>
                                        <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content.
                                        </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Superhero