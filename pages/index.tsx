import Head from "next/head";
import styles from "../src/app/page.module.css";
import { Menu } from "../componentes/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1
          style={{ fontSize: "65px" }}
          className={`${styles.title} d-flex justify-content-center mx-auto mt-5`}
        >
          Página Inicial
        </h1>
      </main>
    </div>
  );
}
