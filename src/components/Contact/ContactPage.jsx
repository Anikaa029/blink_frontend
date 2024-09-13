import './ContactPage.css'
const ContactPage = () => {
  return (
      <div className="contact">
          <div className="contact-content">
              <h2>Contact Us</h2>
              <p>Please feel free to contact us using the form below for any questions regarding admissions, programs, events, or any other general inquiries</p>
          </div>
          <div className="contact-container">
              <div className="contactInfo">
                  <div className="contact-box">
                      <div className="icon"><i className="fa fa-street-view" aria-hidden="true"></i></div>
                      <div className="text">
                          <h3>Address</h3>
                          <p>Pahartoli, Raozan. <br /> Chittagong-4349, Bangladesh</p>
                      </div>
                  </div>
                  <div className="contact-box">
                      <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                      <div className="text">
                          <h3>Email</h3>
                          <p>azad@cuet.ac.bd</p>
                      </div>
                  </div>
                  <div className="contact-box">
                      <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                      <div className="text">
                          <h3>Phone</h3>
                          <p>+8801783756981</p>
                      </div>
                  </div>
              </div>
              <div className="contactform">
                  <form>
                      <h2>Send Message</h2>
                      <div className="inputbox">
                          <input type="text" name="" required="required" />
                          <span>Full Name</span>
                      </div>
                      <div className="inputbox">
                          <input type="text" name="" required="required" />
                          <span>Email</span>
                      </div>
                      <div className="inputbox">
                          <textarea required="required"></textarea>
                          <span>Type your Message...</span>
                      </div>
                      <div className="inputbox">
                          <input type="submit" name="" value="Submit" />
                      </div>
                  </form>
              </div>
          </div>
      </div>
  );
};

export default ContactPage