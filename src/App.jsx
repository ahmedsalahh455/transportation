import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './pages/About';
import OurClients from './pages/OurClients';
import NetworksPage from './pages/NetworksPage';

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="font-poppins">
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourclients" element={<OurClients />} />
        <Route path="/networks" element={<NetworksPage />} />
      </Routes>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
