import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
<<<<<<< HEAD
import About from './pages/About';
import OurClients from './pages/OurClients';
import NetworksPage from './pages/NetworksPage';
=======
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
>>>>>>> 89892d6 (Update: Added)

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourclients" element={<OurClients />} />
        <Route path="/networks" element={<NetworksPage />} />
=======
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
>>>>>>> 89892d6 (Update: Added)
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
