import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Imagelist from "../components/Imagelist";

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
          content='Negar Yaraghi - 2D Artist'
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
        <div
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
              ILLUSTRATION
            </h3>
          </div>
        </div>
        <Imagelist
          itemData={itemData}
        />
      </main>
    </>
  );
}

const itemData = [
  {
    img: "soldier.jpg",
    title: "soldier",
  },

  {
    img: "children-books/illustrations/flight GIF-03.gif",
    large:
      "children-books/illustrations/large/flight GIF-03.gif",
    title: "space",
  },
  {
    img: "Samak Ayar.jpg",
    title: "Samak Ayar",
  },
  {
    img: "FEDUAL JAPAN.jpg",
    title: "FEDUAL JAPAN",
  },

  {
    img: "Oldman.jpg",
    title: "Oldman",
  },
  {
    img: "Imprisoned-Designed for a mural.jpg",
    title:
      "Imprisoned-Designed for a mural",
  },
  {
    img: "naked girl.jpg",
    title: "naked girl",
  },
  {
    img: "children-books/illustrations/GIF File-06.gif",
    large:
      "children-books/illustrations/large/GIF File-06.gif",
    title: "space",
  },

  {
    img: "babydragontooth.jpg",
    title: "Bed",
  },
  {
    img: "last smile.jpg",
    title: "last smile",
  },

  {
    img: "GonewiththeWind.jpg",
    title: "GonewiththeWind",
  },

  {
    img: "in the train.jpg",
    title: "in the train",
  },
  //
  {
    img: "children-books/illustrations/After You.jpg",
    large:
      "children-books/illustrations/large/After You.jpg",
    title: "space",
  },
  {
    img: "MODERN LITTLE PRINCE.jpg",
    title:
      "MODERN LITTLE PRINCE",
  },

  {
    img: "space.jpg",
    title: "space",
  },
  {
    img: "chinese jelousy.jpg",
    title: "chinese ",
  },

  {
    img: "Emigration.jpg",
    title: "Emigration",
  },

  {
    img: "children-books/illustrations/sleepy in luggage- bigger.jpg",
    large:
      "children-books/illustrations/large/sleepy in luggage- bigger.jpg",
    title: "space",
  },

  {
    img: "children-books/illustrations/4.jpg",
    large:
      "children-books/illustrations/large/4.jpg",
    title: "space",
  },
  {
    img: "children-books/illustrations/final 4-text 2.jpg",
    large:
      "children-books/illustrations/large/final 4-text 2.jpg",
    title: "space",
  },
];
