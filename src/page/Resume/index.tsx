import image_1 from "../../assets/image/kate_3.jpg"
import styles from "../Resume/styles.module.css"
import Header from "../../compoment/Header";
import React from "react";

function Resume() {
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className="animate__animated animate__backInLeft overflow-x-hidden h-auto">
            <Header/>
            <div className={styles.image}>
                <img src={image_1} alt="" className="rounded-[999px] w-[170px] h-[170px]"/>
            </div>
            <div className="text-white flex flex-col justify-center items-center pt-1 m-5">
                <h1 className={`${styles.text} uppercase text-base md:text-3xl`}>
                    Kate Luong
                </h1>
                <h2 className={`${styles.work}`}>
                    Teacher & Marketing
                </h2>
                <div className={`${styles.content} ${styles.textContent} text-center`}>
                    With a strong belief that all products should be user-centric, I'm eager to deliver the best to our
                    customers and clients.
                </div>
            </div>
            <div className={`${styles.contacts}`}>
                <h2 className={`${styles.textContent1} ${styles.borderText} text-white`}>
                    CONTACTS
                </h2>
            </div>
            <div className="float-right ">
                I love you
            </div>
        </form>
    )
}

export default Resume