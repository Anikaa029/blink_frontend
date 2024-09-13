import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4 item">
            <h3>About</h3>
            <p>To know any information, please feel free to reach out with the following. Leave us a short message here!</p>
            <div className="contact-info">
              <div className="email">
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@example.com">azad@cuet.ac.bd</a>
              </div>
              <div className="phone">
                <i className="fas fa-phone"></i>
                <span>+8801783756981</span>
              </div>
              <div className="address">
                <i className="fas fa-map-marker-alt"></i>
                <a href="https://maps.app.goo.gl/d714NrBM6Lp6VBqz9" target="_blank" rel="noopener noreferrer">Academic Building 3, CUET</a>
              </div>
            </div>
            <p className="copyright">Copyright © ETE,CUET</p>
          </div>
          <div className="col-md-4 item">
            <div className="new">
              <h3>Quick Links</h3>
              <ul>
              <li><Link to="https://www.cuet.ac.bd/">About CUET</Link></li>
                <li><Link to="/notice">Notice</Link></li>
                <li><Link to="/about">About ETE</Link></li>
                <li><Link to="https://www.cuet.ac.bd/dept/ete/faculty-list">Faculty List</Link></li>
                <li><Link to="/research">Research</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 item">
            <h3>Send Message</h3>
            <form action="#" method="POST">
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <button className='footer-button' type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
