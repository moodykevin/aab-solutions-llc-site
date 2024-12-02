import { Container, Carousel } from 'react-bootstrap'
import aab_fencing from './imgs/aab_fencing.webp'
import carwash_bays from './imgs/carwash_bays.jpeg'
import carwash_exterior from './imgs/carwash_exterior.jpeg'
import cement_pour from './imgs/cement_pour.jpeg'
import exterior_crane from './imgs/exterior_crane.jpeg'
import hotel_lobby from './imgs/hotel_lobby.jpg'
import hotel_room from './imgs/hotel_room.jpeg'
import interior_lighting from './imgs/interior_lighting.jpeg'
import interior_ventilation from './imgs/interior_ventilation.jpeg'
import exterior_walls from './imgs/exterior_walls.jpeg'





const home = () => {
    document.title = "Commercial - All Access Building Solutions"
    return(
        <Container fluid className='home-container'>
            <Container fluid className="container-fluid commercialpage-bgimage">
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
                        <p className="about-section-text"> We understand that commercial facilities need to be operational and accessible 
                        to customers throughout the construction process. Our experience includes retail, hospitality, institutional,
                        government and academics.
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
                    <img src={aab_fencing} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={carwash_bays} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={carwash_exterior} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={cement_pour} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={exterior_crane} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={hotel_lobby} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={hotel_room} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={interior_lighting} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={interior_ventilation} alt="" className="carousel-pic"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={exterior_walls} alt="" className="carousel-pic"></img>
                </Carousel.Item>
            </Carousel>
            </Container>
            <br></br>
        </Container>
    )
}

export default home;