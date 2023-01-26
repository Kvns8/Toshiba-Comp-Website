import styles from '../styles/Home.module.css';

export default function History() {
  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.title}>
          History of Air Traffic Control
        </h1>
      </div>
      <div className={styles.container}>


        
        <main className={styles.main}>

          <p className={styles.description}>
          There were over 6,000 commercial flights made in 1929[6]. With the growing air traffic came the question of safety. It was only a matter of time before a crash happened. How could we prevent it? The person who answered that question was Archie League, the first air traffic controller. His methods were used to direct traffic at Lambert-St. Louis International Airport. He had two flags, one that was red and another one that was in a checkerboard pattern. Red meant to stop, while the checkerboard meant to go.[6] There was a London air traffic control tower nine years before that. In the 1940s, air traffic control towers used the radio and telephones to communicate with arriving planes. Radar was introduced into air traffic control and airports; it was a more accurate and safe form of determining an aircraft's position. In the 1950s, there were more airports using radar. In the 1960s, airports integrated some of the first computers, made by IBM, to assist with calculating flight plans and specific basic commands. In the 1970s, terminal production equipment was first implemented, called ARTS III. A new technology called Global Positioning System or GPS presented some new Ideas. In the 1980s, A well-trained and disciplined communications process between air traffic control and ground control was essential. Air traffic control must ensure that ground control is aware of any operations that will impact the taxiways and work with the approach radar controllers to create "gaps" in the arrival traffic to allow taxiing traffic to cross runways and departing aircraft to take off. In the 1990s, flight mapping was implemented. Flight mapping is a real-time animation of the flight traffic based on data taken from current plane positions.
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
