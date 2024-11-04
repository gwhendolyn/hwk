import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Sidebar from '../components/sidebar';
import CourseContainer from '../components/courseContainer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HWK: Grade Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <CourseContainer />
    </div>
  );
}
