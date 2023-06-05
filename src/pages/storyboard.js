import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Imagelist from "../components/Imagelist";
import ImageListNonMason from "../components/ImageListNonMason";
import ImageGallery from "../components/ImageGallery";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
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
        <ImageGallery
          images={images}
        />
        <h2 className={styles.showreel_title}>Story Reel</h2>
        <iframe
          src='https://player.vimeo.com/video/833149917?h=b3e1586594'
          className='video-iframe'
          frameborder='0'
          width={"100%"}
          allow='autoplay; fullscreen; picture-in-picture'
          allowfullscreen></iframe>
      </main>
    </>
  );
}

const images = [
  {
    original: "SB/1.jpg",
    thumbnail: "SB/1.jpg",
  },
  {
    original: "SB/2.jpg",
    thumbnail: "SB/2.jpg",
  },
  {
    original: "SB/3.jpg",
    thumbnail: "SB/3.jpg",
  },
  {
    original: "SB/4.jpg",
    thumbnail: "SB/4.jpg",
  },
  {
    original: "SB/5.jpg",
    thumbnail: "SB/5.jpg",
  },
  {
    original: "SB/6.jpg",
    thumbnail: "SB/6.jpg",
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
