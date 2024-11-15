import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar.js';
import CourseContainer from '../components/CourseContainer.js';
import React, { useState } from 'react';
export default function Home() {
  const [lightMode, setLightMode] = useState(true);
  const [load, setLoad] = useState(false);
  const [save, setSave] = useState(false);
  const [info, setInfo] = useState(false);
  const [CCID, setCCID] = useState(0);
  const [saveStr, setSaveStr] = useState("");
  const [loadStr, setLoadStr] = useState("");
  const invertLightMode = () =>{
    setLightMode(!lightMode);
  }
  const toggleLoad = () =>{
    setLoad(!load);
  }
  const toggleSave = () =>{
    setSaveStr(localStorage.getItem("simplifiedState"));
    setSave(!save);
  }
  const toggleInfo = () =>{
    setInfo(!info);
  }
  function handleLoadChange(event){
    setLoadStr(event.target.value);
  }
  const loadFromString = () =>{
    localStorage.setItem("simplifiedState",loadStr);
    setCCID(CCID+1);
    toggleLoad();
  }

  
  return (
    <div className={styles.container}>
      {/* --loading card-- */}
      {load? (<div className={styles.cardbg}>
        <div className={styles.card}>
          <button className={styles.deleteButton} id="scary" onClick={toggleLoad}><img className={styles.icon} src="/hwk/close.svg"/></button>
          <h2>paste that string from earlier</h2>
          <div className={styles.customRule}/>
          <textarea spellCheck="false" className={styles.saveIn} type="text" value={loadStr} onChange={handleLoadChange} onFocus={(e) => {e.target.select()}}/>
          <button className={styles.loadButton} id="good" onClick={loadFromString}><img className={styles.icon} src="/hwk/check.svg"/></button>
        </div>
      </div>):(null)}
      
      {/* --saving card-- */}
      {save? (<div className={styles.cardbg}>
        <div className={styles.card}>
          <button className={styles.deleteButton} id="scary" onClick={toggleSave}><img className={styles.icon} src="/hwk/close.svg"/></button>
          <h2>copy this string and keep it safe</h2>
          <div className={styles.customRule}/>
          <textarea spellCheck="false" readOnly={true} className={styles.saveOut} type="text" value={saveStr} onFocus={(e) => {e.target.select()}}/>
        </div>
      </div>):(null)}
      
      {/* --info card-- */}
      {info? (<div className={styles.cardbg}>
        <div className={styles.card}>
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
}
