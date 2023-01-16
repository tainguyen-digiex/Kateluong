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
    const MONTH_NAMES = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]

    function prefixZero(time: number) {
        if (!time && typeof time !== "number") return;
        if (time < 0) return '59'
        return time < 10 ? '0' + time : time;
    }

    const newDate = new Date(date)
    const day = newDate.getDay()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()

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
                {prefixZero(day)}/ {MONTH_NAMES[month]}/ {year} {' '}
                {prefixZero(hours)}:{' '}
                {prefixZero(minutes)}:{' '}
                {prefixZero(seconds)}

            </div>
        </div>
    )
}

export default TimerClock