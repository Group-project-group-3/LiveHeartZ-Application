import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./OtpRegistration.css";
import { Container,Button, Form } from 'react-bootstrap';

export default function OtpRegistration(){
    return(
        <div>
            <Header></Header>
            <div className="text-center">
                <p className="h3 mb-4 mt-3">Hi <span className="name">Nufla</span> Thank for Register With Us</p>
                <p className="h4 text-muted mb-3">Enter 4 Digit Code which Receive In Your Mobile No : <span className="mobileNumber">+94753334172</span></p>
                <Container className="mb-5 p-4" style={{ backgroundColor: '#CFCFCF', maxWidth: '50%', width: '100%', margin: 'auto' ,borderRadius:"10px"}}>
                    
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
}
