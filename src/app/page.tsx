// pages/_app.tsx

import 'bootstrap/dist/css/bootstrap.min.css'; // Importar o CSS do Bootstrap
import '../styles/globals.css'; // Outros estilos globais, se houver
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
