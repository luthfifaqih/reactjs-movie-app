import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import duneImage from '../assets/images/trending/dune.jpg'
import jokerImage from '../assets/images/trending/joker.jpg'
import jujutsuImage from '../assets/images/trending/jujutsu.jpg'
import kimetsuImage from '../assets/images/trending/kimetsu.jpg'
import morbiusImage from '../assets/images/trending/morbius.jpg'
import lightyearImage from '../assets/images/trending/lightyear.jpg'
const Trending = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className='text-center text-white'>Trending</h1>
                <br/>
                <Row>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-light movieImage">
                            <Image src={duneImage} alt="Dune"  width="100%" height="auto" className='Images'/>
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
                            <Image src={jokerImage} alt="Dune"  width="100%" height="auto" className='Images'/>
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
                            <Image src={jujutsuImage} alt="Dune"  width="100%" height="auto" className='Images'/>
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
                            <Image src={kimetsuImage} alt="Dune"  width="100%" height="auto" className='Images'/>
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
                            <Image src={lightyearImage} alt="Dune"  width="100%" height="auto" className='Images'/>
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
                            <Image src={morbiusImage} alt="Dune"  width="100%" height="auto" className='Images'/>
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

export default Trending