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
        <InputArea onInputChange={handleInputChange} />
        <div className={styles.bottomWidthSpan}> 
          <div className={styles.displayArea}>
            <div className={styles.posterOne}>
              {showContent(1) && <div className={styles.posterOne}>Content 1</div>}
            </div>
            <div className={styles.posterTwo}>
              {showContent(2) && <div className={styles.posterTwo}>Content 2</div>}
            </div>
            <div className={styles.posterThree}>
              {showContent(4) && <div className={styles.posterThree}>Content 3</div>}
            </div>
            <div className={styles.posterFour}>
              {showContent(8) && <div className={styles.posterFour}>Content 4</div>}
            </div>
            <div className={styles.posterFive}>
              {showContent(16) && <div className={styles.posterFive}>Content 5</div>}
            </div>
            <div className={styles.posterSix}>
              {showContent(32) && <div className={styles.posterSix}>Content 6</div>}
            </div>
            {/* {showContent(1) && <div className={styles.posterOne}>Content 1</div>}
            {showContent(2) && <div className={styles.posterTwo}>Content 2</div>}
            {showContent(4) && <div className={styles.posterThree}>Content 3</div>}
            {showContent(8) && <div className={styles.posterFour}>Content 4</div>}
            {showContent(16) && <div className={styles.posterFive}>Content 5</div>}
            {showContent(32) && <div className={styles.posterSix}>Content 6</div>}                  CORRECT WAY*/} 
          </div>
        </div>
      </>
    );
  };
  
  export default BottomDisplay;
