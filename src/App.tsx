import React, {useState} from 'react';
import './App.css';
import Home from "./page/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./compoment/Footer";
import Contact from "./page/Contact";
import MenuBar from "./compoment/Menu";
import Resume from "./page/Resume";


function App() {
    const [open, setOpen] = useState(false)

    return (
        <BrowserRouter>
            <div
                className={!open ? 'color dark:bg-black w-full h-screen overflow-y-auto fixed'
                    : 'bg-[#000000CC] dark:bg-black w-full h-screen overflow-y-auto fixed'}>
                <MenuBar setOpen={() => setOpen(!open)} open={open}/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
