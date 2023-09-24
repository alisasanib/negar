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
          content='Negar Yaraghi - 2D Artist - Book Illustration'
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
          className={[
            styles.banner,
            styles.bookIllustration,
          ].join(" ")}>
          <div
            className={
              styles.banner_text_container
            }>
            <h3
              className={
                styles.banner_text
              }>
              BOOK
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
    img: "children-books/book 01/0.jpg",
    large:
      "children-books/book 01/large/0.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 04/8.jpg",
    large:
      "children-books/book 04/large/8.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 05/3-4.jpg",
    large:
      "children-books/book 05/large/3-4.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 05/4-3.jpg",
    large:
      "children-books/book 05/large/4-3.jpg",
    title: "Samak Ayar",
  },

  {
    img: "children-books/book 01/5.jpg",
    large:
      "children-books/book 01/large/5.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 04/11.jpg",
    large:
      "children-books/book 04/large/11.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 05/7.jpg",
    large:
      "children-books/book 05/large/7.jpg",
    title: "Samak Ayar",
  },

  {
    img: "children-books/book 01/7.jpg",
    large:
      "children-books/book 01/large/7.jpg",
    title: "Samak Ayar",
  },

  {
    img: "children-books/book 01/12.jpg",
    large:
      "children-books/book 01/large/12.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 02/3.jpg",
    large:
      "children-books/book 02/large/3.jpg",
    title: "Samak Ayar",
  },

  {
    img: "children-books/book 03/7.jpg",
    large:
      "children-books/book 03/large/7.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 03/test.jpg",
    large:
      "children-books/book 03/large/test.jpg",
    title: "Samak Ayar",
  },

  {
    img: "children-books/book 04/0.jpg",
    large:
      "children-books/book 04/large/0.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 04/1.jpg",
    large:
      "children-books/book 04/large/1.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 01/9.jpg",
    large:
      "children-books/book 01/large/9.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 04/3.jpg",
    large:
      "children-books/book 04/large/3.jpg",
    title: "Samak Ayar",
  },

  {
    img: "children-books/book 04/15.jpg",
    large:
      "children-books/book 04/large/15.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 05/3-1.jpg",
    large:
      "children-books/book 05/large/3-1.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 05/3-3.jpg",
    large:
      "children-books/book 05/large/3-3.jpg",
    title: "Samak Ayar",
  },

  {
    img: "children-books/book 05/4-1.jpg",
    large:
      "children-books/book 05/large/4-1.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 05/4-2.jpg",
    large:
      "children-books/book 05/large/4-2.jpg",
    title: "Samak Ayar",
  },

  {
    img: "children-books/book 05/12.jpg",
    large:
      "children-books/book 05/large/12.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 03/15.jpg",
    large:
      "children-books/book 03/large/15.jpg",
    title: "Samak Ayar",
  },
  {
    img: "children-books/book 03/6.jpg",
    large:
      "children-books/book 03/large/6.jpg",
    title: "Samak Ayar",
  },
];
