import styles from './BottomDisplay.module.css'
import InputArea from "@/components/InputArea";

export default function BottomDisplay() {

    return(
        <>
        <div className={styles.bottomWidthSpan}> 
            <div className={styles.displayArea}>
                {
                Object.keys(classFilters).map(item => (
                    <tr key={item} style={getClassStyle(item)}>
                    <td>{item}</td> 
                    <td>{classFilters[item]}</td>
                    </tr>
                ))
                }
                <div className={styles.posterOne}></div>
                <div className={styles.posterTwo}></div>
                <div className={styles.posterThree}></div>
                <div className={styles.posterFour}></div>
                <div className={styles.posterFive}></div>
                <div className={styles.posterSix}></div>
            </div>
        </div>
        <InputArea/>
        </>

    )

}