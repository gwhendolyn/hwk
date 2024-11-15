import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar.js';
import CourseContainer from '../components/CourseContainer.js';
import React, { useState } from 'react';
export default function Home() {
  //#region --state and effect hooks--
  
  //tracks the current theme of the UI, true=light false=dark
  const [lightMode, setLightMode] = useState(true);

  //tracks the visibility of the loading card, true=visible false=not
  const [load, setLoad] = useState(false);

  //tracks the visibility of the saving card, true=visible false=not
  const [save, setSave] = useState(false);

  //tracks the visibility of the info card, true=visible false=not
  const [info, setInfo] = useState(false);

  //used as a key for the courseContainer component, incremented to force a remount
  const [CCID, setCCID] = useState(0);

  //tracks the current string available in the save card textarea
  const [saveStr, setSaveStr] = useState("");

  //tracks the string input by the user in the load card textarea
  const [loadStr, setLoadStr] = useState("");
  //#endregion

  //#region --functions--

  //inverts current theme
  const invertLightMode = () =>{
    setLightMode(!lightMode);
  }

  //shows/hides loading card
  const toggleLoad = () =>{
    setLoad(!load);
  }

  //shows/hides saving card
  const toggleSave = () =>{
    setSaveStr(localStorage.getItem("simplifiedState"));
    setSave(!save);
  }

  //shows/hides info card
  const toggleInfo = () =>{
    setInfo(!info);
  }

  //updates loadStr to what is currently in the loading card textarea
  function handleLoadChange(event){
    setLoadStr(event.target.value);
  }

  //sends current loadStr to localStorage and forces a remount of the courseContainer
  //to cause it to load from loaclStorage
  const loadFromString = () =>{
    localStorage.setItem("simplifiedState",loadStr);
    setCCID(CCID+1);
    toggleLoad();
  }
  //#endregion
  
  //#region --main render--
  return (
    <div className={styles.container}>
      {/* --loading card-- */}
      {load? (<div className={styles.cardbg}>
        <div className={styles.card} id={lightMode ? null:"inverted"}>
          <button className={styles.deleteButton} id="scary" onClick={toggleLoad}><img className={styles.icon} src="/hwk/close.svg"/></button>
          <h2>paste that string from earlier</h2>
          <div className={styles.customRule}/>
          <textarea spellCheck="false" className={styles.saveIn} type="text" value={loadStr} onChange={handleLoadChange} onFocus={(e) => {e.target.select()}}/>
          <button className={styles.loadButton} id="good" onClick={loadFromString}><img className={styles.icon} src="/hwk/check.svg"/></button>
        </div>
      </div>):(null)}
      
      {/* --saving card-- */}
      {save? (<div className={styles.cardbg}>
        <div className={styles.card} id={lightMode ? null:"inverted"}>
          <button className={styles.deleteButton} id="scary" onClick={toggleSave}><img className={styles.icon} src="/hwk/close.svg"/></button>
          <h2>copy this string and keep it safe</h2>
          <div className={styles.customRule}/>
          <textarea spellCheck="false" readOnly={true} className={styles.saveOut} type="text" value={saveStr} onFocus={(e) => {e.target.select()}}/>
        </div>
      </div>):(null)}
      
      {/* --info card-- */}
      {info? (<div className={styles.cardbg}>
        <div className={styles.card} id={lightMode ? null:"inverted"}>
          <button className={styles.deleteButton} id="scary" onClick={toggleInfo}><img className={styles.icon} src="/hwk/close.svg"/></button>
          <h2>HWK: grade calculator</h2>
          <div className={styles.customRule}/>
          <p className={styles.infoBody}>created by <a href="https://github.com/gwhendolyn">gwendolyn morgan solberg</a>  2024</p>
        </div>
      </div>):(null)}
      
      {/* main content */}
      <Head>
        <title>HWK: Grade Calculator</title>
        <link rel="icon" href="/hwk/favicon.ico" />
      </Head>
      <Sidebar lm={lightMode} 
      setLm={invertLightMode} 
      toggleLoad={toggleLoad} 
      toggleSave={toggleSave}
      toggleInfo={toggleInfo}/>
      <CourseContainer key={CCID} lm={lightMode}/>
    </div>
  );
  //#endregion
}
