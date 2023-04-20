import { Container, Col } from 'react-bootstrap';
import primary_white_red from './imgs/AllAccessBuilding_logo_wide_white_red.png';
import "./styles.css";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div style={{ backgroundColor: 'rgb(41,58,97)', color : 'rgb(240,240,240)'}}>
            <br></br>
                <Container>
                    <a href="/"><img src={primary_white_red} alt="" width="330" height="110"></img></a>
                </Container>
                <br></br>

                <Container className="footer-text-container">

                <Col className="footer-item-container">
                    <Link to='/' className='footer-link-text' >HOME</Link>
                </Col>

                <Col className="footer-item-container">
                    <Link to='/about' className='footer-link-text' >ABOUT</Link>
                </Col>

                <Col className="footer-item-container">
                    <Link to='/services' className='footer-link-text' >SERVICES</Link>
                </Col>

                <Col className="footer-item-container">
                    <Link to='/healthcare' className='footer-link-text' >HEALTHCARE</Link>
                </Col>

                <Col className="footer-item-container">
                    <Link to='/commercial' className='footer-link-text' >COMMERCIAL</Link>
                </Col>

                <Col className="footer-item-container">
                    <Link to='/contact' className='footer-link-text' >CONTACT</Link>
                </Col>
                </Container>

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