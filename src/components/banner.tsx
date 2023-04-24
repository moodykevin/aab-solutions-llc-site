import { Container, Navbar, Nav } from 'react-bootstrap'
import primary_wide from './imgs/AllAccessBuilding_logo_wide.png'
import "./styles.css"

const Banner = () => {
    return (
        <div className="banner">
            <Container>
            <Navbar className='colorBanner' expand="lg" variant="light" id="banner" style={{ padding: "0px 0px 0px 0px" }} >
                <Navbar.Brand href="/" >
                </Navbar.Brand>
                <Navbar.Brand href="/" >
                    <h1><img src={primary_wide} alt="" width="285" height="95"></img></h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" style={{ padding: "15px" }}>
                    <Nav>
                        <Nav.Link className="banner-link" href="/">
                            Home
                        </Nav.Link>
                        
                        <Nav.Link className="banner-link" href="/about">
                            About
                        </Nav.Link>
                        
                        <Nav.Link className="banner-link" href="/services">
                            Services  
                        </Nav.Link>
                        
                        <Nav.Link className="banner-link" href="/healthcare">
                            Healthcare 
                        </Nav.Link>
                        
                        <Nav.Link className="banner-link" href="/commercial">
                            Commerical
                        </Nav.Link>

                        <Nav.Link className="banner-link" href="/contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
        
    )
}

export default Banner;