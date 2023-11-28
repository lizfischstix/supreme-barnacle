import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Hero() {
  const currentPage = useLocation().pathname;
  return (
    <Container fluid className='px-5 hero'>
      <Row className='ml-4'>
        <Col Text-start> 
        <Col className='name'>Liz Fischnich</Col>
          <Row className='name-tag'>Hello World!</Row>
        </Col>
     </Row>
    </Container>
      );
}

      export default Hero;