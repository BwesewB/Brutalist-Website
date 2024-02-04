import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import CoverPage from "@/components/CoverPage";
import BottomDisplay from "@/components/BottomDisplay";
import OpeningVideo from "@/components/OpeningVideo";
// import InputArea from "@/components/InputArea";


import React, { useState } from 'react';
import styles from './YourComponent.module.css'; // Import CSS module

const YourComponent = () => {
  const [input, setInput] = useState('');

  const classFilters = {
    1: '/path/to/magician-image.jpg',
    2: '/path/to/thief-image.jpg',
    4: '/path/to/warrior-image.jpg',
    8: '/path/to/bowman-image.jpg',
    16: '/path/to/pirate-image.jpg',
    32: '/path/to/nothing-image.jpg'
  };

  const getClassStyle = flagValue => (input & flagValue) > 0 ? { backgroundImage: `url('${classFilters[flagValue]}')` } : null;

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
      <div className={styles.posters}> {/* Use CSS module */}
        {Object.keys(classFilters).map(item => (
          <div key={item} className={styles.poster} style={getClassStyle(parseInt(item))}></div>
          ))}
      </div>
    </main>
  );
};

export default YourComponent;

// export default function Home() {

//   return (
//     <>
//       <Head>
//         <title>Brutalism</title>
//         <meta name="description" content="Brutalist Website" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={`${styles.main}`}>
//         <div className={styles.WholeBody}>
//           <div className={styles.openingVideo}>
//             <OpeningVideo/>
//           </div>
//           <div className={styles.titlePage}>
//             <CoverPage/>
//           </div>
//           <div className={styles.bottomDisplay}>
//             <BottomDisplay/>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

{/* 

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
<main>
<div class="inputArea">
<input
id="input"
type="text"
placeholder="bitmask decimal value"
value={input}
onChange={event => setInput(event.target.value)}
/>
</div>
<div class="posterArea" >
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
</div> 
<main/>
)
*/}

