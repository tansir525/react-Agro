import './App.css';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import GlobalStyle from '../src/Components/styles/GlobalStyle';
import { Routes, Route } from "react-router-dom";
import About from './Components/About/About';
import Career from './Components/Career/Career';
import FormPage from './Components/FormPage/FormPage';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div>
    {/* <Header/> */}
    <Navbar/>
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<FormPage />} />
    </Routes>


   
    
    <GlobalStyle/>
    </div>
  );
}

export default App;
