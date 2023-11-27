import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function AboutMe() {
  return (
    <Container className='pt-4'>
      <Row>
        <span>"A jack of all trades is a master of none...<br/> but oftentimes better than a master of one.”</span>
      </Row>
      <Row xs={6} md={12} fluid className=' pt-2 box'>
        <Col xs={6} md={2}>
         <Image fluid src="src/assets/images/IMG_0018.JPg" rounded />
        </Col>
        <Col xs={6} md={10} className='text-end'>
          A woman who's lived many lifetimes, Liz comes to web development with experiences in retail sales, inventory planning and marketing as well as elementary and secondary education.  She brings to full-stack web development her analytical skills, a passion for learning new technologies and ideating how to how to solve problems with them. <br /> In autumn '23, Liz took a deep dive into web developent, completing a full time full-stack bootcamp through Northwester University.  Here she devloped the skills needed to be a full stack web developer.  She loves creating practical and accessable web applications and looks to use this love to support the technology and web development needs of schools and nonprofit organizations.
        </Col>
      </Row>
    </Container>

  );
}

