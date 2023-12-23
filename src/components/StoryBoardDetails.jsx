/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
  const initialImage =
    useMediaQuery(
      "(min-width:1428px)"
    );
  const initialImage2 =
    useMediaQuery(
      "(min-width:1028px)"
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

  const imagesNorman =
    importAll(
      require.context(
        `/public/storyboards/Norman Rockwell assignment/images`,
        true,
        /\.(png|jpe?g|svg)$/
      )
    ).map((el) => ({
      original: `/storyboards/${project.path}/images/${el}`,
      thumbnail: `/storyboards/${project.path}/images/${el}`,
    }));

  const imagesNormanThumbnails =
    importAll(
      require.context(
        `/public/storyboards/Norman Rockwell assignment/thumbnails`,
        true,
        /\.(png|jpe?g|svg)$/
      )
    ).map((el) => ({
      original: `/storyboards/${project.path}/thumbnails/${el}`,
      thumbnail: `/storyboards/${project.path}/thumbnails/${el}`,
    }));

  const imagesBehind =
    importAll(
      require.context(
        `/public/storyboards/05- story behind the cartoon/images`,
        true,
        /\.(png|jpe?g|svg)$/
      )
    ).map((el) => ({
      original: `/storyboards/${project.path}/images/${el}`,
      thumbnail: `/storyboards/${project.path}/images/${el}`,
    }));

  const imagesWakeup =
    importAll(
      require.context(
        `/public/storyboards/09- Personal Story- 2nd Pass/images`,
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
      <div
        style={{
          display: "flex",
          gap: initialImage
            ? "120px"
            : "20px",
          flexDirection:
            initialImage2
              ? "row"
              : "column",
        }}>
        <Typography
          sx={{
            color:
              "black !important",
            mt: 2,
            textAlign:
              "justify",
            whiteSpace:
              "pre-line",
            textAlignLast:
              "justify",
          }}
          id='modal-modal-description'
          variant={
            project.withInitialImage
              ? initialImage
                ? "h4"
                : "h5"
              : "h6"
          }>
          {
            project.description
          }
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
              : project.path ===
                "Norman Rockwell assignment"
              ? imagesNorman
              : project.path ===
                "05- story behind the cartoon"
              ? imagesBehind
              : project.path ===
                "09- Personal Story- 2nd Pass"
              ? imagesWakeup
              : images
          }
        />
      )}
      {project.thumbnails ? (
        <Typography
          sx={{
            color:
              "black !important",
            mt: 4,
          }}
          id='modal-modal-description'
          variant='h6'>
          Thumbnails
        </Typography>
      ) : null}
      {project.path &&
        project.thumbnails && (
          <ImageGallery
            images={
              project.path ===
              "Norman Rockwell assignment"
                ? imagesNormanThumbnails
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
