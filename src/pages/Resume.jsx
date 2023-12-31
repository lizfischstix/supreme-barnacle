import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import MyResume from '../assets/PDFs/LizFischenich_Resume.pdf'

export default function Resume() {
  return (
    <>
    <div className='mt-4 resumeDL'>
    Download complete resume <a href={MyResume} target="_blank" >HERE</a>!
    </div>
    <CardGroup className='mt-5'>
      <Card>
        <Card.Body>
         <ul><Card.Title className='perfect'>Front-end Proficencies</Card.Title>
          <Card.Text>
            <li>HTML</li>
            <li>CSS</li>
            <li>Responive Design</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>JavaScript</li>
            <li>Handlebars</li>
            <li>React</li>  
          </Card.Text></ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
         <ul><Card.Title className='perfect'>Back-end Proficencies</Card.Title>
          <Card.Text>
          <li>Node</li>
                <li>Express</li>
                <li>APIs</li>
                <li>MySQL/Sequelize</li>
                <li>MongoDB</li>
          </Card.Text></ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
         <ul> <Card.Title className='cupcakes'>Other Proficencies</Card.Title>
          <Card.Text>
            <li>Design thinking</li>
              <li>Record keeping</li>
              <li>Presentations</li>
              <li>Cross-functional teamwork</li>
              <li>Educational technologies</li>
              <li>Digital marketing</li>
              <li>Custommer service</li>
          </Card.Text></ul>
        </Card.Body>
      </Card>
    </CardGroup>
    </>
  );
}
