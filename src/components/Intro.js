import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-white d-flex align-items-center justify-content-center'>
                <Row>
                    <Col>
                        <div className='title'>NONTON GRATIS</div>
                        <div className='title'>GAK PAKE KARCIS</div>
                        <div className='introButton mt-4 text-center'>
                            <Button className='btn'>Get Started</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro