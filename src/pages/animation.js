import VimeoReactPlayer from "react-player/vimeo";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
// import Imagelist from "../components/Imagelist";
// import ReactPlayer from "react-player/lazy";

const inter = Inter({
  subsets: ["latin"],
});

export default function Animation() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>Negar Yaraghi - Animation</title>
        <meta
          name='description'
          content='Negar Yaraghi - Storyboard Artist - 2D Artist - Animation Showreel'
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
        {domLoaded && (
          <div style={{ width: "100%" }}>
            <VimeoReactPlayer
              width={"100%"}
              height={"auto !important"}
              style={{
                height: "auto !important",
                aspectRatio: "21/9",
                margin: "auto",
              }}
              url={"https://player.vimeo.com/video/833417806?h=0e74b87abc"}
              controls
            />
          </div>
        )}
        {/* <iframe
          src='https://player.vimeo.com/video/833417806?h=0e74b87abc'
          className='video-iframe'
          frameborder='0'
          width={"90%"}
          allow='autoplay; fullscreen; picture-in-picture'
          allowfullscreen></iframe> */}
      </main>
    </>
  );
}
