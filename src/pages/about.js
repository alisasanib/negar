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
          }}
          className={
            styles.about_me
          }>
          Hi! I'm Negar.
          <br />
          <br /> I am a 2D
          Artist and Animator.
          I love animation
          over any art,
          because it is where
          all arts are tied
          together and a
          single work is
          produced.
          <br />
          <br /> I have been
          working since 2018.
          Mostly, I worked as
          a freelancer, making
          ads/animation from 0
          to 100. At this
          moment, I am working
          on my short film
          that I am really
          excited about, as a
          MA Animation
          Production student
          in the UK.
          <br />
          <br /> If you'd like
          to make an
          interesting business
          inquiry or ask a
          question, please
          contact me via
          email:
          <a
            style={{
              color: "blue",
            }}
            href='mailto:Yaraghi.negar@gmail.com'>
            Yaraghi.negar@gmail.com
          </a>
        </div>
      </main>
    </>
  );
}
