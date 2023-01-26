import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function ML() {
  return (
    <>
      <div className={styles.background}>
        <h1 className={styles.title}>
          Machine Learning
        </h1>
      </div>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
        </Head>


        
        <main className={styles.main}>

          <h1 className={styles.header}>
          Reinforement Learning
          </h1>

          <p className={styles.description}>
          Reinforcement learning is where an AI is given multiple different sensors, and a points system[9]. For example, an AI that is taught to beat a video game, such as super mario, would be rewarded  when it caught power ups, or advanced in the game, but it would be punished if it lost a life. The module of the AI that would use reinforcement learning would be ground control, which would use a point system, which would start, and be decreased by one per second multiplied by close proximity to another aircraft. Whichever AI had the most amount of points would be selected for the next generation. For takeoff and landing, in the simulation, the AI would be rewarded one point for every successful takeoff, and punished for making mistakes that could lead to a crash.
          </p>

          <h1 className={styles.header}>
          Supervised Learning
          </h1>

          <p className={styles.description}>
          The next learning method is supervised learning. This method is where an AI is given labeled datasets, such as images of cars and buses that are labeled car, and bus. The AI would then try to detect whether a car is a car or a bus. Because it is already labeled, the AI would know if it was wrong or if it was right.
          </p>

          <h1 className={styles.header}>
          Unsupervised Learning
          </h1>

          <p className={styles.description}>
          The next learning method is unsupervised learning. This method is where an AI is given a cluster of unlabeled data and uses algorithms to analyze them and find patterns or data groupings. You can divide unsupervised learning into two categories: clustering and association rules. Clustering is a category of machine learning algorithms that groups the unlabeled data points based on their similarities and differences. After such an algorithm does its thing, you should end up with data points that are organized such that points in the same group will share many similarities and features, but are radically different to those in other groups. Some examples of clustering algorithms include hierarchical clustering, k-means clustering, and probabilistic clustering.
          </p>

          <p className={styles.description}>
          Association rules are another category of unsupervised learning that are used to find relationships between points in a dataset. Association rules and clustering sound similar but are very different in execution. To put it simply, association rules find data points that occur together or close together, whereas clustering algorithms look for characteristics shared among datasets and group them. Association rules are super useful for market analysis and forming handy relationships targeted at buying patterns that go along the lines of, “People who buy X product are more likely to buy Y.” Association rules are also often used in AIs built to detect financial fraud. Some association rules are the Eclat algorithm, the Apriori algorithm, and the FP-growth algorithm.
          </p>

          <div className={styles.grid}>
            <a href="https://nextjszvtxap-y0ad-k13xwdbz--3000.local-credentialless.webcontainer.io/PresentTech" className={styles.card}>
              <h3>ExploraVision &rarr;</h3>
              <p>Find in-depth information about present technology</p>
            </a>

            <a href="https://nextjszvtxap-y0ad-k13xwdbz--3000.local-credentialless.webcontainer.io/History" className={styles.card}>
              <h3>History &rarr;</h3>
              <p>Look into the History of C.A.R.D.</p>
            </a>

            <a
              href="https://nextjszvtxap-y0ad-k13xwdbz--3000.local-credentialless.webcontainer.io/FutureTech"
              className={styles.card}
            >
              <h3>Future Technology &rarr;</h3>
              <p>See into the future of C.A.R.D.</p>
            </a>

            <a
              href="https://nextjszvtxap-y0ad-k13xwdbz--3000.local-credentialless.webcontainer.io/ML"
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
