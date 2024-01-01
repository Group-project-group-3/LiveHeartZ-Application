import "./Home.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap';

export default function Home(){
    return(
        <div>
            <Header></Header>
            <div>
                <Container className="mt-5 mb-3">
                        <Row>
                            <Col className="mt-4" xs={12} lg={6}>
                        
                                <h1 className="donate-blood">
                                    {`Donate Blood, `}
                                </h1>
                                <h1 className="give">
                                    <p className="give1">{`Give the `}</p>
                                    <p className="give1">{`Gift of `}</p>
                                    <p className="give1">{`Life`}</p>
                                </h1>
                                
                                <span className="para1">
                                    By donating blood with LiveHeartZ, many lives are saved and hope
                                    is given to many whose situation may otherwise be hopeless.
                                    Blood donors give such patients a second chance of life.
                                </span>
                            </Col>
                            <Col className="ms-1 ps-3 pt-4 pb-4 pe-3" style={{ backgroundColor: '#CFCFCF', borderRadius: '10px' }}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBloodGroup">
                                        <Form.Label className="h6 p-2">Blood Group</Form.Label>
                                        <Form.Select className="bg-light" aria-label="Select Blood Group" aria-labelledby="formBloodGroup">
                                            <option value="">Select Your Blood Group</option>
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

                                    <Form.Group className="mb-3" controlId="formProvince">
                                        <Form.Label className="h6 p-2">Province</Form.Label>
                                        <Form.Select className="bg-light" aria-label="Select Province" aria-labelledby="formProvince">
                                            <option value="">Select</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formDistrict">
                                        <Form.Label className="h6 p-2">District</Form.Label>
                                        <Form.Select className="bg-light" aria-label="Select District" aria-labelledby="formDistrict">
                                            <option value="">Select</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Button className="find-blood-button ps-4 pe-4 mt-4" style={{ backgroundColor: '#CFCFCF', color: '#BC005A', border: '2px solid #BC005A' }}>
                                        <b className="login2">Find Blood</b>
                                    </Button>
                                </Form>
                            </Col>

                        </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
}
