import styles from "./OpeningVideo.module.css";
import Image from "next/image";

export default function OpeningVideo() {
    return(
        <>
        <div className={styles.openingVideo}>
            <h1>EXPERIENCE TRANQUILITY</h1>
            <h3>Theme: Brutalism "残忍主義"</h3>
            <div className={styles.guideance}>
                <h4>Scroll Down</h4>
                <div className={styles.arrow}></div>
            </div>
            <Image src="/images/PlanetGif.gif" alt="Arrows" width={100} height={100} layout="responsive" className={styles.video}/>
        </div>
        </>
    )
}