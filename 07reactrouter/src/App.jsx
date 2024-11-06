
import './App.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Header from './components/Header/Header.jsx'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>

    </Router>

  );
}

export default App;


