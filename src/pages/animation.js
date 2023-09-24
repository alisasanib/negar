import {
  useState,
  useEffect,
} from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Imagelist from "../components/Imagelist";
// import ReactPlayer from "react-player/lazy";

const inter = Inter({
  subsets: ["latin"],
});

export default function Animation() {
  // const [
  //   hasWindow,
  //   setHasWindow,
  // ] = useState(false);
  // useEffect(() => {
  //   if (
  //     typeof window !==
  //     "undefined"
  //   ) {
  //     setHasWindow(true);
  //   }
  // }, []);
  return (
    <>
      <Head>
        <title>
          Negar Yaraghi -
          Animation
        </title>
        <meta
          name='description'
          content='2D Artist'
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
        <iframe
          src='https://player.vimeo.com/video/833417806?h=0e74b87abc'
          className='video-iframe'
          frameborder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowfullscreen></iframe>
      </main>
    </>
  );
}
