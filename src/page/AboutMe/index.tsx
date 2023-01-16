import React, {useEffect, useState} from 'react';
import styles from "../../compoment/TimerClock/styles.module.css"

function AboutMe() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const [count, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(count => count + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Countdown</h1>
            <div className={styles.countdownWrapper}>
                <div className={styles.countdownItem}>
                    {hours}
                    <span>hours</span>
                </div>
                <div className={styles.countdownItem}>
                    {minutes}
                    <span>minutes</span>
                </div>
                <div className={styles.countdownItem}>
                    {seconds}
                    <span>seconds</span>
                </div>
            </div>
        </div>
    )
}

export default AboutMe