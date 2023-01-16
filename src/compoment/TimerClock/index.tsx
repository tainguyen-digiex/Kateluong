import React, {useEffect, useState} from 'react';
import styles from "../TimerClock/styles.module.css"


interface Props {
    className?: string;
}

function TimerClock(props: Props) {
    const {className} = props

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
        <div className={className}>
            <div className={styles.countdownItem}>
                {hours}:{' '}
                {minutes}:{' '}
                {seconds}

            </div>
        </div>
    )
}

export default TimerClock