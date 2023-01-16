import React, {useEffect, useState} from 'react';
import './App.css';
import Home from "./page/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./compoment/Footer";
import Contact from "./page/Contact";
import MenuBar from "./compoment/Menu";
import Resume from "./page/Resume";
import AboutMe from "./page/AboutMe";


function App() {
    const [open, setOpen] = useState(false)

    const [theme, setTheme] = useState(localStorage.theme)
    const isDarkMode = theme === 'dark'

    console.log('theme', theme)
    const handleToggleDarkMode = () => {
        setTheme(isDarkMode ? 'light' : 'dark')
    }

    useEffect(() => {
        const root = window.document.documentElement
        if (isDarkMode) {
            root.classList.remove('light')
        } else {
            root.classList.remove('dark')
        }
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [isDarkMode])

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
                    <Route path="/about-me" element={<AboutMe/>}/>
                </Routes>
                <Footer isDarkMode={isDarkMode} handleToggleDarkMode={handleToggleDarkMode}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
