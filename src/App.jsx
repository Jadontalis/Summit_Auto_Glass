import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home'
import { Contact } from "./Pages/Contact Page/Contact";
import { Services } from "./Pages/Services Page/Services";
import { Company } from "./Pages/Company Page/Company";
import ScrollToTop from "./Components/Navbar/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/company" element={<Company/>}/>
      </Routes>
    </Router>
  )
}

export default App