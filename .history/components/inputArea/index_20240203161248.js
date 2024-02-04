

export default function InputArea() {

    const[input,setInput] = useState();
  
    const classFilters = {
      1: 'Magician',
      2: 'Theif',
      4: 'Warrior',
      8: 'Bowman',
      16: 'Pirate',
      32: 'Nothing'
    }
  
  const getClassStyle = flagValue => (input & flagValue) > 0 ? { backgroundColor: 'yellow'} : null; 
  
    return (
        <div class="inputArea">
            <input
            id="input"
            type="text"
            placeholder="bitmask decimal value"
            value={input}
            onChange={event => setInput(event.target.value)}
            />
        </div>
    );
  }