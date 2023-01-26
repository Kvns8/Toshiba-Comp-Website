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
            Creosote and Ash Removal Device (C.A.R.D.) Abstract
          </h1>

          <p className={styles.description}>
          The Creosote and Ash Removal Device (C.A.R.D.) is used to remove creosote from
  chimney lining. C.A.R.D. scrubs and vacuums creosote into a disposal bag outside of the
  chimney. C.A.R.D. is a compact robot with embedded code designed to fit inside the average
  chimney. Using technology from both robot pool cleaners and vacuum cleaners, C.A.R.D. will
  work by climbing chimney walls using wheels whose tread mimic gecko feet. C.A.R.D will use
  three wire brushes to scrub dehydrated, calcified creosote from the chimney walls. Before using
  C.A.R.D, creosote acid treatment must be applied for the time specified, the creosote becomes
  brittle and hardens. Although this isn’t done by C.A.R.D, once the treatment is applied, C.A.R.D.
  can systematically remove creosote and ash without putting people at risk.
          </p>

          <div className={styles.grid}>
            <a href="https://toshiba-comp-website-emgj9bu46-kvns8.vercel.app/PresentTech" className={styles.card}>
                <h3>ExploraVision &rarr;</h3>
                <p>Find in-depth information about present technology</p>
              </a>

              <a href="https://toshiba-comp-website-emgj9bu46-kvns8.vercel.app/History" className={styles.card}>
                <h3>History &rarr;</h3>
                <p>Look into the History of C.A.R.D.</p>
              </a>

              <a
                href="https://toshiba-comp-website-emgj9bu46-kvns8.vercel.app/FutureTech"
                className={styles.card}
              >
                <h3>Future Technology &rarr;</h3>
                <p>See into the future of C.A.R.D.</p>
              </a>

              <a
                href="https://toshiba-comp-website-emgj9bu46-kvns8.vercel.app/ML"
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
          <a href="https://toshiba-comp-website-prmvos6w9-kvns8.vercel.app/Home">
            Go to Home &rarr;
          </a>
        </footer>
      </div>
    </>
    );
  }
