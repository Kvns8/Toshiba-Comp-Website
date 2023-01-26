import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.title}>
          Necessary Breakthroughs
        </h1>
      </div>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>


        
        <main className={styles.main}>

          <p className={styles.description}>
          One of the most challenging sections of this project would be voice recognition technology. Because pilots come from multiple locations, they speak different languages, so the speak detection will have to be able to detect and translate numerous accents. This would be particularly hard, as some people have very thick accents and can not understand English words outside of the necessary ones for talking to ATC. To do this, we would need thousands of hours of talking with different accents from all around the world. Collecting data is one of the biggest barriers in creating AI, because you need sample data that is labeled with a correct answer.
          </p>

          <p className={styles.description}>
          Right now machine learning is quite data intensive, and thus expensive. Collecting data can take several months, and training can take even longer.
          </p>

          <img src="Placeholder.jpeg" alt="Placeholder"></img>

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
