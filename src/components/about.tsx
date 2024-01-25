import { Container } from 'react-bootstrap'
import mri1 from './imgs/mri1.png'
import interior_ventilation from './imgs/interior_ventilation.jpeg'
import hotel_lobby from './imgs/hotel_lobby.jpg'
import cement_pour from './imgs/cement_pour.jpeg'
import ge_healthcare from './assets/ge_healthcare.png'
import fujifilm from './assets/fujifilm.png'





const about = () => {
    document.title = "About - All Access Building Solutions"
    return(
        <Container fluid className='home-container'>
            <Container fluid className="container-fluid aboutpage-bgimage">
            </Container>
            <Container fluid className="about-section-container">
                <h2 className="about-header"> About Us</h2>
                <p className="main-text"> All Access Building Solutions LLC. specializes in a comprehensive range of
                new construction services, offering turnkey design build, franchise development, and commercial additions
                & upfits. With a decade of dedicated expertise, we have successfully developed and delivered over one million
                square feet in cutting-edge medical and radiology spaces. Our seasoned team excels not only in constructing new
                facilities but also in executing renovations for diverse sectors, including retail, hospitality, institutional,
                government, and academic projects. Trust us to bring innovation, precision, and excellence to every aspect of your
                construction needs.
</p>
            </Container>
            <br></br><br></br>
            <Container fluid >
                <div className="container-fluid aboutpage-bgimage2" >
                        <br></br>
                        <Container>
                        <Container className="about-img-container">
                        <h2 className="about-section-header">Why Us?</h2>
                        <p className="about-section-text">
                        <ol>
                            <li>Our team of highly experienced professionals has years of ground up vertical construction experience, with the tools to hit on-time opening dates.</li>
                            <br></br>
                            <li>Our project cost analysis and administration means that our clients receive the highest level of competency from the general contractor role to deliver projects within your budget needs.</li>
                            <br></br>
                            <li>Our service model enables us to align our resources to meet each client's need, which ensures clients receive the most efficient solution with the necessary expertise and experience required to get the job done.</li>
                            <br></br>
                            <li>All Access Building Solutions offers construction management services to help clients maximize their investment. We embrace a collaborative team approach at every step of development.</li>
                            <br></br>
                            <li>Our Company and team of professionals are work zone safety first and therefore can be innovative, strategic, and complete all aspects of the project while providing the most accurate solution to our client's issues.</li>
                        </ol>
                        </p>
                        </Container>
                        </Container>                        
                    <br></br>
                </div>
                <br></br><br></br><br></br>
            </Container>
            <Container fluid className="about-section-container">
                <h2 className="vendor-section-header"> We are a preffered vendor for multiple national corporations.</h2>
                    <Container fluid className="vendor-pic-container">
                    <img src={ge_healthcare} alt="" className="vendor-pic"></img>
                    <img src={fujifilm} alt="" className="vendor-pic"></img>
                    </Container>
            </Container>
            <Container className="bottom-pic-container">
                <img src={interior_ventilation} alt="" className="home-pic"></img>
                <img src={hotel_lobby} alt="" className="home-pic"></img>
                <img src={mri1} alt="" className="home-pic"></img>
                <img src={cement_pour} alt="" className="home-pic"></img>

            </Container>
        </Container>
    )
}

export default about;