import styles from '../styles/Home.module.css';

export default function PresentTech() {
  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.title}>
          Present Technology 
        </h1>
      </div>
      <div className={styles.container}>


        
        <main className={styles.main}>

          <p className={styles.description}>
          At the busiest airport in the United States, Atlanta Hartsfield-Jackson, 58 air traffic controllers work around the clock to ensure operations run smoothly[2]. The monitoring is split into three jobs, tower, approach & departure, and en route[3]. Tower controllers control plane movements on the ground, such as taxiing to a gate, or a runway, while approach & departure controllers control planes that are taking off and landing at the airport. The final job is en route controllers, who monitor flights that leave airport airspace and ensure flights are safe, and if they are not, en route controllers can alter their flight plans.
 To prevent confusion in communication, everyone uses English, but with an alphabet called the nato phonetic alphabet, also known as the radio alphabet, which changes certain letters so they can be heard better internationally[4]. While a non-air traffic controller might say," Lufthansa 526 taxi to runway four left via a3 b4 c7", an air traffic controller would say, "Lufthansa 526 taxi to runway four left via alpha tree, bravo fower, charlie seven". 

The ATC tower uses ASR(Airport Surveillance Radar) to track planes on the ground[5]. While it is good at getting positions of aircraft on the ground, it lacks the range to track planes in the sky, so we have ARSR(Air Route Surveillance Radar), which is that spinning red radar dish you see when you go by an airport. 

Common ARSR has a massive range of 200 nautical miles, equivalent to 230 miles. All of these technologies send their information to a STARS(Standard Terminal Automation Replacement System), which transforms weather reports, and plane information to the air traffic controller to provide quick information on the plane, such as its position, altitude, vertical speed, and proximity from other airplanes[5](NOTE: all plane must be at least three miles laterally, or 1,000 feet higher than all other planes in its vicinity.)

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
  )
    
    
}

