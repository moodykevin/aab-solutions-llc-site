import { Container, Row, Col } from 'react-bootstrap'
import mri1 from './imgs/mri1.png'
import mri2 from './imgs/mri2.png'
import mri3 from './imgs/mri3.png'
import mri4 from './imgs/mri4.png'




const home = () => {
    return(
        <Container fluid className='home-container'>
            <Container fluid className="container-fluid aboutpage-bgimage">
            </Container>
            <Container fluid className="about-section-container">
                <h2 className="about-header"> Services </h2>
                <p className="main-text"> All Access Building Solutions L.L.C. specializes in healthcare construction, 
                particularly medical imaging facilities, while also offering commercial services. Our expertise 
                in healthcare construction allows us to provide specialized services that meet the specific needs 
                and regulations of our industry. We offer a wide range of construction services, including 
                pre-construction planning, design, construction, and project management. <br></br><br></br>Additionally, we pride 
                ourselves on completing construction projects quickly, which may be particularly important in 
                the healthcare industry where delays could have significant consequences. With our specialization 
                in healthcare and efficient construction processes, we are well-equipped to provide 
                high-quality services to all clients.</p>
            </Container>
            <Container fluid>
                <div className="container-fluid servicespage-bgimage">
                    <h2 className='home-text'>Company leaders have proven expertise in project management, scheduling, 
                    job cost accounting, site supervision, quality control, building commissioning and project closeout</h2>
                    <Container fluid style={{ display:"flex" , justifyContent:"center" }}>
                    <a href='/healthcare' className='services-button' style={{right:"2%"}}>Healthcare Services</a>
                    <a href='/commercial' className='services-button' style={{left:"2%"}}>Commercial Services</a>
                    </Container>
                </div>
            </Container>
            <br></br>
            <Container className="dual">
                <Row>
                        <Col md={6} className="dual-container">
                            <h2 className="dual-header"> Services </h2>
                            <p className="dual-text"> All Access Building Solutions L.L.C. specializes in healthcare construction, 
                            particularly medical imaging facilities, while also offering commercial services. Our expertise 
                            in healthcare construction allows us to provide specialized services that meet the specific needs 
                            and regulations of our industry. We offer a wide range of construction services, including 
                            pre-construction planning, design, construction, and project management. <br></br><br></br>Additionally, we pride 
                            ourselves on completing construction projects quickly, which may be particularly important in 
                            the healthcare industry where delays could have significant consequences. With our specialization 
                            in healthcare and efficient construction processes, we are well-equipped to provide 
                            <br></br><br></br>Additionally, we pride 
                            ourselves on completing construction projects quickly, which may be particularly important in 
                            the healthcare industry where delays could have significant consequences. With our specialization 
                            in healthcare and efficient construction processes, we are well-equipped to provide 
                            high-quality services to all clients.</p>                        </Col>
                        <Col md={6} className="dual-pic-container"></Col>
                    </Row>
            </Container>
            <Container className="home-pic-end">
                <img src={mri2} alt="" className="home-pic"></img>
                <img src={mri3} alt="" className="home-pic"></img>
                <img src={mri1} alt="" className="home-pic"></img>
                <img src={mri4} alt="" className="home-pic"></img>

            </Container>
        </Container>
    )
}

export default home;