import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Header/Navbar.jsx';
import Footer from './Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>,
)
