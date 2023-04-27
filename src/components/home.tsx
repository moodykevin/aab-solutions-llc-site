import { Container } from 'react-bootstrap'
import mri1 from './imgs/mri1.png'
import mri2 from './imgs/mri2.png'
import mri3 from './imgs/mri3.png'
import mri4 from './imgs/mri4.png'




const home = () => {
    document.title = "Home - A.A.B. Solutions L.L.C."
    return(
        <Container fluid className='home-container'>
            <Container fluid className="container-fluid homepage-bgimage">
            <br></br>
                <div className="header-container">
                    <h1 className="header-text"> "Together, We Can Build Anything." </h1>
                    <p className="header-subtext" > Design Building, General Contracting, & Construction Management </p>
                </div>
            </Container>
            <br></br>
            <Container fluid className="home-section-container">
                <h2 className="home-header"> Building Projects from Coast to Coast </h2>
                <p className="main-text"> Our team of professionals is dedicated to providing the highest quality 
                service and workmanship, while ensuring your project is completed on time and within budget. We understand 
                the unique requirements of healthcare construction and have the knowledge and experience to meet all necessary 
                regulations and standards. We'll work closely with you to establish a timeline that meets your needs while 
                ensuring that we deliver the highest quality workmanship.</p>
            </Container>
            <br></br>
            <Container fluid>
                <div className="container-fluid homepage-bgimage2">
                    <h2 className='home-text' style={{fontWeight:"700"}}>Our dedicated construction professionals have over 35 years of extensive 
                    experience in healthcare & commercial building.</h2>
                    <a href='/services' className='home-button'>Click To View Our Services</a>
                </div>
            </Container>
            <br></br>
            <Container fluid className="home-section-container">
                <h2 className="home-header"> Our Team and Mission </h2>
                <p className="main-text"> Our project management team is equipped with the skills and tools to plan, 
                execute, and control every aspect of your project. We understand the importance of maintaining a clear line 
                of communication with our clients, which is why we work closely with you to ensure that your project's 
                objectives and deadlines are met. With our extensive experience in the industry, we're well-versed in managing 
                projects of all sizes and complexities, and we'll work tirelessly to ensure your project's success.</p>
            </Container>
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