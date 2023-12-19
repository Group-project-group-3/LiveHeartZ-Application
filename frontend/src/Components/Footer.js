import React from 'react';
import "./Footer.css"; 
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "./logo1@2x.png";

function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col xs={12} lg={4} className="text-center">
            <section>
              <p className='h2' style={{ color:'#BC005A' }}>Follow Us</p>
              <ul className="social-icons justify-content-center">
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="icon" /></a></li>
                <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className="icon" /></a></li>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className="icon" /></a></li>
                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="icon" /></a></li>
              </ul>
            </section>
          </Col>
          <Col xs={12} lg={4} className="text-center fw-bold">
            <section>
              <p className='h2' style={{ color:'#BC005A' }}>Contact Us</p>
              <ul className="contact-info">
                <li><p>+94123595684</p></li>
                <li><p>+94123595684</p></li>
                <li><p>live.heartz@yahoo.com</p></li>
                <li><p>live.heartz@yahoo.com</p></li>
              </ul>
            </section>
          </Col>
          <Col xs={12} lg={4} className="text-center">
            <section className="img-container">
              <a href="/link-to-your-logo-page">
                <img src={logo} className="img-fluid" alt="LiveHeartZ Logo" />
              </a>
              <p className='h4'>LiveHeartZ</p>
            </section>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Row className='text-center fw-bold mb-0'>
        <p className=' mt-0 mb-0'>Copyright @ 2023 All Rights Reserved By <span> Group 03</span></p>
        <p>Designed & Developed by <span>Group 03</span></p>
      </Row>
    </div>
  );
}

export default Footer;
