import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { Image, Container, Row, Col, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Header.css";
import logo from "./logo1@2x.png";

function Header() {
  return (
    <div className="header">
      <header className="header1">
        <Container fluid="md">
          <Row className="justify-content-center">
            <Col className="text-start">
              <Image src={logo} width="100" height="100" fluid />
            </Col>
            <Col></Col>
            <Col className="text-center mt-3 col d-none d-md-block">
              <Row>
                <Col className='mt-2 text-end'>
                  <FontAwesomeIcon icon={faHome} className="address-icon" size="2x" />
                </Col>
                <Col>
                  <Row><span className="span31">27/3,</span></Row>
                  <Row><span className="span31">Kandy Road,</span></Row>
                  <Row><span className="span31">Colombo-6</span></Row>
                </Col>
              </Row>
            </Col>

            <Col className='text-center mt-3 d-none d-md-block'>
              <Row>
                <Col className='mt-2 text-end'>
                  <FontAwesomeIcon icon={faPhone} className="address-icon" size="2x" />
                </Col>
                <Col className='mt-2'>
                  <Row>
                    <span className="span31">08864774535</span>
                  </Row>
                  <Row>
                    <span className="span31">09898364757</span>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className='text-end'>
              <Button className="pinkbtn ps-3 mt-4" style={{ backgroundColor: '#BC005A', border: '2px solid white' }}>
                <b className="register1">REGISTER</b>
              </Button>
            </Col>
            <Col className='text-start'>
              <Button className="transbtn ps-4 pe-4 mt-4" style={{ backgroundColor: 'black', color: '#BC005A', border: '2px solid #BC005A' }}>
                <b className="login2">LOGIN</b>
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Header;
