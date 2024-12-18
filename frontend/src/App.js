import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Homepage />} />  {/* Home route */}
          <Route path="/about" element={<About />} />  {/* About route */}
          {/* <Route path="/courses" element={<Courses />} />  Courses route */}
          <Route path="/contact" element={<Contact />} />  {/* Contact route */}
          <Route path="/login" element={<LoginPage />} />  {/* Contact route */}

        </Routes>
      </div>
    </>
  );
}

export default App;
