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
          Negar Yaraghi-
          About me/Contact
        </title>
        <meta
          name='description'
          content='Negar Yaraghi - About me/Contact details'
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
            color:
              "black !important",
          }}
          className={
            styles.about_me
          }>
          Hi! I&apos;m Negar.
          <br />
          <br /> I am a
          Storyboard and 2D
          Artist. I love
          animation over any
          art, because it is
          where all arts are
          tied together and a
          single work is
          produced.
          <br />
          <br /> I have been
          working since 2017.
          Mostly, I worked as
          a freelancer, making
          ads/animation from 0
          to 100. At this
          moment, I am working
          on the Storyboard of
          different projects
          that I am really
          excited about, as a
          MA Animation
          Production student
          in the UK.
          <br />
          <br /> If you&apos;d
          like to make an
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
