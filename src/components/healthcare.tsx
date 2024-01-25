import { Container, Carousel } from 'react-bootstrap'

import mri1 from './imgs/mri1.png'
import mri2 from './imgs/mri2.png'
import mri3 from './imgs/mri3.png'
import mri4 from './imgs/mri4.png'
import mri_room_1 from './imgs/mri_room_1.png'
import mri_room_2 from './imgs/mri_room_2.png'
import waiting from './imgs/waiting.png'






const home = () => {
    document.title = "Healthcare - All Access Building Solutions"
    return(
        <Container fluid className='home-container'>
            <Container fluid className="container-fluid healthcarepage-bgimage">
            </Container>
            <Container fluid className="about-section-container">
                <h2 className="about-header"> Healthcare </h2>
                <p className="main-text"> We specialize in medical facility construction that provide patients and providers
                with the best possible care. Our team of expert builders and designers work hand-in-hand with healthcare professionals
                 to create facilities that are functional, efficient, and polished. We understand the unique requirements
                  of healthcare construction and use our expertise to deliver high-quality projects that meet or exceed our clients' 
                  expectations. Whether you are building a new medical facility or renovating an existing one, we have the experience 
                  and skills to get the job done right.</p>
            </Container>
            <Container fluid >
                <div className="container-fluid aboutpage-bgimage2" >
                        <br></br>
                        <Container>
                        <Container className="about-img-container">
                        <h2 className="about-section-header"> Customer Service is Our Priority </h2>
                        <p className="about-section-text"> From the initial consultation to the final walkthrough, we work closely with 
                        our healthcare clients to ensure that their construction project is completed to their satisfaction. We believe 
                        that our commitment to customer service sets us apart from other construction companies and has helped us build 
                        a reputation as a trusted partner in the healthcare sector.
                            <br></br><br></br>
                            Our commitment to quality control means that our healthcare clients can trust that their construction project
                            will be completed to the highest standards, with no compromises on safety, durability, or functionality. </p>
                        </Container>
                        </Container>                        
                    <br></br>
                </div>
                <br></br>
            </Container>
            <br></br>
            <Container className="carousel-container">
            <Carousel 
            variant="light"
            nextIcon= {<span aria-hidden="true" className="carousel-control-next-icon" />}
            interval={4000}
            touch={true}
            >
                <Carousel.Item>
                    <img src={mri1} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mri_room_1} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mri2} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mri_room_2} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mri3} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mri4} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={waiting} alt="" className="carousel-pic"></img>
                </Carousel.Item>
            </Carousel>
            </Container>
            <br></br>
        </Container>
    )
}

export default home;