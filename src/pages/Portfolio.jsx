import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container, Card, Col, Row, Button} from 'react-bootstrap';

export default function Portfolio() {
  return (
    <div className="App">  
    <Container className='p-4'> 
    <Row> 
   <Col md="4">  
   <Card border="dark" style={{ width: '22rem' }}>  
   <Card.Img variant="top" src='src/assets/images/projectPics/GameOn.png' />  
   <Card.Body>  
     <Card.Title>Game On!</Card.Title>  
     <Card.Text>  
    A free online gaming ecosystem where users can rate the games they've played and save the ones they like.
     </Card.Text>  
   <div className='buttonLinks'> <a href="https://grisly-coffin-11200-fb183baf5ee2.herokuapp.com/"><Button variant="warning">Game On!</Button></a>
    <a href="https://github.com/lizfischstix/GAME-ON"><Button variant="warning">on GitHub</Button></a></div>
   </Card.Body>  
 </Card>  
     </Col>  
     
     <Col md="4">  
   <Card border="dark" style={{ width: '22rem' }}>  
   <Card.Img variant="top" src='src/assets/images/projectPics/TechBog.png' />  
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
   <Card.Img variant="top" src='src/assets/images/projectPics/textEditor.png' />  
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
   <Card.Img variant="top" src='src/assets/images/projectPics/DayPlanner.png' />  
   <Card.Body>  
     <Card.Title>Workday Scheduler</Card.Title>  
     <Card.Text>  
    A web application that provides a calender and space for the user to enter and save their schedule.

     </Card.Text>  
   <div className='buttonLinks'> <a href="https://lizfischstix.github.io/liz-makes-a-calendar-app/"><Button variant="warning">Workday Scheduler</Button></a>
    <a href="https://github.com/lizfischstix/liz-makes-a-calendar-app"><Button variant="warning">on GitHub</Button></a></div>
   </Card.Body>  
 </Card>  
     </Col>  
     
     <Col md="4">  
   <Card border="dark" style={{ width: '22rem' }}>  
   <Card.Img variant="top" src='src/assets/images/projectPics/noteTaker.png' />  
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
   <Card.Img variant="top" src='src/assets/images/projectPics/whatsForDinner.png' />  
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
