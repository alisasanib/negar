import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Imagelist from "../components/Imagelist";

const inter = Inter({
  subsets: ["latin"],
});

export default function Animation() {
  return (
    <>
      <Head>
        <title>
          Negar Yaraghi -
          About me/Contact
        </title>
        <meta
          name='description'
          content='About me Contact details'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <main
        className={
          styles.main
        }>
        {/* <div
          className={
            styles.banner
          }>
          <div
            className={
              styles.banner_text_container
            }>
            <h2
              className={
                styles.banner_text
              }>
              VISUAL
              DEVELOPMENT & ​
              ILLUSTRATION
            </h2>
          </div>
        </div> */}
        <div
          style={{
            marginTop: 30,
          }}>
          Hi I am Negar
          Yaraghi 2D animator
        </div>
      </main>
    </>
  );
}
