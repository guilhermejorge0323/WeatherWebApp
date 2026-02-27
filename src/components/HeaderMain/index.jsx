import { SearchMain } from '../SearchMain'
import { TextsHeader } from '../TextsHeader'
import styles from './headermain.module.css'

export const HeaderMain = () => {
    return (
        <div className={styles.headerMain}>
            <TextsHeader />
            <SearchMain placeholder='Busque uma cidade'/>
        </div>
    )
}