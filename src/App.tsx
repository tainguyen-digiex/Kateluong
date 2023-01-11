import React from 'react';
import './App.css';
import Home from "./page/Home";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Footer from "./compoment/Footer";
import Contact from "./page/Contact";

function App() {
    return (
        <BrowserRouter>
            <div className="color w-full h-screen overflow-y-auto fixed">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </div>

        </BrowserRouter>

    );
}

export default App;
