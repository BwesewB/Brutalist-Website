import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import CoverPage from "@/components/CoverPage";
import BottomDisplay from "@/components/BottomDisplay";
// import InputArea from "@/components/InputArea";

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
        <title>Brutalism</title>
        <meta name="description" content="Brutalist Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.WholeBody}>
          <div className={styles.openingVideo}>
            <h1>EXPERIENCE TRANQUILITY</h1>
            <h3>Brutalism "残忍主義"</h3>
            <Image src="/images/PlanetGif.gif" alt="Arrows" width={100} height={100} layout="responsive"/>
          </div>
          <div className={styles.titlePage}>
            <CoverPage/>
          </div>
          <div className={styles.bottomDisplay}>
            <BottomDisplay/>
          </div>
        </div>
      </main>
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