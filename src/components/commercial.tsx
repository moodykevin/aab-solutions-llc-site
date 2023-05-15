import { Container, Carousel } from 'react-bootstrap'
import mri1 from './imgs/mri1.png'
import mri2 from './imgs/mri2.png'
import mri3 from './imgs/mri3.png'
import mri4 from './imgs/mri4.png'




const home = () => {
    document.title = "Commercial - A.A.B. Solutions L.L.C."
    return(
        <Container fluid className='home-container'>
            <Container fluid className="container-fluid aboutpage-bgimage">
            </Container>
            <Container fluid className="about-section-container">
                <h2 className="about-header"> Commercial </h2>
                <p className="main-text"> As a leading provider of commercial construction services, All Access specializes
                in creating buildings that meet the specific needs of your business. Our team of expert builders and 
                designers have extensive experience in commercial construction, and use their knowledge and skills to
                deliver projects that are functional and efficienct. Whether you need a new 
                office building, retail space, or industrial facility, we are dedicated to providing you with 
                the highest quality construction services. Our commitment to excellence and attention to detail 
                ensure that your project is completed on time, on budget, and to your complete satisfaction</p>
            </Container>
            <Container fluid >
                <div className="container-fluid aboutpage-bgimage2" >
                        <br></br>
                        <Container>
                        <Container className="about-img-container">
                        <h2 className="about-section-header"> Speed and Efficiency </h2>
                        <p className="about-section-text"> In the commercial sector, speed and efficiency are essential. That's 
                        why we have developed a reputation for completing projects quickly and efficiently, without 
                        compromising on quality. We understand that commercial facilities need to be operational and accessible 
                        to customers throughout the construction process. 
                            <br></br><br></br>
                            We work closely with our clients to develop a timeline that 
                            minimizes disruption and ensures that the project is completed on time and within budget. 
                            Our speed and efficiency have helped us become a go-to firm for commercial projects, 
                            and we take pride in delivering results that exceed our clients' expectations. </p>
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
                    <img src={mri2} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mri3} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mri1} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mri2} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={mri3} alt="" className="carousel-pic"></img>
                </Carousel.Item>
            </Carousel>
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