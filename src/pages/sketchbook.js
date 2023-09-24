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
        {/* {
    img: "children-books/illustrations/faces fff.jpg",
    large:
      "children-books/illustrations/large/faces fff.jpg",
    title: "space",
  }, */}
        <div
          style={{
            filter:
              "invert(0.15)",
          }}
          className={[
            styles.banner,
            styles.sketchbook,
          ].join(" ")}>
          <div
            className={
              styles.banner_text_container
            }>
            <h3
              className={
                styles.banner_text
              }
              style={{
                color:
                  "black",
              }}>
              SKETCHBOOK
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
    img: "sketchbook/10.jpg",
    title: "Samak Ayar",
  },
  {
    img: "sketchbook/11.jpg",
    title: "space",
  },
  {
    img: "sketchbook/1.jpg",
    large:
      "sketchbook-large/1.jpg",
    title: "Bed",
  },
  {
    img: "sketchbook/2.jpg",
    large:
      "sketchbook-large/2.jpg",
    title: "chinese ",
  },
  {
    img: "sketchbook/3.jpg",
    large:
      "sketchbook-large/3.jpg",
    title: "Emigration",
  },
  {
    img: "sketchbook/4.jpg",
    large:
      "sketchbook-large/4.jpg",
    title:
      "Imprisoned-Designed for a mural",
  },
  {
    img: "sketchbook/5.jpg",
    large:
      "sketchbook-large/5.jpg",
    title: "in the train",
  },
  {
    img: "sketchbook/6.jpg",
    large:
      "sketchbook-large/6.jpg",
    title: "last smile",
  },
  {
    img: "sketchbook/7.jpg",
    large:
      "sketchbook-large/7.jpg",
    title:
      "MODERN LITTLE PRINCE",
  },
  {
    img: "sketchbook/8.jpg",
    large:
      "sketchbook-large/8.jpg",
    title: "naked girl",
  },
  {
    img: "sketchbook/9.jpg",
    large:
      "sketchbook-large/9.jpg",
    title: "Oldman",
  },

  // {
  //   img: "sketchbook/12.jpg",
  //   title: "space",
  // },
  {
    img: "sketchbook/13.jpg",
    large:
      "sketchbook-large/13.jpg",
    title: "space",
  },
  {
    img: "sketchbook/14.jpg",
    large:
      "sketchbook-large/14.jpg",
    title: "space",
  },
  {
    img: "sketchbook/15.jpg",
    large:
      "sketchbook-large/15.jpg",
    title: "space",
  },
  {
    img: "sketchbook/16.jpg",
    large:
      "sketchbook-large/16.jpg",
    title: "space",
  },
  {
    img: "sketchbook/17.jpg",
    large:
      "sketchbook-large/17.jpg",
    title: "space",
  },
  {
    img: "sketchbook/18.jpg",
    large:
      "sketchbook-large/18.jpg",
    title: "space",
  },
];
