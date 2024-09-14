import './layout.css';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout-header">
        <Navbar/> 
      </header>
      <main className="layout-main">{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;