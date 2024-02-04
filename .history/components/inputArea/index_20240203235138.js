import styles from './InputArea.module.css'
export default function InputArea() {

    const[input,setInput] = useState();

    const classFilters = {
      1: 'Arrow',
      2: 'Theif',
      4: 'Warrior',
      8: 'Bowman',
      16: 'Pirate',
      32: 'Nothing'
    }
  
  const getClassStyle = flagValue => (input & flagValue) > 0 ? { backgroundColor: 'yellow'} : null; 

    return(
        <div className={styles.inputArea}></div>
    )
}
