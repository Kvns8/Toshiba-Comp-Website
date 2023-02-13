import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.title}>
          Project Skynet
        </h1>
      </div>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>


        
        <main className={styles.main}>

          <h1 className={styles.header}>
            Abstract
          </h1>

          <p className={styles.description}>
          The number of aircraft in the sky is increasing rapidly. Recent nationwide flight delays (caused by accidentally deleted Notice to Air Mission (NOTAM) files) remind us that air traffic control systems must be updated to work smoothly in the 21st century. The current human-controlled flight path technology has led to disasters such as Aeroflot flight 3352 which was caused by a sleeping air traffic controller [1]. The path forward is to create an Artificial Intelligence (AI) system that can control flights 24 hours a day, providing near-maximum efficiency and improved passenger safety.
          </p>

          <div className={styles.grid}>
            <a href="https://toshiba-comp-website.vercel.app/PresentTech" className={styles.card}>
                <h3>ExploraVision &rarr;</h3>
                <p>Find in-depth information about present technology</p>
              </a>

              <a href="https://toshiba-comp-website.vercel.app/History" className={styles.card}>
                <h3>History &rarr;</h3>
                <p>Look into the History of C.A.R.D.</p>
              </a>

              <a
                href="https://toshiba-comp-website.vercel.app/FutureTech"
                className={styles.card}
              >
                <h3>Future Technology &rarr;</h3>
                <p>See into the future of C.A.R.D.</p>
              </a>

              <a
                href="https://toshiba-comp-website.vercel.app/ML"
                className={styles.card}
              >
                <h3>Machine Learning &rarr;</h3>
                <p>
                  Learn more about the ML algorithms used to build AIs
                </p>
              </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a href="https://toshiba-comp-website.vercel.app/Home">
            Go to Home &rarr;
          </a>
        </footer>
      </div>
    </>
    );
  }
