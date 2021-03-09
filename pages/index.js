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
              <dt key={name} id={name}>
                {name}
              </dt>
              <dd
                key={name}
                dangerouslySetInnerHTML={{ __html: description }}
              ></dd>
            </>
          ))}
        </dl>
      </main>

      <footer className={styles.footer}>
        Om du har lyst til å bidra med bedre beskrivelser eller nye ord kan du
        redigere&nbsp;
        <a
          href="https://github.com/mikaello/oordliste/blob/master/resources/orienteering_dictionary.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          denne oversikten på GitHub
        </a>
      </footer>
    </div>
  );
}
// Mye o-software som kanskje kan legges inn: http://o-training.net/blog/2011/11/30/interesting-new-orienteering-analysis-tools-coming/
