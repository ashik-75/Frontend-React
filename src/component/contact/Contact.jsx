import { useState } from 'react';
import './contact.scss';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    setEmail('');
    setText('');
    console.log('Form Submitted');
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="asset/contact.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Form</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required={true}
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required={true}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Contact</button>
        </form>

        {message && <h3>Form is Submitted</h3>}
      </div>
    </div>
  );
};

export default Contact;
