
import FooterLinks from './FooterLinks';
import React, {useState} from 'react';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '') {
      setErrorMessage('Please fill in all fields.');
    } else if (!email.includes('@gmail')) {
      setErrorMessage('Email should be a valid Gmail address.');
    } else {
      setErrorMessage(''); 
    }
  };

  return (
    <footer>
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          {/* Logo */}
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className="footer-column">
          {/* Social Media */}
          <h3>Social Media</h3>
          <ul className="social-media-icons">
            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i>Twitter</a></li>
            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i>Facebook</a></li>
            <li><a href="https://instagram.com"><i className="fab fa-instagram"></i>Instagram</a></li>
          </ul>
        </div>
        <div className="footer-column">
          {/* Address of our office */}
          <h3>CONTACT </h3>
          <p>124,KodeGo,Manila,Philippines</p>
          {/* Contact Number */}
          <p>Phone: +639496283380</p>
            {/* Email */}
            <p>Email: e-konsulta@gmail.com</p>
        </div>
        <div className="footer-column">
          {/* Consult Now Form */}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <br />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            {/* Error message */}
            {errorMessage && <div className="error-message">{errorMessage}
            </div>
            }
            <br/>
            {/* Submit Button */}
            <button className="consult-now-button" >Consult Now</button>
          </form>
        </div>
      </div>
      <FooterLinks /></div>
    </footer>
  );
};

export default Footer;
