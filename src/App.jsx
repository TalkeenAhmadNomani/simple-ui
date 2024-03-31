import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css'
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Services from "./Component/Services";
import "./Style/Ap.scss"
import "./Style/Header.scss"
import "./Style/Home.scss"
import "./Style/Footer.scss"
import "./Style/Contact.scss"
import "./Style/mediaquery.scss"


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path="/services" element ={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
    
  
  );
   
  
}

export default App
