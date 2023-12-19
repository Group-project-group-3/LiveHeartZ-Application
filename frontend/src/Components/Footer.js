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
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
