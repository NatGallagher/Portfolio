import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <>
      <HashRouter>  
        <NavBar/>      
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/work" element={<Work/>}/>
      </Routes>
    </HashRouter>  
    </>
  );
}

export default App;
