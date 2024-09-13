import { NavLink, Outlet } from 'react-router-dom';
import './AdminPage.css';


function AdminPage() {
  return (
    <div className="admin-container">
      <h1 className='admin-h1'>Admin Panel</h1>
      <nav className='admin-nav'>
        <NavLink className='link' activeclassname='active-link-admin' to="start-date">Add start Date</NavLink>
        <NavLink className='link' activeclassname='active-link-admin' to="off-days">Add Holidays</NavLink>
      </nav>
      <div className='outlet'>
        <Outlet/>
      </div>
    </div>
  );
}


export default AdminPage;
