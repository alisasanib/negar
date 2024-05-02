import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Imagelist from "../components/Imagelist";
import Link from "next/link";
import { Typography } from "@mui/material";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Negar Yaraghi</title>
        <meta
          name='description'
          content='Negar Yaraghi - StoryBoard Artist - 2D Artist'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          property='og:title'
          content='Negar Yaraghi - Storyboard/2D Artist'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://www.negaryaraghi.com'
        />
        <meta
          property='og:image'
          content='https://www.negaryaraghi.com/soldier.jpg'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <main
        style={{
          padding: 0,
          height: "100vh",
        }}
        className={styles.main}>
        <Link
          style={{
            width: "100%",
            height: "33.3vh",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(/GonewiththeWind.jpg)",
          }}
          href='/illustration'>
          <div>
            <Typography
              id='modal-modal-description'
              variant='h3'
              sx={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                lineHeight: "33.3vh",
                curson: "poiner",
                textTransform: "uppercase",
              }}>
              Illustration
            </Typography>
          </div>
        </Link>
        <Link
          style={{
            width: "100%",
            height: "33.3vh",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(/storyboards/seagul/images/41.jpg)",
          }}
          href='/storyboard'>
          <div>
            <Typography
              id='modal-modal-description'
              variant='h3'
              sx={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                lineHeight: "33.3vh",
                curson: "poiner",
                textTransform: "uppercase",
              }}>
              Storyboard
            </Typography>
          </div>
        </Link>
        <Link
          style={{
            width: "100%",
            height: "33.3vh",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(/flight.gif)",
          }}
          href='/animation'>
          <div>
            <Typography
              id='modal-modal-description'
              variant='h3'
              sx={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                lineHeight: "33.3vh",
                curson: "poiner",
                textTransform: "uppercase",
              }}>
              Animation
            </Typography>
          </div>
        </Link>
      </main>
    </>
  );
}
