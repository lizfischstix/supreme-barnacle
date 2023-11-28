import { useLocation } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import LinkedIn from '../assets/images/LinkedIn-button.png';
import Github from '../assets/images/GitHub-button.png';
import Instagram from '../assets/images/Instagram-button.png';
import Spotify from '../assets/images/Spotify-button.png';



export default function Foot() {
  const currentPage = useLocation().pathname;

  return (
    <Container fluid className='foot'>
      <Row className="justify-items-end">
        <Col className=''>
          <a href='https://www.linkedin.com/in/lizfischenich/'><Image src={LinkedIn} alt="LinkedIn Button" fluid /></a>
          <a href='https://github.com/lizfischstix'><Image fluid src={Github} /></a>
          <a href='https://www.instagram.com/lizfischenich/?short_redirect=1'><Image fluid src={Instagram} /></a>
          <a href='https://open.spotify.com/user/lizfischenich/'><Image fluid src={Spotify} /></a>
        </Col>
      </Row>
    </Container>

  );
}
