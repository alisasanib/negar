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
  const fileNames =
    fs.readdirSync(
      "./public/storyboards/seagul"
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
  const [
    hasWindow,
    setHasWindow,
  ] = useState(false);
  const [
    isModalOpen,
    setIsModalOpen,
  ] = useState(false);
  const [
    selectedProject,
    setSelectedProject,
  ] = useState(null);
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
          content='Negar Yaraghi - StoryBoard Artist - Storyboards'
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
            <h3
              className={
                styles.banner_text
              }>
              STORYBOARD
            </h3>
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
    description: "",
    videos: [
      "https://www.youtube.com/watch?v=eYXmhlMFALw",
      "https://www.youtube.com/watch?v=xDuMYMVnVbY",
    ],
    path: "seagul",
    genre: "Drama",
    gif: "storyboards/seagul/GIF cover/resize.gif",
  },
  {
    img: "storyboards/last_supper2/30.jpg",
    title: "Last Supper",
    description: "",
    videos: [
      "https://www.youtube.com/watch?v=7eJt55VE5cg&t=1s",
      "https://www.youtube.com/watch?v=CHqASfAJ6bs",
    ],
    path: "last_supper",
    genre: "Drama Scenes",
    gif: "storyboards/last_supper/GIF cover/resize.gif",
  },
  {
    img: "storyboards/last_supper/GIF cover/43.jpg",
    title: "Last Supper",
    description: "",
    videos: [
      "https://www.youtube.com/watch?v=ulASbkbcmj0",
    ],
    path: "last_supper2",
    genre: "Action Scenes",
    gif: "storyboards/last_supper2/resize.gif",
  },
  {
    img: "storyboards/matador/cover 02.jpg",
    title: "The Matador",
    description: "",
    videos: [
      "https://www.youtube.com/watch?v=v8FDbhQnLiI",
    ],
    genre: "Acting Practice",
    gif: "storyboards/matador/ezgif.com-video-to-gif (1).gif",
  },
  {
    img: "storyboards/Norman Rockwell assignment/cover.jpg",
    title:
      "Norman Rockwell assignment",
    path: "Norman Rockwell assignment",
    description: "",
    thumbnails: true,
    withInitialImage: true,
    description:
      "Behind every image lies an untold story. What's the story behind this exceptional masterpiece crafted by the one and only Norman Rockwell?",
    videos: [],
    genre: "Acting Practice",
  },
  {
    img: "storyboards/Halloween/images/20.jpg",
    title: "Halloween",
    description: "",
    videos: [],
    path: "Halloween",
    genre: "Horror",
  },
];
