import Header from "../../compoment/Header";
import styles from "../Contact/styles.module.css"
import image_meo from "../../assets/image/kate_2.jpg"
import {useState} from "react";


function Contact() {
    const [open, setOpen] = useState(false)

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="animate__animated animate__fadeInDown overflow-x-hidden h-auto">
            <Header/>
            <div className="m-[3rem] md:m-[5rem]">
                <div className="md:w-[130vh] md:ml-auto md:mr-auto">
                    <div className="md:float-left md:w-[55%] pb-10">
                        <div className={`${styles.text1} text-xs md:text-sm`}>
                            <h1 className={`${styles.text} text-base md:text-2xl`}>CONTACT ME</h1>
                            <span className="mb-2">
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
                            </span>
                            <span className="mb-2">
                                Thank you and I look forward to collaborating with you.
                            </span>
                            <span className="mb-2">
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
                            </span>
                        </div>
                    </div>
                    <img
                        alt=""
                        className="md:float-right md:w-[35%] md:h-auto pb-10"
                        src={image_meo}
                    />
                    <div className="w-[100%] py-10 md:max-w-[100%] md:w-[400px]">
                        <div className="relative">
                            <label
                                className={`${styles.textInput}`}
                            >
                                Name*
                            </label>
                            <input
                                id="name"
                                className={`${styles.input} focus:outline-none`}
                                required={true}
                            />
                        </div>
                        <div className="relative pt-10">
                            <label
                                className={`${styles.textInput}`}
                            >
                                Email*
                            </label>
                            <input
                                id="name"
                                className={`${styles.input} focus:outline-none`}
                                required={true}
                            />
                        </div>
                        <div className="relative pt-10">
                            <label
                                className={`${styles.textInput}`}
                            >
                                Messenger*
                            </label>
                            <textarea
                                id="messenger"
                                onClick={() => setOpen(true)}
                                className={
                                    !open ? `${styles.inputTextarea} focus:outline-none`
                                        : `${styles.inputTextarea2} focus:outline-none`}
                                required={true}
                            />
                        </div>
                        <div className="flex justify-center items-center w-full h-full pt-10">
                            <button className=" border border-white w-[50%] h-[50px] text-white uppercase rounded-lg">
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Contact