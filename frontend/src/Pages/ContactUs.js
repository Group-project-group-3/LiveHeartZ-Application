import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import "./css/ContactUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAt, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  return (
    <>
     <Header/>
     <div className="form1">
      <Form>
        <h2 className="text-center" style={{ fontWeight:"bold" }}>Contact Us</h2>
        <div className="form2">
          <h3 className="topic2" style={{ color: "dimgray", marginTop:30}}>Contact Details</h3>
          <Row>
            <Col>
              <Form.Label className="label">Name</Form.Label>
              <Form.Control className="text1" placeholder="Enter name" />
            </Col>
            <Col>
              <Form.Label className="label">Mobile Number</Form.Label>
              <Form.Control className="text1" placeholder="Enter mobile number" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className="label">Subject</Form.Label>
              <Form.Control className="text1" placeholder="Enter subject" />
            </Col>
            <Col>
              <Form.Label className="label">Email Address</Form.Label>
              <Form.Control className="text1" placeholder="Enter E-mail" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label className="label">Message</Form.Label>
              <Form.Control className="text1" placeholder="Enter your message" as="textarea"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="pinkbtn ps-3 mt-4" style={{ backgroundColor: '#BC005A', border: '0px solid white', borderRadius:6 }}>
              <b className="send" style={{fontSize: 14, textDecoration:"none"}}>SEND</b>
              </Button>
            </Col>
          </Row>
        </div>
        <Container>
        <div>
          <h2 className="text-center" style={{ fontWeight:"bold", marginBottom:35, marginTop:-30 }}>Contact Info</h2>
          <Row>
            <Col></Col>
            <Col></Col>
          <Col>
            <section>
              <ul className='list3'>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faAt}  className="icon_set" size="2x"/></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPhone} className="icon_set" size="2x" /></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} className="icon_set" size="2x"/> </a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLocationDot} className="icon_set" size="2x" /></a></li>
                
              </ul>
            </section>
            </Col>
            <Col>
              <ul className="list1">
                <li>Email</li>
                <li>Phone</li>
                <li>Website</li>
                <li>Location</li>
              </ul>
            </Col>

            <Col>
              <ul className="list2">
                <li>LiveHeartZ@gmail.com</li>
                <li>+94117895624</li>
                <li>www.LiveHeartZ.com</li>
                <li>No 87/4, Colombo 07</li>
              </ul>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          
        </div>
        </Container>
        
      </Form>
    </div>
     <Footer/>
    </>
     
  )
}
