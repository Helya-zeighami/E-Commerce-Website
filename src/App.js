import './App.css';
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/menu";
import About from "./pages/About";
import Contact from "./pages/contact";
import Footer from "./components/footer";


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/menu" element={<Menu/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
