import React from "react";
import styles from "./styles.module.css"
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="w-full h-screen text-white flex flex-col justify-center items-center  animate__animated animate__fadeIn">
            <h1 className={`${styles.text} text-xl md:text-5xl`}>
                My name's...
            </h1>
            <h2 className={`${styles.text1} text-base md:text-3xl`} >
                PORTFOLIO
            </h2>
            <div className="grid grid-cols-5 pt-5">
                <Link to="/" className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                    ABOUT ME
                </Link>
                <Link to="/" className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                    RESUME
                </Link>
                <Link to="/" className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                    ILLUSTRATION
                </Link>
                <Link to="/" className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                    GRAPHIC DESIGN
                </Link>
                <Link to="/contact" className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Home

