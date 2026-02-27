import styles from './sidebar.module.css'

export const SideBar = ({ open }) => {
    return (
        <nav className={`${styles.sidebar} ${open ? styles.open : ''}`}>
            <ul className={styles.list}>
                <li className={styles.active}>
                    <img src='/mage_dashboard-fill.svg' alt="" />
                </li>
                <li>
                    <img src='/solar_map-linear.svg' alt="" />
                </li>
                <li>
                    <img src='/uil_calender.svg' alt="" />
                </li>
                <li>
                    <img src='/mingcute_notification-line.svg' alt="" />
                </li>
                <li>
                    <img src='/uil_setting.svg' alt="" />
                </li>
            </ul>
        </nav>
    )
}