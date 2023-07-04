import {
  useEffect,
  useState,
} from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Imagelist from "../components/Imagelist";
import ImageListNonMason from "../components/ImageListNonMason";
import ImageGallery from "../components/ImageGallery";
import ReactPlayer from "react-player/lazy";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const [
    hasWindow,
    setHasWindow,
  ] = useState(false);
  useEffect(() => {
    if (
      typeof window !==
      "undefined"
    ) {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      <Head>
        <title>
          Negar Yaraghi
        </title>
        <meta
          name='description'
          content='Negar Yaraghi - 2D Artist - StoryBoard Artist'
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
        <h2
          style={{
            marginTop: "20px",
          }}
          className={
            styles.showreel_title
          }>
          Project 1
        </h2>
        <ImageGallery
          images={images}
        />
        <h2
          style={{
            fontWeight:
              "normal",
          }}
          className={
            styles.showreel_title
          }>
          Story Reel
        </h2>
        {hasWindow && (
          <ReactPlayer
            width={"100%"}
            height={"770px"}
            style={{
              maxWidth:
                "1320px",
            }}
            url='https://vimeo.com/833149917'
            controls
          />
        )}
        <div
          style={{
            margin: 40,
          }}></div>
        <h2
          style={{
            marginTop: "20px",
          }}
          className={
            styles.showreel_title
          }>
          Project 2
        </h2>
        <ImageGallery
          images={images2}
        />
        <div
          style={{
            margin: 40,
          }}></div>

        <h2
          style={{
            marginTop: "20px",
          }}
          className={
            styles.showreel_title
          }>
          Love Death + Robots
          Practice
        </h2>
        <ImageGallery
          images={images3}
        />
        <h2
          style={{
            fontWeight:
              "normal",
          }}
          className={
            styles.showreel_title
          }>
          Animatics
        </h2>
        {hasWindow && (
          <ReactPlayer
            width={"100%"}
            height={"770px"}
            style={{
              maxWidth:
                "1320px",
            }}
            url='https://vimeo.com/842136032'
            controls
          />
        )}
        {hasWindow && (
          <ReactPlayer
            width={"100%"}
            height={"770px"}
            style={{
              maxWidth:
                "1320px",
            }}
            url='https://vimeo.com/842171171'
            controls
          />
        )}
      </main>
    </>
  );
}

const images = [
  {
    original: "SB/SB/1.jpg",
    thumbnail: "SB/SB/1.jpg",
  },
  {
    original: "SB/SB/2.jpg",
    thumbnail: "SB/SB/2.jpg",
  },
  {
    original: "SB/SB/3.jpg",
    thumbnail: "SB/SB/3.jpg",
  },
  {
    original: "SB/SB/4.jpg",
    thumbnail: "SB/SB/4.jpg",
  },
  {
    original: "SB/SB/5.jpg",
    thumbnail: "SB/SB/5.jpg",
  },
  {
    original: "SB/SB/6.jpg",
    thumbnail: "SB/SB/6.jpg",
  },
  // {
  //   original: "SB/7.jpg",
  //   thumbnail: "SB/7.jpg",
  // },
  // {
  //   original: "SB/8.jpg",
  //   thumbnail: "SB/8.jpg",
  // },
  // {
  //   original: "SB/9.jpg",
  //   thumbnail: "SB/9.jpg",
  // },
];

const images2 = [
  {
    original: "SB2/01.jpg",
    thumbnail: "SB2/01.jpg",
  },
  {
    original: "SB2/02.jpg",
    thumbnail: "SB2/02.jpg",
  },
  {
    original: "SB2/03.jpg",
    thumbnail: "SB2/03.jpg",
  },
];

const images3 = [
  {
    original: "SB3/1.jpg",
    thumbnail: "SB3/1.jpg",
  },
  {
    original: "SB3/2.jpg",
    thumbnail: "SB3/2.jpg",
  },
  {
    original: "SB3/3.jpg",
    thumbnail: "SB3/3.jpg",
  },
  {
    original: "SB3/4.jpg",
    thumbnail: "SB3/4.jpg",
  },
  {
    original: "SB3/5.jpg",
    thumbnail: "SB3/5.jpg",
  },
];

const itemData = [
  {
    img: "sb/001.jpg",
    large: "sb/001.jpg",
    title: "Samak Ayar",
  },
  {
    img: "sb/002.jpg",
    large: "sb/002.jpg",
    title: "Samak Ayar",
  },
  {
    img: "sb/003.jpg",
    large: "sb/003.jpg",
    title: "Samak Ayar",
  },
  {
    img: "sb/004.jpg",
    large: "sb/004.jpg",
    title: "Samak Ayar",
  },
  {
    img: "sb/005.jpg",
    large: "sb/005.jpg",
    title: "Samak Ayar",
  },
  {
    img: "sb/006.jpg",
    large: "sb/006.jpg",
    title: "Samak Ayar",
  },
];
