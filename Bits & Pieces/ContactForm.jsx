import { useState } from 'react';

function Contact(props) {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
        id: Math.random(Math.floor() * 1000),
        text: Input,
      });

      setContactName('');
      setContactEmail('');
      setContactMessage('');
  };
<div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={input}
          name="text"
          className="contactName"
          onChange={handleChange}
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={input}
          name='text'
          className="contactEmail"
          onChange={handleChange}
        ></input>
      
        <button className="contactButton">Let's get in touch!</button>
      </form>
    </div>
};

export default Contact;