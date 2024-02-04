import styles from './InputArea.module.css'
import { useState } from "react";
import Image from "next/image";

const InputArea = ({ onInputChange }) => {
    const [input, setInput] = useState('');
  
    const handleChange = event => {
      const inputValue = event.target.value;
      setInput(inputValue);
      onInputChange(inputValue); // Pass input value to parent component
    };
  
    return (
      <div className={styles.inputArea}>
        <input
          id="input"
          type="text"
          placeholder="Number Input"
          value={input}
          onChange={handleChange}
        />
        <Image src="/images/Asset1.svg" alt="Fading Icon" width={100} height={100} layout="responsive" className={styles.inputAreaImage}/>
      </div>
    );
  };
  
  export default InputArea;

// export default function InputArea() {
// const YourComponent = () => {
//     const [input, setInput] = useState('');
  
//     const classFilters = {
//       1: 'red',
//       2: 'blue',
//       4: 'green',
//       8: 'yellow',
//       16: 'purple',
//       32: 'orange'
//     };
  
//     const getClassStyle = flagValue => (input & flagValue) > 0 ? { backgroundColor: classFilters[flagValue] } : null;
  
//     const handleChange = event => {
//       setInput(event.target.value);
//     };
  
//     return (
//         <div className={styles.inputArea}>
//         <input
//           id="input"
//           type="text"
//           placeholder="bitmask decimal value"
//           value={input}
//           onChange={handleChange}
//         />
//         </div>
//     );
//   };
// }
//   export { input, classFilters, getClassStyle, handleChange };
