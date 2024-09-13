import AdminPage from "./components/Admin/AdminPage";
import NotFoundPage from "./components/NotFound";
import HomePage from "./components/Home/HomePage";
import SignUp from "./components/Signup/Signup"
import Login from "./components/LoginPage/LoginPage";
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Common/NavBar/NavBar';
import Footer from './components/Common/Footer/Footer'
import AboutPage from "./components/About/AboutPage";
import SimulationLab from "./components/Lab/SimulationLab/SimulationLab";
import CommunicationLab from "./components/Lab/Communication/CommunicationLab";
import ElectronicsLab from "./components/Lab/Electronics/ElectronicsLab";
import ResearchPage from "./components/Research/ResearchPage";
import ContactPage from "./components/Contact/ContactPage";
import AcademicPage from "./components/Academic/AcademicPage";
import OffDays from "./components/OffDays/OffDays";
import AdminForm from "./components/AdminForm/AdminForm";
import { RequireAuth } from "./components/RequireAuth";
import Notice from "./components/Notice/Notice";
import MasterRoutine from "./RoutineAll/routineall";
import './App.css'
export default function App() {
  return (
    <div className="app-container">
      
      <div className="app-nav">
        <NavBar/> 
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="admin" element={<RequireAuth><AdminPage /> </RequireAuth>} >
          <Route index element={<AdminForm/>} />
          <Route path="start-date" element={<AdminForm/>} />
          <Route path="off-days" element={<OffDays/>} />
        </Route>
        <Route path="academic" element={<AcademicPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="simulation" element={<SimulationLab />} />
        <Route path="communication" element={<CommunicationLab />} />
        <Route path="electronics" element={<ElectronicsLab />} />
        <Route path="research" element={<ResearchPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="notice" element={<Notice />} /> 
        <Route path="*" element={<NotFoundPage />} />
        <Route path="routineall" element={<MasterRoutine />} />
      </Routes>
      <div className="footer "> 
      <Footer/>
      </div>
     
    </div>

  );
}
