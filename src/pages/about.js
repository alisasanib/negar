import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function Animation() {
  return (
    <>
      <Head>
        <title>Negar Yaraghi - About me/Contact</title>
        <meta
          name='description'
          content='Negar Yaraghi- About me/ Contact details'
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
      <main className={styles.main}>
        {/* <div
          className={
            styles.banner
          }>
          <div
            className={
              styles.banner_text_container
            }>
            <h3
              className={
                styles.banner_text
              }>
              VISUAL
              DEVELOPMENT & ​
              ILLUSTRATION
            </h3>
          </div>
        </div> */}
        <div
          style={{
            marginTop: 30,
            color: "black !important",
          }}
          className={styles.about_me}>
          Nice to meet you! I&apos;m Negar, and I&apos;m passionate about telling stories filled with action and heart! I&apos;m a
          Storyboard Artist, Revisionist, and 2D Artist based in the UK, with over five years of experience in the
          animation industry. I&apos;ve had the opportunity to work on films, series, and commercials both within studios and
          as a freelancer. ☀️ Currently available for work! ☀️
          <br />
          <br />
          Contact: Email:{" "}
          <a
            style={{
              color: "blue",
            }}
            href='mailto:Yaraghi.negar@gmail.com'>
            Yaraghi.negar@gmail.com
          </a>{" "}
          <br />
          <br />
          Linkedin:{" "}
          <a
            style={{
              color: "blue",
            }}
            href='https://www.linkedin.com/in/negar-yaraghi/'
            target='_blank'>
            www.linkedin.com/in/negar-yaraghi
          </a>
          <br />
          <br />
          Instagram:{" "}
          <a
            style={{
              color: "blue",
            }}
            href='https://www.instagram.com/negar_yaraghi'
            target='_blank'>
            @negar_yaraghi
          </a>
          <br />
          <br />
          Thanks for visiting!
          <br />
          <br />
          <br />
          <br />
          <br />
          <iframe
            src={"/Negar Yaraghi-CV-Storyboard Artist.pdf"}
            width='100%'
            height='800px'
            style={{ border: "none", maxHeight: 800 }}
            title='PDF Viewer'></iframe>
        </div>
      </main>
    </>
  );
}
