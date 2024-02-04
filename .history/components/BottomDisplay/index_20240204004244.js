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

            {showContent(1) && <div className={styles.posterOne}>Content 1</div>}
            {showContent(2) && <div className={styles.posterTwo}>Content 2</div>}
            {showContent(4) && <div className={styles.posterThree}>Content 3</div>}
            {showContent(8) && <div className={styles.posterFour}>Content 4</div>}
            {showContent(16) && <div className={styles.posterFive}>Content 5</div>}
            {showContent(32) && <div className={styles.posterSix}>Content 6</div>}
          </div>
        </div>
        <InputArea onInputChange={handleInputChange} />
      </>
    );
  };
  
  export default BottomDisplay;