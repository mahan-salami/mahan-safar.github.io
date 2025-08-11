import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import './css/navbar.css'
import Applica from './componnent/Applica.jsx'
import Navbar from './componnent/Navbar.jsx'
import Slider from './componnent/Slider.jsx'
import Citycard from './componnent/Citycard.jsx'
import Tickets from './componnent/Tickets.jsx'
import Banner from './componnent/Banner.jsx'
import Latsetnews from './componnent/Latsetnews.jsx'
import Faq from './componnent/Faq.jsx'
import Footer from './componnent/Footer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <Slider/>
    <Citycard/>
    <Tickets/>
    <Banner/>
    <Latsetnews/>
    <Applica/>
    <Faq/>
    <Footer/>
  </StrictMode>,
)
