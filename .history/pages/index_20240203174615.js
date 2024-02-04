import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";



export default function Home() {

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
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.titlePage}>
          <div className={styles.graphic}></div>
          <div className={styles.displayPanel}></div>
        </div>
        <div className={styles.inputArea}></div>
        <div className={styles.displayArea}>
          <div className={styles.posterOne}></div>
          <div className={styles.posterTwo}></div>
          <div className={styles.posterThree}></div>
          <div className={styles.posterFour}></div>
          <div className={styles.posterFive}></div>
          <div className={styles.posterSix}></div>
        </div>
      </main>
      <footer>
        Footer Area
      </footer>
    </>
  );
}

{/* <div class="inputArea">
<input
id="input"
type="text"
placeholder="bitmask decimal value"
value={input}
onChange={event => setInput(event.target.value)}
/>
</div>
<div class="posterArea" >                                                             need to change to posters
<table> 
  <tbody>
    {
      Object.keys(classFilters).map(item => (
        <tr key={item} style={getClassStyle(item)}>
          <td>{item}</td> 
          <td>{classFilters[item]}</td>
        </tr>
      ))
    }
  </tbody>
</table>
</div> */}