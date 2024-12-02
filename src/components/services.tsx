import { Container, Row, Col } from 'react-bootstrap'
import aab_fencing from './imgs/aab_fencing.webp'
import hotel_work from './imgs/hotel_work.jpeg'
import carwash_interior from './imgs/carwash_interior.jpeg'
import mri4 from './imgs/mri4.png'




const home = () => {
    document.title = "Services - All Access Building Solutions"
    return(
        <Container fluid className='home-container'>
            <Container fluid className="container-fluid servicespage-bgimage">
            </Container>
            <Container fluid className="about-section-container">
                <h2 className="about-header"> Services </h2>
                <p className="main-text"> We specilize in healthcare construction and commercial applications. Our expertise 
                in healthcare construction allows us to provide specialized services that meet your specific needs 
                and industry regulations. We offer a wide range of construction services, including 
                pre-construction planning, design, permitting, construction, and project management. <br></br><br></br>Additionally, we pride 
                ourselves on completing construction projects quickly, which may be particularly important in 
                the healthcare industry where delays could have significant consequences. With our specialization 
                in healthcare and efficient construction processes, we are well-equipped to provide 
                high-quality services to all clients.</p>
            </Container>
            <Container fluid>
                <div className="container-fluid servicespage-bgimage2">
                    <h2 className='home-text' style={{fontWeight:"700"}}>Company leaders have proven expertise in project management, scheduling, 
                    job cost accounting, quality control, and project closeout.</h2>
                    <Container fluid style={{ display:"flex" , justifyContent:"center" }}>
                    <a href='/healthcare' className='services-button' style={{right:"2%"}}>Healthcare </a>
                    <a href='/commercial' className='services-button' style={{left:"2%"}}>Commercial </a>
                    </Container>
                </div>
            </Container>
            <br></br>
            <Container className="dual">
                <Row>
                        <Col md={12} lg={6} className="dual-container">
                            <h2 className="dual-header"> Our Process </h2>
                            <h1 className="main-text" style={{textAlign:"left", fontSize:"min(14pt, 4vw)", padding:"0"}}> 
                            <br></br>
                            Design Build
                            </h1>
                            <p className="bullet-text" style={{textAlign:"left", padding:"0"}}> 
                            <ul>
                                <li>Collaborative Working Relationships with Consultants, Suppliers, & Subcontractors </li>
                                <li>Total Quality Assurance</li>
                                <li>Project Updates and Check-Ins</li>
                                <li>Critical Pathway to On-Time Delivery</li>
                                <li>Resolute Focus on Safety</li>
                            </ul>
                            </p>
                            <h1 className="main-text" style={{textAlign:"left", fontSize:"min(16pt, 4vw)", padding:"0"}}> 
                            General Contracting
                            </h1>
                            <p className="bullet-text" style={{textAlign:"left", padding:"0"}}> 
                            <ul>
                                <li>Pre-Construction Services</li>
                                <li>Bid Management</li>
                                <li>Comprehensive Estimating & Scheduling</li>
                                <li>Project Cost Analysis</li>
                                <li>Subcontractor Management</li>
                                <li>Closeout Management</li>
                                <li>Warranty</li>
                            </ul>
                            </p>
                            <h1 className="main-text" style={{textAlign:"left", fontSize:"min(16pt, 4vw)", padding:"0"}}> 
                            Construction Management
                            </h1>
                            <p className="bullet-text" style={{textAlign:"left", padding:"0"}}> 
                            <ul>
                                <li>Design Consultations</li>
                                <li>Value Engineering</li>
                                <li>Maintain Schedules</li>
                                <li>Project Cost Administration</li>
                                <li>Property Administration</li>
                                <li>Safety Logistics and Implementation</li>
                                <li>Budget Tracking and Scheduling</li>
                            </ul>
                            </p>
                        </Col>
                        <Col md={12} lg={6}className="dual-pic-container"></Col>
                    </Row>
            </Container>
            <br></br>
            <Container className="bottom-pic-container">
                <img src={aab_fencing} alt="" className="home-pic"></img>
                <img src={carwash_interior} alt="" className="home-pic"></img>
                <img src={hotel_work} alt="" className="home-pic"></img>
                <img src={mri4} alt="" className="home-pic"></img>

            </Container>
        </Container>
    )
}

export default home;