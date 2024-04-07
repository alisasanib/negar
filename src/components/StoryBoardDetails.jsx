/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import fs from "fs";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import YoutubeReactPlayer from "react-player/youtube";
import ReactPlayer from "react-player/file";
import ImageGallery from "./ImageGallery";
import useMediaQuery from "@mui/material/useMediaQuery";

const StoryBoardDetails = ({ project }) => {
  const withMargin = useMediaQuery("(min-width:900px)");
  const initialImage = useMediaQuery("(min-width:1428px)");
  const initialImage2 = useMediaQuery("(min-width:1028px)");
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  function importAll(r) {
    return r.keys().filter((el) => !el.startsWith("public"));
  }
  function customSort(a, b) {
    // Extract the numeric part and suffix (if exists) from the filenames
    const regex = /^\.\/(\d+)(?:-(\d+))?\.jpg$/;
    const [, numA, subNumA] = a.match(regex).map((part) => parseInt(part) || part);
    const [, numB, subNumB] = b.match(regex).map((part) => parseInt(part) || part);

    // Compare numeric parts first
    if (numA !== numB) {
      return numA - numB;
    }

    // If numeric parts are the same, compare the suffix parts
    if (subNumA !== subNumB) {
      // Sort by the suffix part numerically if it exists, otherwise treat as a string
      return (subNumA || "") - (subNumB || "");
    }

    // If both numeric parts and suffixes are the same, preserve the original order
    return 0;
  }

  const imagesNormanThumbnails = importAll(
    require.context(`/public/storyboards/Norman Rockwell assignment/thumbnails`, true, /\.(png|jpe?g|svg)$/)
  ).map((el) => ({
    key: el,
    original: `/storyboards/${project.path}/thumbnails/${el}`,
    thumbnail: `/storyboards/${project.path}/thumbnails/${el}`,
  }));
  const imagesWakeupThumbnails = importAll(
    require.context(`/public/storyboards/09- Personal Story- 2nd Pass/thumbnails`, true, /\.(png|jpe?g|svg)$/)
  ).map((el) => ({
    key: el,
    original: `/storyboards/${project.path}/thumbnails/${el}`,
    thumbnail: `/storyboards/${project.path}/thumbnails/${el}`,
  }));

  function compareFilenames(a, b) {
    // Extract numeric value from filename
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);

    // Compare numeric values
    return numA - numB;
  }

  console.log("selectedImages", project.images);

  const selectedImages = project.images?.length
    ? (project.url === "wake-up!" ? project.images.sort(compareFilenames) : project.images.sort(customSort)).map(
        (el) => ({
          key: el,
          original: `/storyboards/${project.path}/images/${el}`,
          thumbnail: `/storyboards/${project.path}/images/${el}`,
        })
      )
    : [];
  return (
    <div
      style={{
        overflow: "auto",
        margin: withMargin ? "20px 100px" : "0px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}>
      <Typography
        id='modal-modal-title'
        sx={{
          color: "black !important",
        }}
        variant='h4'
        component='h2'>
        {project.title}
      </Typography>
      <div
        style={{
          display: "flex",
          gap: initialImage ? "120px" : "20px",
          flexDirection: initialImage2 ? "row" : "column",
        }}>
        <Typography
          sx={{
            color: "black !important",
            mt: 2,
            whiteSpace: "pre-line",
          }}
          id='modal-modal-description'
          variant='h6'>
          {project.description}
        </Typography>
        {project.withInitialImage ? (
          <img
            style={{
              width: "200px",
              margin: "auto",
            }}
            src={`/storyboards/${project.path}/initial.jpg`}
          />
        ) : null}
      </div>
      {project.videos.map((video, id) =>
        video.includes("www.youtube.com") ? (
          // eslint-disable-next-line react/jsx-key
          <div key={id}>
            <YoutubeReactPlayer
              key={id}
              width={"100%"}
              height={"auto !important"}
              style={{
                height: "auto !important",
                aspectRatio: "16/9",
                margin: "auto",
              }}
              url={video}
              controls
            />
          </div>
        ) : (
          <ReactPlayer
            key={id}
            width={"100%"}
            height={"auto !important"}
            style={{
              height: "auto !important",
              aspectRatio: "16/9",
              margin: "auto",
            }}
            url={video}
            controls
          />
        )
      )}
      {project.path && <ImageGallery images={selectedImages} />}
      {project.thumbnails ? (
        <Typography
          sx={{
            color: "black !important",
            mt: 4,
          }}
          id='modal-modal-description'
          variant='h6'>
          Thumbnails
        </Typography>
      ) : null}
      {project.path && project.thumbnails && (
        <ImageGallery
          images={project.path === "Norman Rockwell assignment" ? imagesNormanThumbnails : imagesWakeupThumbnails}
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
