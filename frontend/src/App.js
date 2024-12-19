import './App.css';
import Navbar from './common/components/Navbar';
import { BrowserRouter,Route,Routes,useLocation } from 'react-router-dom';
import Homepage from './common/pages/Homepage';
import About from './common/pages/About';
import Contact from './common/pages/Contact';
import LoginPage from './common/pages/LoginPage';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './admin/Dashboard';
import ProtectedRoute from './admin/ProtectedRoute';

export default function App() {
  const location = useLocation();

  // Define routes where the Navbar should not appear
  const hiddenNavbarRoutes = ["/dashboard"];

  return (
    <>
      {/* Conditionally render the Navbar */}
      {!hiddenNavbarRoutes.includes(location.pathname) && <Navbar />}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

