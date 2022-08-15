import "../styles/globals.css";
import Head from "next/head";
import Pagination from "../components/Pagination";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar></Navbar>
      <Head>

      </Head>
      <Pagination></Pagination>
      <Component {...pageProps} />
    </>
  );
}
