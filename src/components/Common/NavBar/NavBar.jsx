import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useAuth } from '../../Auth/auth';

const Navbar = () => {

  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  return (
    <nav className='nav-container home-nav'>
      <div className='nav-left'>
        <ul className='nav-ul'>
           <a href="https://www.cuet.ac.bd"><img src="/cuetlogo.png" className="logo" /></a>
          <li><Link to="/"><span style={{ fontWeight: "bold" }}>Home</span></Link></li>
          <li className="dropdown nav-dropdown">
            <Link><span style={{ fontWeight: "bold" }}>About ETE</span></Link>
            <div className="dropdown-content">
              <a href="/about">Introduction</a>
              <a href="#">Faculty List</a>
              <a href="/notice">Notice</a>
            </div>
          </li>
          <li><Link to="/academic"><span style={{ fontWeight: "bold" }}>Academic</span></Link></li>
          <li><Link to="/research"><span style={{ fontWeight: "bold" }}>Research</span></Link></li>
          <li><Link to="/contact-us"><span style={{ fontWeight: "bold" }}>Contact</span></Link></li>
          <li><Link to="/admin"><span style={{ fontWeight: "bold" }}>Admin</span></Link></li>
          <li><Link to="/routineall"><span style={{ fontWeight: "bold" }}>Master Routine</span></Link></li>
        </ul>
      </div>
      <div className='nav-right'>
        <ul className='nav-ul'>
          {
            !auth.user && (
              <li><Link to="/signup"><span style={{ fontWeight: "bold" }}>Sign Up</span></Link></li>
            )
          }
          {
            !auth.user && (
              <li><Link to="/login"><span style={{ fontWeight: "bold" }}>Login</span></Link></li>
            )
          }
          {
            auth.user && (
              <li><Link onClick={handleLogout}><span style={{ fontWeight: "bold" }}>Logout</span></Link></li>
            )
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
