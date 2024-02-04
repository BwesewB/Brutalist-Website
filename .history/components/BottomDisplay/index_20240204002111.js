import styles from './BottomDisplay.module.css'
import InputArea from "@/components/InputArea";
import { useState } from "react";

const BottomDisplay = () => {
    const [input, setInput] = useState('');
  
    const handleInputChange = inputValue => {
      setInput(inputValue);
    };
  
    // Function to determine style based on input value
    const getStyle = flagValue => (input & flagValue) > 0 ? { backgroundColor: 'black' } : null;
  
    return (
      <>
        <div className={styles.bottomWidthSpan}> 
          <div className={styles.displayArea}>
            <div className={styles.posterOne} style={getStyle(1)}></div>
            <div className={styles.posterTwo} style={getStyle(2)}></div>
            <div className={styles.posterThree} style={getStyle(4)}></div>
            <div className={styles.posterFour} style={getStyle(8)}></div>
            <div className={styles.posterFive} style={getStyle(16)}></div>
            <div className={styles.posterSix} style={getStyle(32)}></div>
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

