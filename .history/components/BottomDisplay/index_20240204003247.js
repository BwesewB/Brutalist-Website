import styles from './BottomDisplay.module.css'
import InputArea from "@/components/InputArea";
import { useState } from "react";

const BottomDisplay = () => {
    const [input, setInput] = useState('');
  
    const handleInputChange = inputValue => {
      setInput(inputValue);
    };

    const showContent = flagValue => (input & flagValue) > 0;
  
    return (
      <>
        <div className={styles.bottomWidthSpan}> 
          <div className={styles.displayArea}>
            <div className={styles.posterOne}>
              {showContent(1) && <div className={styles.content}>Content 1</div>}
            </div>
            <div className={styles.posterTwo}>
              {showContent(2) && <div className={styles.content}>Content 2</div>}
            </div>
            <div className={styles.posterThree}>
              {showContent(4) && <div className={styles.content}>Content 3</div>}
            </div>
            <div className={styles.posterFour}>
              {showContent(8) && <div className={styles.content}>Content 4</div>}
            </div>
            <div className={styles.posterFive}>
              {showContent(16) && <div className={styles.content}>Content 5</div>}
            </div>
            <div className={styles.posterSix}>
              {showContent(32) && <div className={styles.content}>Content 6</div>}
            </div>
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

