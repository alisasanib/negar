import fs from "fs";
import {
  useState,
  useEffect,
} from "react";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player/lazy";
import ImageGallery from "./ImageGallery";

const StoryBoardDetails = ({
  project,
}) => {
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
    console.log(
      "rrrrrrr",
      r.keys()
    );
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
      "/public/storyboards/seagul/images",
      true,
      /\.(png|jpe?g|svg)$/
    )
  ).map((el) => ({
    original: `/storyboards/${project.path}/images/${el}`,
    thumbnail: `/storyboards/${project.path}/images/${el}`,
  }));
  console.log(
    "imagesimages2",
    images
  );
  return (
    <div
      style={{
        overflow: "auto",
        margin: "20px 100px",
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
              url='https://vimeo.com/842171171'
              controls
            />
          )
      )}
      <ImageGallery
        images={images}
      />
      <div
        style={{
          marginBottom: 50,
        }}></div>
    </div>
  );
};

export default StoryBoardDetails;
