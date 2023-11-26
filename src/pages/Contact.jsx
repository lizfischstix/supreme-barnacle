import { useState } from 'react';
import { validateEmail } from '../utils';
import Form from 'react-bootstrap/Form';
import { Button, Card } from 'react-bootstrap';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleValidation = (e) => {
    if (e.target.name === 'email') {
      if (!validateEmail(e.target.value)) {
        setErrorMessage('Invalid Email')
      } else {
        setErrorMessage('')
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage('missing required field')
      } else {
        setErrorMessage('')
      }

    }
  }
  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('thanks for your message!')

  }
  
  return (
    <Card className='mt-4 mb-5' border="warning" style={{ width: '30rem' }} >
      <Card.Header>Let's Chat!</Card.Header>
      <Card.Body>
    <Form>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="your name here" name='name' value={name} onChange={handleInputChange} onBlur={handleValidation} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name='email' value={email} onChange={handleInputChange} onBlur={handleValidation} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name='message' value={message} onChange={handleInputChange} onBlur={handleValidation}  />
      </Form.Group>
      <Button disabled={!(name && email && message)|| errorMessage } onClick={handleSubmit}>Submit</Button>
      {errorMessage && <p>{errorMessage}</p>}
    </Form>
    </Card.Body>
    </Card >
  );
}

