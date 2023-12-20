import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "./css/Request.css"
import { Form, Col, Row, Button } from "react-bootstrap";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Request() {
  return (
    <>
      <Header/>
      <div className="form1">
        <Form>
            <h2 className="text-center" style={{ fontWeight:"bold" }}>Request for Blood</h2>
            <div className="form2">
            <h3 className="topic2" style={{ color: "dimgray", marginTop:60 }}>Patient Details</h3>
            <Row>
                <Col>
                <Form.Label className="label"> Patient Name</Form.Label>
                <Form.Control className="text1" placeholder="Enter name" />
                </Col>
                <Col>
                <Form.Label className="label">Blood Group</Form.Label>
                <Form.Select defaultValue="Choose..." className="text1">
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Label className="label">Hospital Name</Form.Label>
                <Form.Control className="text1" placeholder="Enter Hospital name" />
                </Col>
                <Col>
                <Form.Label className="label">Doctor's Name</Form.Label>
                <Form.Control className="text1" placeholder="Enter Doctor's name" />
                </Col>
            </Row>
            <Row>
            <Col>
                <Form.Label className="label">District</Form.Label>
                <Form.Select defaultValue="Choose..." className="text1">
                    <option>Vavuniya</option>
                    <option>Jaffna</option>
                    <option>Anuradhapura</option>
                    <option>Kurunegala</option>
                    <option>Kaluthara</option>
                    <option>Gampaha</option>
                    <option>Colombo</option>
                    <option>Puttalam</option>
                </Form.Select>
                </Col>
                <Col>
                <Form.Label className="label">Region</Form.Label>
                <Form.Select defaultValue="Choose..." className="text1">
                    <option>Nelukkulam</option>
                    <option>Mannar</option>
                    <option>Wariyapola</option>
                    <option>Aluthama</option>
                    <option>Mathugama</option>
                    <option>Nugegoda</option>
                    <option>Chilaw</option>
                    <option>Kadawatha</option>
                </Form.Select>
                </Col>
            </Row>
            </div>

            <div className='form3'>
            <h3 className="topic2" style={{ color: "dimgray", marginTop:60 }}>Contact Details</h3>
            <Row>
                <Col>
                <Form.Label className="label">Contact Name</Form.Label>
                <Form.Control className="text1" placeholder="Enter name" />
                </Col>
                <Col>
                <Form.Label className="label">Mobile Number</Form.Label>
                <Form.Control className="text1" placeholder="Enter mobile number" />
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Label className="label">Priorty</Form.Label>
                <Form.Select defaultValue="Choose..." className="text1">
                    <option>Danger</option>
                    <option>Quickly</option>
                    <option>Normal</option>
                </Form.Select>
                </Col>
                <Col>
                <Form.Label className="label">Date when Need</Form.Label>
                <Form.Control className="text1" type='date'/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Label className="label">Other Message</Form.Label>
                <Form.Control className="text_msg" placeholder="Enter your message" as="textarea"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button className="pinkbtn ps-3 mt-4" style={{ backgroundColor: '#BC005A', border: '0px solid white', borderRadius:6 }}>
                <b className="btn_submit" style={{fontSize: 13, textDecoration:"none"}}>SUBMIT</b>
                </Button>
                </Col>
            </Row>
            </div>
        </Form>
        </div>
      <Footer/>
    </>
  )
}
