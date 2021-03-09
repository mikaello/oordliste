import Head from "next/head";
import styles from "../styles/Home.module.css";
import dictionary from "../resources/orienteering_dictionary.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Orienteringsordliste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Orienteringsordliste</h1>

        <p className={styles.description}>
          Slå opp ditt neste orienteringsuttrykk!
        </p>

        <dl>
          {dictionary.map(({ name, description }) => (
            <>
              <dt key={name}>{name}</dt>
              <dd key={name}>{description}</dd>
            </>
          ))}
        </dl>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
