import styles from './InputArea.module.css'
export default function InputArea() {
    return(
        <div className={styles.inputArea}></div>
    )
}

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
