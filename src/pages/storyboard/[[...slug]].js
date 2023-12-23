import fs from "fs";
import {
  useEffect,
  useState,
} from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CustomizedModalStoryBoard from "../../components/CustomizedModalStoryBoard";
import ImageListNonMason from "../../components/ImageListNonMason";
import StoryBoardDetails from "@/components/StoryBoardDetails";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ["latin"],
});

export const getStaticPaths =
  async () => {
    return {
      paths: [
        {
          params: {
            slug: null,
          },
        },
        {
          params: {
            slug: ["freedom"],
          },
        },
        {
          params: {
            slug: [
              "last_supper",
            ],
          },
        },
        {
          params: {
            slug: [
              "last_supper_action",
            ],
          },
        },
        {
          params: {
            slug: ["matador"],
          },
        },
        {
          params: {
            slug: [
              "untold_story",
            ],
          },
        },
        {
          params: {
            slug: [
              "halloween",
            ],
          },
        },
        {
          params: {
            slug: [
              "wake-up!",
            ],
          },
        },
        {
          params: {
            slug: [
              "behind-a-cartoon",
            ],
          },
        },
      ],
      fallback: true,
    };
  };

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
  const searchParams =
    useSearchParams();
  const router = useRouter();

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
    const slugParams =
      searchParams.get(
        "slug"
      );
    if (slugParams) {
      setSelectedProject(
        images.find(
          (image) =>
            image.url ===
            slugParams
        )
      );
      setIsModalOpen(true);
    }
  }, [searchParams]);
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
            router.push(
              {
                pathname:
                  "/storyboard",
                query: {},
              },
              undefined,
              {
                shallow: true,
              }
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
    url: "freedom",
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
    url: "last_supper",
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
    url: "last_supper_action",
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
    url: "matador",
    genre: "Acting Practice",
    gif: "storyboards/matador/ezgif.com-video-to-gif (1).gif",
  },
  {
    img: "storyboards/Norman Rockwell assignment/cover3.jpg",
    title: "Untold Story",
    path: "Norman Rockwell assignment",
    description: "",
    thumbnails: true,
    withReelTitle: true,
    withInitialImage: true,
    url: "untold_story",
    description:
      "Behind every image lies an untold story. What's the story behind this exceptional masterpiece crafted by the one and only Norman Rockwell?",
    videos: [],
    genre: "Comedy Action",
  },
  {
    img: "storyboards/09- Personal Story- 2nd Pass/images/Waking up-21-01.jpg",
    title: "Wake Up!",
    url: "wake-up!",
    description: "",
    videos: [],
    path: "09- Personal Story- 2nd Pass",
    genre: "Comedy Action",
  },
  {
    img: "storyboards/Halloween/cover.jpg",
    title: "Halloween",
    url: "halloween",
    description: "",
    videos: [],
    path: "Halloween",
    genre: "Horror",
  },
  {
    img: "storyboards/05- story behind the cartoon/images/20.jpg",
    title: "Behind a Cartoon",
    url: "behind-a-cartoon",
    description: "",
    videos: [],
    path: "05- story behind the cartoon",
    genre: "Comedy",
    description: `A story that builds up to a specific punchline; and the punchline was one of the Gary Larson's cartoons.
    A series of amusing accidents unfolds, ultimately leading to that final frame that is his original cartoon. `,
    withReelTitle: true,
    withInitialImage: true,
  },
];
