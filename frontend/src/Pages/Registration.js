import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Registration.css";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export default function Registration() {
  return (
    <div>
      <Header></Header>
      <div className="h1 text-center fw-bold mt-2 mb-0 p-3">Registration Form</div>
      <Container className="p-5 text-start">
        <div className="loginDetails">
          <div className="h3 text-muted fw-bold p-3">Login Details</div>
          <Container className="mb-5">
            <Form>
              <Row>
                <Col xs={12} lg={6} >
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="h6 p-2">Full Name</Form.Label>
                    <Form.Control className="bg-light" type="text" placeholder="Enter full name" />
                  </Form.Group>
                </Col>
                <Col xs={12} lg={6} >
                  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label className="h6 p-2">Phone Number</Form.Label>
                    <Form.Control className="bg-light" type="number" placeholder="Enter phone number" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={6} >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="h6 p-2">Email Address</Form.Label>
                    <Form.Control className="bg-light" type="email" placeholder="Enter email address" />
                  </Form.Group>
                </Col>
                <Col xs={12} lg={6} >
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="h6 p-2">Create Password</Form.Label>
                    <Form.Control className="bg-light" type="password" placeholder="Minimum length 6" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
        <div className="donorDetails">
          <div className="h3 text-muted fw-bold p-3">Donor Details</div>
          <Container className="mb-5">
            <Form>
              <Row>
                <Col xs={12} lg={6} >
                  <Form.Group className="mb-3" controlId="formBloodGroup">
                    <Form.Label className="h6 p-2">Blood Group</Form.Label>
                    <Form.Select className="bg-light" aria-label="Select Blood Group">
                      <option>Select Your Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} lg={6} >
                  <Form.Group className="mb-3" controlId="formBirthDate">
                    <Form.Label className="h6 p-2">Birth Date</Form.Label>
                    <Form.Control className="bg-light" type="date" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={6} >
                  <Form.Group className="mb-3" controlId="formGender">
                    <Form.Label className="h6 p-2">Gender</Form.Label>
                    <Form.Select className="bg-light" aria-label="Select Gender">
                      <option>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} lg={6} >
                  <Form.Group className="mb-3" controlId="formLastDonationDate">
                    <Form.Label className="h6 p-2">Last Donation Date</Form.Label>
                    <Form.Control className="bg-light" type="date" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
        <div className="contactInformation">
          <div className="h3 text-muted fw-bold p-3">Contact Informations</div>
          <Container>
            <Row>
              <Col xs={12} lg={6} >
                <Form>
                  <Form.Group className="mb-3" controlId="formShowPhoneNumber">
                    <Form.Label className="h6 p-2">Show Phone Number</Form.Label>
                    <Form.Select className="bg-light" aria-label="Default select example">
                      <option>Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={12} lg={6} >
                <Form>
                  <Form.Group className="mb-3" controlId="formSmsAlert">
                    <Form.Label className="h6 p-2">SMS Alert</Form.Label>
                    <Form.Select className="bg-light" aria-label="Default select example">
                      <option>Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={4} >
                <Form>
                  <Form.Group className="mb-3" controlId="formProvince">
                    <Form.Label className="h6 p-2">Province</Form.Label>
                    <Form.Select className="bg-light" aria-label="Default select example">
                      <option>Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={12} lg={4} >
                <Form>
                  <Form.Group className="mb-3" controlId="formDistrict">
                    <Form.Label className="h6 p-2">District</Form.Label>
                    <Form.Select className="bg-light" aria-label="Default select example">
                      <option>Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={12} lg={4} >
                <Form>
                  <Form.Group className="mb-3" controlId="formRegion">
                    <Form.Label className="h6 p-2">Region</Form.Label>
                    <Form.Control className="bg-light" type="text" placeholder="Enter Region" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Form.Group className="mb-3 p-2" controlId="formAcceptTermsCheckbox">
              <Form.Check
                type="checkbox"
                required
                label="I Accept Terms & Conditions"
                
              />
            </Form.Group>
            <Button
              className="submitbtn ps-4 pe-4 fw-bold"
              type="submit"
              style={{ backgroundColor: '#BC005A', border: '2px solid white' }}
            >
              SUBMIT
            </Button>
          </Container>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}
