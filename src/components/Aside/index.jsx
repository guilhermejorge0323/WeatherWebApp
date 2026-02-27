import styles from './aside.module.css'
import { SideBar } from '../SideBar'
import { useState } from 'react'

export const Aside = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(prev => !prev);
    }

    return (
        <aside className={styles.aside}>
            <button className={styles.sidebar_toogle} onClick={handleToggle}>
                <img src='/ic_round-menu.svg' alt="" />
            </button>
            <div className={styles.divisory}></div>
            <SideBar open={open}/>
        </aside>
    )
}