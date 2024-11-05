import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sidebar from '../components/Sidebar';
import CourseContainer from '../components/courseContainer';
import React, { useState } from 'react';

export default function Home() {
  const [lightMode, setLightMode] = useState(true);
  const invertLightMode = () =>{
    setLightMode(!lightMode);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>HWK: Grade Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar lm={lightMode} setLm={invertLightMode}/>
      <CourseContainer lm={lightMode}/>
    </div>
  );
}
