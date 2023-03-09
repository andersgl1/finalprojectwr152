import './App.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import { 
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  return (
    <div 
      id="app-full"
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="about" element={<AboutUs />} />
          <Route exact path="contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
