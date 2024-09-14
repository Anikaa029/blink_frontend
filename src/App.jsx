import AdminPage from "./components/Admin/AdminPage";
import NotFoundPage from "./components/NotFound";
import HomePage from "./components/Home/HomePage";
import SignUp from "./components/Signup/Signup";
import Login from "./components/LoginPage/LoginPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import MasterRoutine from "./components/RoutineAll/routineall";
import Layout from "./components/Common/Layout/layout";
import "./App.css";

export default function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="admin" element={
            <RequireAuth>
              <AdminPage />
            </RequireAuth>} >
            <Route index element={<AdminForm />} />
            <Route path="start-date" element={<AdminForm />} />
            <Route path="off-days" element={<OffDays />} />
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
          <Route path="routineall" element={<MasterRoutine />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
  );
}
