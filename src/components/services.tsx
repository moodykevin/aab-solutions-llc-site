import { Container, Row, Col } from 'react-bootstrap'
import mri1 from './imgs/mri1.png'
import mri2 from './imgs/mri2.png'
import mri3 from './imgs/mri3.png'
import mri4 from './imgs/mri4.png'




const home = () => {
    document.title = "Services - A.A.B. Solutions L.L.C."
    return(
        <Container fluid className='home-container'>
            <Container fluid className="container-fluid servicespage-bgimage">
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
                            <h2 className="dual-header"> Lorem Ipsum </h2>
                            <p className="main-text" style={{textAlign:"left", fontSize:"min(14pt, 3vw)", padding:"0"}}> 
                            For our commercial clients, we offer a wide range of services, including site selection, design and construction, and 
                            project management. We understand that commercial construction projects require careful planning and execution to ensure 
                            that they meet our clients' unique needs. That's why we work closely with our commercial clients to develop a customized 
                            plan that meets their goals and budget.
                            <br></br><br></br>
                            In the healthcare sector, we offer specialized services to ensure that our clients' facilities meet the highest standards
                             of safety and functionality. Our team has extensive experience in healthcare construction and can handle everything 
                             from new construction to renovation and remodeling of existing facilities. We understand the unique needs of healthcare 
                             facilities and are committed to delivering exceptional results that meet our clients' needs. </p>
                        </Col>
                        <Col md={12} lg={6}className="dual-pic-container"></Col>
                    </Row>
            </Container>
            <br></br>
            <Container className="bottom-pic-container">
                <img src={mri2} alt="" className="home-pic"></img>
                <img src={mri3} alt="" className="home-pic"></img>
                <img src={mri1} alt="" className="home-pic"></img>
                <img src={mri4} alt="" className="home-pic"></img>

            </Container>
        </Container>
    )
}

export default home;