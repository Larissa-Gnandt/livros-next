import "bootstrap/dist/css/bootstrap.min.css";
import "../src/app/page.module.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
