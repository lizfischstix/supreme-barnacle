import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GameOn from '../assets/images/projectPics/GameOn.png';
import TechBlog from '../assets/images/projectPics/TechBlog.png';
import JATE from '../assets/images/projectPics/textEditor.png';
import Basil from '../assets/images/projectPics/Basil-laptop.png';
import Notes from '../assets/images/projectPics/noteTaker.png';
import MealPlanner from '../assets/images/projectPics/whatsForDinner.png';
export default function Portfolio() {
  return (
    <div className="App">
      <Container className='p-4'>
        <Row>
          <Col md="4">
            <Card border="dark" style={{ width: '22rem' }}>
              <Card.Img variant="top" src={GameOn} />
              <Card.Body>
                <Card.Title>Game On!</Card.Title>
                <Card.Text>
                  A free online gaming ecosystem where users can rate the games they've played and save the ones they like.
                </Card.Text>
                <div className='buttonLinks'> <a href="https://grisly-coffin-11200-fb183baf5ee2.herokuapp.com/" target="_blank"><Button variant="warning">Game On!</Button></a>
                  <a href="https://github.com/lizfischstix/GAME-ON" target="_blank"><Button variant="warning">on GitHub</Button></a></div>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card border="dark" style={{ width: '22rem' }}>
              <Card.Img variant="top" src={TechBlog} />
              <Card.Body>
                <Card.Title>Tech Blog</Card.Title>
                <Card.Text>
                  Where users can create blog posts and comment on the posts of others.
                </Card.Text>
                <div className='buttonLinks'> <a href="https://cuddly-happiness-874f92dec1e1.herokuapp.com/"><Button variant="warning">Tech Blog</Button></a>
                  <a href="https://github.com/lizfischstix/cuddly-happiness"><Button variant="warning">on GitHub</Button></a></div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card border="dark" style={{ width: '22rem' }}>
              <Card.Img variant="top" src={JATE} />
              <Card.Body>
                <Card.Title>Just Another Text Editor</Card.Title>
                <Card.Text>
                  A progressive web application for writing and saving notes.
                </Card.Text>
                <div className='buttonLinks'> <a href="https://effective-winner-485806fb345e.herokuapp.com/"><Button variant="warning">JATE</Button></a>
                  <a href=""><Button variant="warning">on GitHub</Button></a></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='pt-4'>
          <Col md="4">
            <Card border="dark" style={{ width: '22rem' }}>
              <Card.Img variant="top" src={ Basil } />
              <Card.Body>
                <Card.Title>Basil Budget</Card.Title>
                <Card.Text>
                  A web application where users can budget and record their spending and income.
                </Card.Text>
                <div className='buttonLinks'> <a href="https://basil-budget-e685e272efd5.herokuapp.com/"><Button variant="warning">Basil</Button></a>
                  <a href="https://github.com/ingridmidia/mern-budget-app"><Button variant="warning">on GitHub</Button></a></div>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card border="dark" style={{ width: '22rem' }}>
              <Card.Img variant="top" src={ Notes } />
              <Card.Body>
                <Card.Title>Note Taker</Card.Title>
                <Card.Text>
                  This note taker allows a user to input and store notes, view saved notes by title and bring saved note up again by selecting the title.
                </Card.Text>
                <div className='buttonLinks'> <a href="https://agile-depths-30713-3e7b4facfb83.herokuapp.com/"><Button variant="warning">Note Taker</Button></a>
                  <a href="https://github.com/lizfischstix/liz-makes-a-note-taker"><Button variant="warning">on GitHub</Button></a></div>
              </Card.Body>
            </Card>
          </Col>
         
          <Col md="4">
            <Card border="dark" style={{ width: '22rem' }}>
              <Card.Img variant="top" src={MealPlanner} />
              <Card.Body>
                <Card.Title>What's For Dinner!?</Card.Title>
                <Card.Text>
                  A meal planner that finds food and recipies from user-entered ingredients.
                </Card.Text>
                <div className='buttonLinks'> <a href="https://lizfischstix.github.io/liz-refactors-project-one/"><Button variant="warning">What's for Dinner!?</Button></a>
                  <a href="https://github.com/lizfischstix/liz-refactors-project-one"><Button variant="warning">on GitHub</Button></a></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>


  );

}
