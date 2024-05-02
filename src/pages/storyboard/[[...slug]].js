import fs from "fs";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import YoutubeReactPlayer from "react-player/youtube";
import styles from "@/styles/Home.module.css";
import CustomizedModalStoryBoard from "../../components/CustomizedModalStoryBoard";
import ImageListNonMason from "../../components/ImageListNonMason";
import StoryBoardDetails from "@/components/StoryBoardDetails";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

function importAll(r) {
  return r.keys().filter((el) => !el.startsWith("public"));
}

const inter = Inter({
  subsets: ["latin"],
});

export const getStaticPaths = async () => {
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
          slug: ["last_supper"],
        },
      },
      {
        params: {
          slug: ["last_supper_action"],
        },
      },
      {
        params: {
          slug: ["matador"],
        },
      },
      {
        params: {
          slug: ["untold_story"],
        },
      },
      {
        params: {
          slug: ["halloween"],
        },
      },
      {
        params: {
          slug: ["wake-up!"],
        },
      },
      {
        params: {
          slug: ["behind-a-cartoon"],
        },
      },
    ],
    fallback: true,
  };
};

export async function getStaticProps() {
  const fileNames = fs.readdirSync("./public/storyboards/seagul");
  return {
    props: {
      images: fileNames,
    },
  };
}

export default function Home({ imageNames }) {
  const searchParams = useSearchParams();
  const [aspectRatio, setAspectRation] = useState("25/9");
  const router = useRouter();
  const playerRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  useEffect(() => {
    const slugParams = searchParams.get("slug");
    if (slugParams) {
      setSelectedProject(images.find((image) => image.url === slugParams));
      setIsModalOpen(true);
    }
  }, [searchParams]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const handleOnClick = (id) => {
    setSelectedProject(images[id]);
    setIsModalOpen(true);
  };
  return (
    <>
      <Head>
        <title>Negar Yaraghi</title>
        <meta
          name='description'
          content='Negar Yaraghiii - StoryBoard Artist - Storyboards'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          property='og:title'
          content='The Rock'
        />
        <meta
          property='og:type'
          content='video.movie'
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

      {domLoaded && (
        <div
          style={{ position: "relative" }}
          ref={playerRef}>
          <YoutubeReactPlayer
            id='widget22'
            width={"90%"}
            height={"auto !important"}
            style={{
              height: "100px !important",
              aspectRatio,
              margin: "auto",
            }}
            url={"https://www.youtube.com/watch?v=KRi_tEA1Ei0"}
            controls
            playing={playing}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            full
          />
          <div
            style={playing ? { display: "none" } : {}}
            onClick={() => setPlaying(true)}
            className={styles.react_player_title}>
            Storyboard Showreel
          </div>
        </div>
      )}
      <main className={styles.main}>
        {/* <div className={[styles.banner, styles.storyboard].join(" ")}>
          <div className={styles.banner_text_container}>
            <h3 className={styles.banner_text}>STORYBOARD</h3>
          </div>
        </div> */}
        <ImageListNonMason
          itemData={images}
          handleOnClick={handleOnClick}
        />
        <CustomizedModalStoryBoard
          open={isModalOpen}
          handleClose={() => {
            setSelectedProject(null);
            setIsModalOpen(false);
            router.push(
              {
                pathname: "/storyboard",
                query: {},
              },
              undefined,
              {
                shallow: true,
              }
            );
          }}>
          <StoryBoardDetails
            path={selectedProject?.path}
            project={selectedProject}
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
    videos: ["https://www.youtube.com/watch?v=eYXmhlMFALw", "https://www.youtube.com/watch?v=xDuMYMVnVbY"],
    description: `"Freedom" is my personal project inspired by the forthcoming revolution in my country for freedom. It tells the story of a toy bird's quest for freedom. Despite facing challenges, the bird fights for its freedom. It follows the journey of the seagull longing to take flight in the sky but unexpectedly finding freedom amidst the vastness of the sea.`,
    path: "seagul",
    genre: "Drama",
    gif: "storyboards/seagul/GIF cover/resize.gif",
    images: importAll(require.context(`/public/storyboards/seagul/images`, true, /\.(png|jpe?g|svg)$/)),
  },
  {
    img: "storyboards/last_supper/images/19.jpg",
    title: "Last Supper",
    url: "last_supper",
    description: `"Last Supper" is my personal project in the Drama-Action genre, drawing inspiration from Kazuo Ishiguro's book "A Family Supper." 
Parts 1 and 2 delve into the backstory to uncover the reasons for the hatred, while Part 3 (the next section in my SB page) features the action scene where revenge is sought. 
This story is a work in progress.`,
    videos: ["https://www.youtube.com/watch?v=7eJt55VE5cg&t=1s", "https://www.youtube.com/watch?v=CHqASfAJ6bs"],
    path: "last_supper",
    genre: "Drama Scenes",
    gif: "storyboards/last_supper/GIF cover/resize.gif",
    images: importAll(require.context(`/public/storyboards/last_supper/images`, true, /\.(png|jpe?g|svg)$/)),
  },
  {
    img: "storyboards/last_supper/GIF cover/43.jpg",
    title: "Last Supper",
    description: `"Last Supper" is my personal project in the Drama-Action genre, drawing inspiration from Kazuo Ishiguro's book "A Family Supper." 
Parts 1 and 2 (the previous section in my SB page) delve into the backstory to uncover the reasons for the hatred, while Part 3  features the action scene where revenge is sought. 
This story is a work in progress.`,
    videos: ["https://www.youtube.com/watch?v=ulASbkbcmj0"],
    url: "last_supper_action",
    path: "last_supper2",
    genre: "Action Scenes",
    gif: "storyboards/last_supper2/resize.gif",
    images: importAll(require.context(`/public/storyboards/last_supper2/images`, true, /\.(png|jpe?g|svg)$/)),
  },
  {
    img: "storyboards/matador/cover 02.jpg",
    title: "The Matador",
    description: "",
    videos: ["https://www.youtube.com/watch?v=v8FDbhQnLiI"],
    url: "matador",
    description: `"The Matador" is an exercise in portraying "CONFIDENCE" in acting. It features a scene where the matador, brimming with self-confidence, takes on the bull bare-handedly, showcasing his unwavering belief in his abilities.`,
    genre: "Acting Practice",
    gif: "storyboards/matador/ezgif.com-video-to-gif (1).gif",
    // images: importAll(require.context(`/public/storyboards/matador/images`, true, /\.(png|jpe?g|svg)$/)),
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
    gif: "storyboards/Norman Rockwell assignment/GIF/4.gif",
    description: `Behind every image lies an untold story. 
      This project is my attempt to delve into the narrative woven by the renowned artist Norman Rockwell in his exceptional masterpiece. Through this endeavor, I aimed to explore the connections among the three characters depicted and to provide a critique of the typical questions asked in job interviews, which often fail to fully assess the skills and abilities of applicants.`,
    videos: ["https://www.youtube.com/watch?v=sX88n9zBRvc"],
    genre: "Comedy Action",
    images: importAll(
      require.context(`/public/storyboards/Norman Rockwell assignment/images`, true, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    img: "storyboards/09- Personal Story- 2nd Pass/images/75.jpg",
    title: "Wake Up!",
    url: "wake-up!",
    description: "",
    videos: ["https://www.youtube.com/watch?v=3aWlKW--bk4"],
    thumbnails: true,
    path: "09- Personal Story- 2nd Pass",
    genre: "Comedy Action",
    description: `If you're a night owl like me, you probably know the feeling of your bed practically swallowing you up when it's time to drag yourself to work. Well, this story is right up your alley! It's a personal tale that paints a picture of the daily struggle I go through trying to peel myself out of bed each morning. And hey, trust me, it's not all on me!`,
    gif: "storyboards/09- Personal Story- 2nd Pass/GIF/1.gif",
    images: importAll(
      require.context(`/public/storyboards/09- Personal Story- 2nd Pass/images`, true, /\.(png|jpg|svg)$/)
    ),
  },
  {
    img: "storyboards/Halloween/cover.jpg",
    title: "Halloween",
    url: "halloween",
    description: "",
    videos: [],
    path: "Halloween",
    genre: "Horror",
    images: importAll(require.context(`/public/storyboards/Halloween/images`, true, /\.(png|jpe?g|svg)$/)),
  },
  {
    img: "storyboards/05- story behind the cartoon/images/45.jpg",
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
    gif: "storyboards/05- story behind the cartoon/GIF/2.gif",
    images: importAll(
      require.context(`/public/storyboards/05- story behind the cartoon/images`, true, /\.(png|jpe?g|svg)$/)
    ),
  },
];
