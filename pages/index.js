import Head from "next/head";
import styles from "../styles/Home.module.css";
import dictionary from "../resources/orienteering_dictionary.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Orienterings\-ordliste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Orienteringsordliste</h1>

        <p className={styles.description}>
          Slå opp ditt neste orienteringsuttrykk!
        </p>

        <dl>
          {dictionary.map(({ name, description, aliases }) => (
            <>
              {[name, ...aliases].map((dictEntry) => (
                <dt className={styles.oTerm} key={dictEntry} id={dictEntry}>
                  {dictEntry}
                </dt>
              ))}
              <dd
                className={styles.oDescription}
                key={name}
                dangerouslySetInnerHTML={{ __html: description }}
              ></dd>
            </>
          ))}
        </dl>
      </main>

      <footer className={styles.footer}>
        <p>
          Om du har lyst til å bidra med bedre beskrivelser eller nye ord kan du
          redigere{" "}
          <a
            href="https://github.com/mikaello/oordliste/blob/master/resources/orienteering_dictionary.json"
            target="_blank"
            rel="noopener noreferrer"
          >
            denne oversikten på GitHub
          </a>
          .
        </p>
        <p>
          {" "}
          Dersom du ønsker å utvikle en tjeneste basert på denne ordlisten kan
          du bruke det bakenforliggende{" "}
          <a href="https://oordliste.vercel.app/api/dictionary">API-iet</a>.
        </p>
      </footer>
    </div>
  );
}
// Mye o-software som kanskje kan legges inn: http://o-training.net/blog/2011/11/30/interesting-new-orienteering-analysis-tools-coming/
