import styles from './BottomDisplay.module.css'
import InputArea from "@/components/InputArea";
import { useState } from "react";

const BottomDisplay = () => {
    const [input, setInput] = useState('');
  
    const handleInputChange = inputValue => {
      setInput(inputValue);
    };
  
    // Function to determine class based on input value
    const getClass = flagValue => (input & flagValue) > 0 ? styles.showContent : null;
  
    return (
      <>
        <div className={styles.bottomWidthSpan}> 
          <div className={styles.displayArea}>
            <div className={`${styles.posterOne} ${getClass(1)}`}></div>
            <div className={`${styles.posterTwo} ${getClass(2)}`}></div>
            <div className={`${styles.posterThree} ${getClass(4)}`}></div>
            <div className={`${styles.posterFour} ${getClass(8)}`}></div>
            <div className={`${styles.posterFive} ${getClass(16)}`}></div>
            <div className={`${styles.posterSix} ${getClass(32)}`}></div>
          </div>
        </div>
        <InputArea onInputChange={handleInputChange} />
      </>
    );
  };
  
  export default BottomDisplay;

// export default function BottomDisplay() {

//     return(
//         <>
//         <div className={styles.bottomWidthSpan}> 
//             <div className={styles.displayArea}>
//                 <div className={styles.posterOne}></div>
//                 <div className={styles.posterTwo}></div>
//                 <div className={styles.posterThree}></div>
//                 <div className={styles.posterFour}></div>
//                 <div className={styles.posterFive}></div>
//                 <div className={styles.posterSix}></div>
//             </div>
//         </div>
//         <InputArea/>
//         </>

//     )

// }

