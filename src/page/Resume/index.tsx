import image_1 from "../../assets/image/kate_3.jpg"
import styles from "../Resume/styles.module.css"
import Header from "../../compoment/Header";
import React from "react";

function Resume() {
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="animate__animated animate__backInLeft overflow-x-hidden h-auto">
            <Header/>
            <div className=" md:w-[130vh] md:ml-auto md:mr-auto">
                <div className="flex flex-col">
                    <div className="m-[3rem] md:m-[5rem]">
                        <div className={styles.image}>
                            <img src={image_1} alt="" className="rounded-[999px] w-[170px] h-[170px] object-cover"/>
                        </div>
                        <div className="text-white flex flex-col justify-center items-center pt-1 m-5">
                            <h1 className={`${styles.text} uppercase text-base md:text-3xl`}>
                                Kate Luong
                            </h1>
                            <h2 className={`${styles.work}`}>
                                Teacher & Marketing
                            </h2>
                            <div className={`${styles.content} ${styles.textContent} text-center`}>
                                With a strong belief that all products should be user-centric, I'm eager to deliver the
                                best
                                to our
                                customers and clients.
                            </div>
                        </div>
                        <div className={`${styles.contacts} md:float-left md:w-[30%]`}
                             style={{borderColor: 'rgba(232, 232, 232, 0.1)'}}>
                            <h2 className={`${styles.textContent1} ${styles.borderText} text-white uppercase`}
                                style={{borderColor: 'rgba(232, 232, 232, 0.1)'}}>
                                CONTACTS
                            </h2>
                            <a href="#" className={`${styles.textContent2} flex flex-col`}>
                                kateluong@gmail.com
                            </a>
                            <a href="#" className={`${styles.textContent2} flex flex-col`}>
                                0778924736
                            </a>
                            <h2 className={`${styles.textContent1} ${styles.borderText} text-white uppercase`}
                                style={{borderColor: 'rgba(232, 232, 232, 0.1)'}}>
                                Skill
                            </h2>
                            <h2 className={`${styles.textContent1} ${styles.borderText} text-white uppercase`}
                                style={{borderColor: 'rgba(232, 232, 232, 0.1)'}}>
                                LANGUAGES
                            </h2>
                            <div className="flex justify-between items-center">
                                <div className={styles.textContent2}>
                                    English (9 IELTS)
                                </div>
                                <div className={`${styles.english} w-[100%] bg-white rounded-xl`}>
                                    <div className="w-[90%] "
                                         style={{background: 'rgb(167, 107, 179)', height: '100%'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="md:float-right w-[60%]">
                            I love you
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Resume