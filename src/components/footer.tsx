import { Container, Col, Row } from 'react-bootstrap';
import primary_white_red from './imgs/AllAccessBuilding_logo_wide_white_red.png';
import "./styles.css";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div style={{ backgroundColor: 'rgb(41,58,97)', color : 'rgb(240,240,240)'}}>
            <br></br>
            <a href="/" className="logo-container"><img src={primary_white_red} alt=""></img></a>
            <br></br>
            <Row className="footer-text-container">

            <Col xs = {12} sm={4} md={4} lg={2} className="footer-item-container">
                <Link to='/' className='footer-link-text' >HOME</Link>
            </Col>

            <Col xs = {12} sm={4} md={4} lg={2} className="footer-item-container">
                <Link to='/about' className='footer-link-text' >ABOUT</Link>
            </Col>

            <Col xs = {12} sm={4} md={4} lg={2} className="footer-item-container">
                <Link to='/services' className='footer-link-text' >SERVICES</Link>
            </Col>

            <Col xs = {12} sm={4} md={4} lg={2} className="footer-item-container">
                <Link to='/healthcare' className='footer-link-text' >HEALTHCARE</Link>
            </Col>

            <Col xs = {12} sm={4} md={4} lg={2} className="footer-item-container">
                <Link to='/commercial' className='footer-link-text' >COMMERCIAL</Link>
            </Col>

            <Col xs = {12} sm={4} md={4} lg={2} className="footer-item-container">
                <Link to='/contact' className='footer-link-text' >CONTACT</Link>
            </Col>
            </Row>
            <Container>
                <div className='text-center' style={{ justifyContent:'center', fontSize:"small", color:"rgb(220,220,220)" }}>
                    <br></br>
                    © 2023, All Access Building Solutions L.L.C.
                    <br></br>
                    ____________
                </div>
        </Container>
        </div>
    )
}

export default Footer;