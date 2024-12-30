import './App.css';
import React from 'react';
//import ClassCompEg from './Components/classComponents/classCompEg';
//import FunctionalComponent from './Components/functionalComponents/functionComponent';
import Home from './Components/functionalComponents/Home';
import NavBar from './Components/functionalComponents/NavBar';
import About from './Components/functionalComponents/About';
import Gallery from './Components/functionalComponents/Gallery';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './Components/functionalComponents/Contact';
import Footer from './Components/functionalComponents/Footer';

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar />
	      <Routes>
		    <Route path = "/" element={<Home />}/>
		    <Route path = 'About' element={<About class = "Advanced Fullstack" clg ="KEC" />}/>
        <Route path = 'Gallery' element={<Gallery/>}/>
        <Route path = 'Contact' element={<Contact/>}/>
	    </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App
