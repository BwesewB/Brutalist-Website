import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import CoverPage from "@/components/CoverPage";
import BottomDisplay from "@/components/BottomDisplay";
import OpeningVideo from "@/components/OpeningVideo";
import InputArea from "@/components/InputArea";

export default function Home() {
  const [input, setInput] = useState(0); // State to hold the input value

  // Handler function to update the input value
  const handleInputChange = inputValue => {
    setInput(parseInt(inputValue));
  };

  return (
    <>
      <Head>
        <title>Brutalism</title>
        <meta name="description" content="Brutalist Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Asset1.svg" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.WholeBody}>
          <div className={styles.openingVideo}>
            <OpeningVideo/>
          </div>
          <div className={styles.bottomDisplay}>
            {/* Pass the input value and handler function to BottomDisplay */}
            <BottomDisplay input={input} setInput={setInput}/>
          </div>
        </div>
      </main>
    </>
  );
}

/*
export default function Home() {

  return (
    <>
      <Head>
        <title>Brutalism</title>
        <meta name="description" content="Brutalist Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Asset1.svg" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.WholeBody}>
          <div className={styles.openingVideo}>
            <OpeningVideo/>
          </div>
          {/* <div className={styles.titlePage}>
            <CoverPage/>
          </div> */
          /* <div className={styles.Testing}></div> 
          <div className={styles.bottomDisplay}>
            <BottomDisplay/>
          </div>
        </div>
      </main>
    </>
  );
}

{/* 

const YourComponent = () => {
  const [input, setInput] = useState('');

  const classFilters = {
    1: 'red',
    2: 'blue',
    4: 'green',
    8: 'yellow',
    16: 'purple',
    32: 'orange'
  };

  const getClassStyle = flagValue => (input & flagValue) > 0 ? { backgroundColor: classFilters[flagValue] } : null;

  const handleChange = event => {
    setInput(event.target.value);
  };

  return (
    <main>
      <div className="inputArea">
        <input
          id="input"
          type="text"
          placeholder="bitmask decimal value"
          value={input}
          onChange={handleChange}
        />
      </div>
      <div className={styles.grid}>
        {Object.keys(classFilters).map(item => (
          <div key={item} className={`${styles.cell} ${styles.poster}`} style={getClassStyle(parseInt(item))}></div>
        ))}
      </div>
    </main>
  );
};

export default YourComponent;
*/

