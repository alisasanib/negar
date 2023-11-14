import fs from "fs";
import {
  useState,
  useEffect,
} from "react";
import Typography from "@mui/material/Typography";
import YoutubeReactPlayer from "react-player/youtube";
import ReactPlayer from "react-player/file";
import ImageGallery from "./ImageGallery";
import useMediaQuery from "@mui/material/useMediaQuery";

const StoryBoardDetails = ({
  project,
}) => {
  const withMargin =
    useMediaQuery(
      "(min-width:900px)"
    );
  const [
    hasWindow,
    setHasWindow,
  ] = useState(false);
  useEffect(() => {
    if (
      typeof window !==
      "undefined"
    ) {
      setHasWindow(true);
    }
  }, []);
  function importAll(r) {
    return r
      .keys()
      .filter(
        (el) =>
          !el.startsWith(
            "public"
          )
      );
  }

  const images = importAll(
    require.context(
      `/public/storyboards/seagul/images`,
      true,
      /\.(png|jpe?g|svg)$/
    )
  ).map((el) => ({
    original: `/storyboards/${project.path}/images/${el}`,
    thumbnail: `/storyboards/${project.path}/images/${el}`,
  }));
  const imageslastSupper =
    importAll(
      require.context(
        `/public/storyboards/last_supper/images`,
        true,
        /\.(png|jpe?g|svg)$/
      )
    ).map((el) => ({
      original: `/storyboards/${project.path}/images/${el}`,
      thumbnail: `/storyboards/${project.path}/images/${el}`,
    }));

  const imageslastSupper2 =
    importAll(
      require.context(
        `/public/storyboards/last_supper2/images`,
        true,
        /\.(png|jpe?g|svg)$/
      )
    ).map((el) => ({
      original: `/storyboards/${project.path}/images/${el}`,
      thumbnail: `/storyboards/${project.path}/images/${el}`,
    }));

  const imagesHolloween =
    importAll(
      require.context(
        `/public/storyboards/Halloween/images`,
        true,
        /\.(png|jpe?g|svg)$/
      )
    ).map((el) => ({
      original: `/storyboards/${project.path}/images/${el}`,
      thumbnail: `/storyboards/${project.path}/images/${el}`,
    }));
  return (
    <div
      style={{
        overflow: "auto",
        margin: withMargin
          ? "20px 100px"
          : "0px",
        display: "flex",
        flexDirection:
          "column",
        gap: "20px",
      }}>
      <Typography
        id='modal-modal-title'
        sx={{
          color:
            "black !important",
        }}
        variant='h4'
        component='h2'>
        {project.title}
      </Typography>
      <Typography
        sx={{
          color:
            "black !important",
          mt: 2,
        }}
        id='modal-modal-description'
        variant='h6'>
        {project.description}
      </Typography>
      {project.videos.map(
        (video, id) =>
          video.includes(
            "www.youtube.com"
          ) ? (
            // eslint-disable-next-line react/jsx-key
            <div>
              <YoutubeReactPlayer
                key={id}
                width={"100%"}
                height={
                  "auto !important"
                }
                style={{
                  height:
                    "auto !important",
                  aspectRatio:
                    "16/9",
                  margin:
                    "auto",
                }}
                url={video}
                controls
              />
            </div>
          ) : (
            <ReactPlayer
              key={id}
              width={"100%"}
              height={
                "auto !important"
              }
              style={{
                height:
                  "auto !important",
                aspectRatio:
                  "16/9",
                margin:
                  "auto",
              }}
              url={video}
              controls
            />
          )
      )}
      {project.path && (
        <ImageGallery
          images={
            project.path ===
            "last_supper"
              ? imageslastSupper
              : project.path ===
                "last_supper2"
              ? imageslastSupper2
              : project.path ===
                "Halloween"
              ? imagesHolloween
              : images
          }
        />
      )}
      <div
        style={{
          marginBottom: 50,
        }}></div>
    </div>
  );
};

export default StoryBoardDetails;
