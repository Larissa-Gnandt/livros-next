// src/app/index.tsx
import Head from 'next/head';
import styles from '../src/app/page.module.css'; // Ajuste o caminho conforme necessário
import { Menu } from '../componentes/Menu'; // Certifique-se de que o caminho esteja correto

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
}
