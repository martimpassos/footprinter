import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';


const Viewer = dynamic(() => import('../components/viewer.js'), {
  ssr: false
});

export default () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Footprinter</title>
        <meta name="description" content="An open tool for georeferencing images in a 3D environment." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Viewer />;
    </div>
  )
};
