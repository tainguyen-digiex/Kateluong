import Header from "../../compoment/Header";
import styles from "../Contact/styles.module.css"
import image_meo from "../../assets/image/meo.png"

function Contact() {
    return (
        <div className="animate__animated animate__fadeInDown overflow-x-hidden h-auto">

            <Header/>
            <div className="m-[5rem]">
                <div className={styles.display}>
                    <div className="float-left w-[55%]">
                        <div className={styles.text1}>
                            <h1 className={styles.text}>CONTACT ME</h1>
                            <p className="mb-2">
                                For a more detailed discussion and to receive your quotation, kindly message me with a
                                brief
                                description of the project outline, the deadline and your budget. I reply to all
                                enquiries
                                within 24
                                hours of receipt, and initial designs/illustrations for editing can be expected within
                                2-14
                                days
                                of finalising the agreed upon requirements. You can contact me via Email, Facebook,
                                LinkedIn,
                                Instagram and Zalo. You can also complete the form below for a quicker response.
                            </p>
                            <p className="mb-2">
                                Thank you and I look forward to collaborating with you.
                            </p>
                            <p className="mb-2">
                                FIND ME AT
                                <span className=" flex flex-col text-[#A9A9A9]">
                            Phone: 0989 838 677
                        </span>
                                <span className=" flex flex-col text-[#A9A9A9]">
                            Email: amandavu6918@gmail.com
                        </span>
                                <span className=" flex flex-col text-[#A9A9A9]">
                            Instagram: cthulhu.bae
                        </span>
                                <span className=" flex flex-col text-[#A9A9A9]">
                            LinkedIn: linkedin.com/in/amanda-vu
                        </span>
                            </p>
                        </div>
                    </div>
                    <img alt="" className="float-right w-[35%] h-auto" src={image_meo}/>
                </div>
            </div>

        </div>
    )
}

export default Contact