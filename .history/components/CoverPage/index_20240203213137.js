import styles from './CoverPage.module.css';
import Image from "next/image";
export default function CoverPage() {
    return(
        <>
            <div className={styles.graphic}>
                <Image src="/images/Arrows.png" alt="Arrows"/>
            </div>
            <div className={styles.displayPanel}></div>
        </>

    )
}