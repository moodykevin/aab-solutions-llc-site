import { Container } from 'react-bootstrap'
import mri1 from './imgs/mri1.png'
import mri2 from './imgs/mri2.png'
import mri3 from './imgs/mri3.png'
import mri4 from './imgs/mri4.png'
import goodwill from './imgs/goodwill.png'
import red from './imgs/red.png'
import unicef from './imgs/unicef.png'
import wwf from './imgs/wwf.png'





const about = () => {
    document.title = "About - A.A.B. Solutions L.L.C."
    return(
        <Container fluid className='home-container'>
            <Container fluid className="container-fluid aboutpage-bgimage">
            </Container>
            <Container fluid className="about-section-container">
                <h2 className="about-header"> About Us</h2>
                <p className="main-text"> Our company is a leader in the construction industry, with a focus on healthcare
                 and commercial zones. We have a team of experienced professionals who specialize in delivering high-quality, 
                 cost-effective projects that are completed on time. Our commitment to excellence is reflected in every aspect 
                 of our work, from project planning and design to construction and maintenance.</p>
            </Container>
            <Container fluid >
                <div className="container-fluid aboutpage-bgimage2" >
                        <br></br>
                        <Container>
                        <Container className="about-img-container">
                        <h2 className="about-section-header">Our History</h2>
                        <p className="about-section-text"> Founded in XXXX by XXXXXX XXXXXX, All Access Building Solutions LLC. 
                        is a leading construction company that specializes in healthcare and commercial zones in XXXXXXXXX. <br></br><br></br>
                        We have extensive experience in healthcare construction, working on a wide range of projects from 
                        small clinics to large hospitals.</p>
                        </Container>
                        </Container>                        
                    <br></br>
                </div>
                <br></br>
            </Container>
            <Container fluid className="about-section-container">
                <h2 className="charity-section-header"> We are a proud suporter of a number of local and national charities.</h2>
                    <Container fluid className="charity-pic-container">
                    <img src={goodwill} alt="" className="charity-pic"></img>
                    <img src={unicef} alt="" className="charity-pic"></img>
                    <img src={red} alt="" className="charity-pic"></img>
                    <img src={wwf} alt="" className="charity-pic"></img>
                    </Container>
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

export default about;