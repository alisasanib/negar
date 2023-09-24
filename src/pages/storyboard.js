import fs from "fs";
import {
  useEffect,
  useState,
} from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CustomizedModalStoryBoard from "../components/CustomizedModalStoryBoard";
import ImageListNonMason from "../components/ImageListNonMason";
import StoryBoardDetails from "@/components/StoryBoardDetails";

const inter = Inter({
  subsets: ["latin"],
});

export async function getStaticProps() {
  console.log("123");
  const fileNames =
    fs.readdirSync(
      "./public/storyboards/seagul"
    );
  console.log(
    "fileNames",
    fileNames
  );
  return {
    props: {
      images: fileNames,
    },
  };
}

export default function Home({
  imageNames,
}) {
  console.log(
    "imagesimages12",
    imageNames
  );
  const [
    hasWindow,
    setHasWindow,
  ] = useState(false);
  const [
    imagesnew2,
    setImagesnew2,
  ] = useState(null);
  const [
    isModalOpen,
    setIsModalOpen,
  ] = useState(false);
  const [
    selectedProject,
    setSelectedProject,
  ] = useState(null);
  useEffect(() => {
    const list = [];
    for (
      let index = 1;
      index < 70;
      index++
    ) {
      list.push({
        original: `storyboard -Last Supper/${index}.jpg`,
        thumbnail: `storyboard -Last Supper/${index}.jpg`,
      });
    }
    setImagesnew2(list);
  }, []);
  useEffect(() => {
    if (
      typeof window !==
      "undefined"
    ) {
      setHasWindow(true);
    }
  }, []);

  const handleOnClick = (
    id
  ) => {
    console.log(id);
    setSelectedProject(
      images[id]
    );
    setIsModalOpen(true);
  };
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
        <div
          className={[
            styles.banner,
            styles.storyboard,
          ].join(" ")}>
          <div
            className={
              styles.banner_text_container
            }>
            <h2
              className={
                styles.banner_text
              }>
              STORYBOARD
            </h2>
          </div>
        </div>
        <ImageListNonMason
          itemData={images}
          handleOnClick={
            handleOnClick
          }
        />
        <CustomizedModalStoryBoard
          open={isModalOpen}
          handleClose={() => {
            setSelectedProject(
              null
            );
            setIsModalOpen(
              false
            );
          }}>
          <StoryBoardDetails
            path={
              selectedProject?.path
            }
            project={
              selectedProject
            }
          />
        </CustomizedModalStoryBoard>
      </main>
    </>
  );
}

const images = [
  {
    img: "storyboards/seagul/images/56.jpg",
    title: "Freedom",
    description:
      "Seagull is a bird in the search of freedom",
    videos: [
      "https://vimeo.com/833149917",
    ],
    path: "seagul",
    genre: "Drama",
    gif: "storyboards/seagul/GIF cover/resize.gif",
  },
  {
    img: "storyboards/last_supper/GIF cover/43.jpg",
    title: "Last Supper",
    description:
      "Seagull is a bird in the search of freedom",
    videos: [
      "storyboards/last_supper/Video/1.mp4",
      "storyboards/last_supper/Video/2.mp4",
      "storyboards/last_supper/Video/3.mp4",
      "storyboards/last_supper/Video/4.mp4",
    ],
    path: "last_supper",
    genre: "Action",
    gif: "storyboards/last_supper/GIF cover/resize.gif",
  },
];
