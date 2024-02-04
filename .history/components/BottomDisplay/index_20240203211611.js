import styles from './BottomDisplay.module.css'
export default function BottomDisplay() {

    return(
        <div className={styles.bottomWidthSpan}> 
            <div className={styles.displayArea}>
                <div className={styles.posterOne}></div>
                <div className={styles.posterTwo}></div>
                <div className={styles.posterThree}></div>
                <div className={styles.posterFour}></div>
                <div className={styles.posterFive}></div>
                <div className={styles.posterSix}></div>
            </div>
        </div>
    )

}