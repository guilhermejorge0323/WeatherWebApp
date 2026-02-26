import styles from './sidebar.module.css'
import homeIcon from '../../../public/mage_dashboard-fill.svg'
import mapIcon from '../../../public/solar_map-linear.svg'
import calenderIcon from '../../../public/uil_calender.svg'
import notificationIcon from '../../../public/mingcute_notification-line.svg'
import settingIcon from '../../../public/uil_setting.svg'

export const SideBar = ({ open }) => {
    return (
        <nav className={`${styles.sidebar} ${open ? styles.open : ''}`}>
            <ul className={styles.list}>
                <li className={styles.active}>
                    <img src={homeIcon} alt="" />
                </li>
                <li>
                    <img src={mapIcon} alt="" />
                </li>
                <li>
                    <img src={calenderIcon} alt="" />
                </li>
                <li>
                    <img src={notificationIcon} alt="" />
                </li>
                <li>
                    <img src={settingIcon} alt="" />
                </li>
                
            </ul>
        </nav>
    )
}