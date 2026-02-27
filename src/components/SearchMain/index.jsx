import styles from './searchmain.module.css'

export const SearchMain = (props) => {
    return (
        <div className={styles.container}>
            <img src="/flowbite_search-outline.svg" alt="" />
            <input className={styles.input} type="text" {...props}/>
        </div>
    )
}