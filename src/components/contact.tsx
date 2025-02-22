import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap'



const Contact = () => {
  document.title = "Contact - All Access Building Solutions"
  function sendEmail(e: any) {
    e.preventDefault();
    emailjs.sendForm('AAB_Service', 'AAB_Email_Template', e.target, '_ZjNjzqvESvjOCGJB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("Thank you for submitting! All inquiries will be responded to within 24 hours.");
    };

    return (
      <form onSubmit={sendEmail}>
        <Container fluid className='contact-container'>
          <br></br>
                <div className="container-fluid aboutpage-bgimage2">
                        <br></br>
                        <Container>
                        <Container className="about-img-container">
                          <br></br>
                          <h2 className="contact-section-header">Contact</h2>
                          <h2 className="contact-section-text">2240 Woolbright Road</h2>
                          <h2 className="contact-section-text">Suite 416</h2>
                          <h2 className="contact-section-text">Boynton Beach, FL 33426</h2>
                          <a href="tel:561-337-4403"><h2 className="contact-section-text" >561-337-4403</h2></a>
                          <br></br>
                          <p className="contact-section-text">Send us a message or call us about your project. All inquiries will be responded to within 24 hours. </p>
                          <br></br><br></br>
                          <div className="input-container">
                            <input type="text" name="name" required/>
                            <label>Name  *</label>
                          </div>
                          <br></br>

                          <div className="input-container">
                            <input type="email" name="email" required/>
                            <label>Email  *</label>		
                          </div>
                          <br></br>

                          <div className="input-container">
                            <input type="text" name="phone" />
                            <label>Phone</label>		
                          </div>
                          <br></br>

                          <div className="input-container">
                            <input type="text" name="company" />
                            <label>Company</label>		
                          </div>
                          <br></br>

                          <div className="textarea-container">
                          <br></br>
                            <textarea className="textarea" name="message" required/>
                            <label>Message  *</label>
                          </div>
                          <input type="submit" className="contact-submit" value="Send" />
                          </Container>
                        </Container>                        
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </Container>

    </form>
    );
  };
  
  export default Contact;
