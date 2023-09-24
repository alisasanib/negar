import fs from "fs";
import {
  useState,
  useEffect,
} from "react";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player/lazy";
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
        variant='h4'
        component='h2'>
        {project.title}
      </Typography>
      <Typography
        id='modal-modal-description'
        variant='h6'
        sx={{ mt: 2 }}>
        {project.description}
      </Typography>
      {project.videos.map(
        (video) =>
          hasWindow && (
            // eslint-disable-next-line react/jsx-key
            <ReactPlayer
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
      <ImageGallery
        images={
          project.path ===
          "last_supper"
            ? imageslastSupper
            : images
        }
      />
      <div
        style={{
          marginBottom: 50,
        }}></div>
    </div>
  );
};

export default StoryBoardDetails;
