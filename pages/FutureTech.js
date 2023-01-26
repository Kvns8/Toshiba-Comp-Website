import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function FutureTech() {
  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.title}>
          The Future of Air Traffic Control
        </h1>
      </div>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>


        
        <main className={styles.main}>

          <p className={styles.description}>
          Skynet will be a modular AI with multiple sections and functions. The first function is ground control. Ground control will have a list of every plane on the ground and where they are. When a human asks the Ai to taxi, voice recognition technology will repeat the instructions to confirm them. Once confirmation has been granted, Skynet will do a pathfinding algorithm through taxiways to find the fastest path that does not endanger the lives of the passengers. To ensure the safety of passengers, humans will be monitoring the AI at all times. While the plane is in the air, the AI will constantly be fed information about its whereabouts to verify that It is on the correct flight path. If unexpected weather conditions occur, the AI will either pathfind to the nearest available airport or slightly alter the flight plan to avoid it. The most significant feature that this AI will have is auto-flight planning. When a flight is scheduled, the AI can create multiple flight plans that the human ATC can accept or deny.
          </p>

          <p className={styles.description}>
          Recent studies have shown that contrails are responsible for over 57% of climate change in aviation[8]. Contrails are ice crystals that form at 25,000-40,000 feet, and most disappear quickly, but on rare occasions, some stick around for hours. Contrails trap heat that would have gone into outer space, causing the local temperature to rise[7]. Because they are formed under particular conditions, if we slightly alter flight plans of the 1.9% of flights that create contrails, we can reduce the impact of contrails by 59%[8]. An AI can achieve this by getting weather data that shows where contrails form and avoiding these areas.
          </p>

          <p className={styles.description}>
          The final aspect of this AI would be controlling planes coming in and landing. Business Insider states takeoff and landing are the two riskiest flight times. The recent incident at JFK international has shown how air traffic controllers can save lives. Like this incident, an air traffic controller could have prevented many of the 80% of human-caused accidents. Because of this, the AI will only create a priority checklist of all planes trying to land and take off. Along with this, AI will always keep track of a plane's whereabouts and notify air traffic controllers and the pilot about an error and how to fix it.
          </p>

          <p className={styles.description}>
          Research at the Montreal Neurological Institute has shown that the human brain is more activated when listening to a human voice than when listening to an AI voice. Because communication is essential during flights, One of the most critical parts of this AI would be the ability to replicate a human. This AI would always speak in a calm tone because, during a crisis, humans tend to make irrational decisions, and the best way to keep them from doing this is to give them specific and simple instructions in a calm tone.  If a pilot doesn't understand english that well, the AI will be able to speak simple commands such as “Go around” in the pilot's native language.
          </p>

          <p className={styles.description}>
	        To create this AI we would first split up all of the functions into smaller, less complex agents. Because they are now split up, we are able to use different learning models. The three main learning models are reinforcement, supervised, and unsupervised learning. Go to the Machine Learning page to learn more.
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
          <a href="https://nextjszvtxap-y0ad-k13xwdbz--3000.local-credentialless.webcontainer.io/Home">
            Go to Home &rarr;
          </a>
        </footer>
      </div>
    </>
    );
  }
