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
  const invertLightMode = () =>{
    setLightMode(!lightMode);
  }
  const toggleLoad = () =>{
    setLoad(!load);
  }
  const toggleSave = () =>{
    setSave(!save);
  }
  const toggleInfo = () =>{
    setInfo(!info);
  }

  
  return (
    <div className={styles.container}>
      {/* --loading card-- */}
      {/* {load? (<div className={styles.cardbg}>

      </div>):(null)} */}
      
      {/* --saving card-- */}
      {/* {save? (<div className={styles.cardbg}>

      </div>):(null)} */}
      
      {/* --info card-- */}
      {/* {info? (<div className={styles.cardbg}>

      </div>):(null)} */}
      
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
