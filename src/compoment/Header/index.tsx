import styles from "../../page/Home/styles.module.css";
import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='text-white flex flex-col justify-center items-center pt-5 m-5'>
            <h1 className={`${styles.text} text-xl md:text-5xl z-[9999]`}>
                My name's...
            </h1>
            <div className="hidden md:block">
                <div className="grid grid-cols-6 md:pt-5">
                    <Link to="/"
                          className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                        HOME
                    </Link>
                    <Link to="/"
                          className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                        ABOUT ME
                    </Link>
                    <Link to="/"
                          className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                        RESUME
                    </Link>
                    <Link to="/"
                          className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                        ILLUSTRATION
                    </Link>
                    <Link to="/"
                          className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                        2D DESIGN
                    </Link>
                    <Link to="/contact"
                          className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center`}>
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header