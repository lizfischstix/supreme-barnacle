import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Hero() {
  const currentPage = useLocation().pathname;
  return (
    <Container fluid className='hero'>
      <Row className='pl-5'>
        <Col Text-start> 
        <Col className='name'>Liz Fischnich</Col>
          <Row className='name-tag pl-6'>Hello World!</Row>
        </Col>
     </Row>
    </Container>
      );
}

      export default Hero;