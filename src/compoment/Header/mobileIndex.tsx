import styles from "../Header/styles.module.css"
import {useState} from "react";


function MobileIndex() {

    const [open, setOpen] = useState(false)

    const myFunction = (x?: any) => {
        x.classList.toggle("change");
    }

    console.log('open', open)

    console.log('myFunction',myFunction)

    return (
        <div className={styles.container} onClick={() => setOpen(!open)}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
        </div>
    )
}


export default MobileIndex