import { Container } from 'react-bootstrap'
import mri1 from './imgs/mri1.png'
import mri2 from './imgs/mri2.png'
import mri3 from './imgs/mri3.png'
import mri4 from './imgs/mri4.png'




const home = () => {
    document.title = "Commercial - A.A.B. Solutions L.L.C."
    return(
        <Container fluid className='home-container'>
            <Container fluid className="container-fluid homepage-bgimage">
                <div >
                    <h1 className="header-text"> Commercial </h1>
                </div>
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