import React, {RefObject, useRef} from "react";
import useClickOutsideRef from "../../hook/useOnClickOutSide";
import {Link} from "react-router-dom";
import styles from "../../page/Home/styles.module.css";
import Close from "../../assets/icons/close";

interface Props {
    closeBox: (props: boolean) => void
}

function MobileIndex(props: Props) {
    const {closeBox} = props;
    const popupRef = useRef<HTMLDivElement>(null);

    const onCloseReview = () => {
        closeBox(false);
    };
    // click outside popup modal to turn off
    useClickOutsideRef(popupRef, onCloseReview);
    return (
        <div
            className="fixed top-0 left-0 justify-center items-center z-10"
            style={{
                background: 'rgba(0, 0, 0, 0.8)',
                // borderColor: 'rgb(224, 224, 224)',
                display: 'flex',
                width: '100%',
                height: '100vh'
            }}
            onClick={onCloseReview}>
            <div className="text-black z-10 max-h-[80%] mb-2 overflow-y-scroll">
                <Link to="/"
                      className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center mb-2`}>
                    HOME
                </Link>
                <Link to="/"
                      className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center mb-2`}>
                    ABOUT ME
                </Link>
                <Link to="/resume"
                      className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center mb-2`}>
                    RESUME
                </Link>
                <Link to="/contact"
                      className={`${styles.text2} text-xs md:text-sm w-[120px] flex justify-center items-center mb-2`}>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default MobileIndex

