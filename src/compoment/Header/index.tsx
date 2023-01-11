import styles from "../../page/Home/styles.module.css";
import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='text-white flex flex-col justify-center items-center'>
            <h1 className={styles.text}>
                My name's ...
            </h1>
            {/*<h2 className={styles.text1}>*/}
            {/*    Profile*/}
            {/*</h2>*/}
            <div className="grid grid-cols-6 pt-5">
                <Link to="/" className={`${styles.text2} w-[120px] flex justify-center items-center`}>
                    HOME
                </Link>
                <Link to="/" className={`${styles.text2} w-[120px] flex justify-center items-center`}>
                    ABOUT ME
                </Link>
                <Link to="/" className={`${styles.text2} w-[120px] flex justify-center items-center`}>
                    RESUME
                </Link>
                <Link to="/" className={`${styles.text2} w-[120px] flex justify-center items-center`}>
                    ILLUSTRATION
                </Link>
                <Link to="/" className={`${styles.text2} w-[120px] flex justify-center items-center`}>
                    GRAPHIC DESIGN
                </Link>
                <Link to="/contact" className={`${styles.text2} w-[120px] flex justify-center items-center`}>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header