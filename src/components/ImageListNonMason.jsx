/* eslint-disable @next/next/no-img-element */
import React, {
  useState,
  useEffect,
} from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Masonry, {
  ResponsiveMasonry,
} from "react-responsive-masonry";
import FullScreenImage from "./FullScreenImage";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export const useImageLoader =
  (items) => {
    const [
      imageSrc,
      _setImageSrc,
    ] = useState([]);

    useEffect(() => {
      let images = [];
      items.forEach(
        (element, i) => {
          const img =
            new Image();
          img.onload = () => {
            _setImageSrc(
              (prevState) => {
                const curr = [
                  ...prevState,
                ];
                curr[i] =
                  "/" +
                  element.gif;

                return curr;
              }
            );
          };
          img.src =
            element.gif;
          images = [
            ...images,
            img,
          ];
        }
      );
    }, [items]);

    return [imageSrc];
  };

export default function MasonryImageList({
  itemData,
  handleOnClick,
}) {
  const router = useRouter();
  const matches2col =
    useMediaQuery(
      "(min-width:600px)"
    );
  const matches3col =
    useMediaQuery(
      "(min-width:769px)"
    );
  const [gifs] =
    useImageLoader(itemData);
  const [
    isfullScreen,
    setIsfullScreen,
  ] = useState(false);
  const [gifId, setGidId] =
    useState(null);

  const [
    displayedImage,
    setDisplayedImage,
  ] = useState(false);

  const handleFullScreen = (
    id
  ) => {
    setIsfullScreen(true);
    setDisplayedImage(id);
  };

  const handleChangeFullScreenImage =
    (plus) => {
      setDisplayedImage(
        (displayedImage) =>
          displayedImage +
            plus >
          itemData.length - 1
            ? 0
            : displayedImage +
                plus <
              0
            ? itemData.length -
              1
            : displayedImage +
              plus
      );
    };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: "20px",
        justifyContent:
          "center",
      }}>
      <Grid
        item
        xs={12}
        md={12}
        lg={10}>
        <Box>
          <ImageList
            sx={{
              overflow:
                "hidden",
              gap: "10px !important",
            }}
            cols={
              matches3col
                ? 3
                : 1
            }>
            {itemData.map(
              (item, id) => (
                // eslint-disable-next-line react/jsx-key
                <Link
                  href={`/storyboard/${item.url}`}>
                  <span
                    onMouseOver={() =>
                      setGidId(
                        id
                      )
                    }
                    onMouseOut={() =>
                      setGidId(
                        null
                      )
                    }
                    style={{
                      position:
                        "relative",
                    }}>
                    <ImageListItem
                      key={
                        item.img
                      }
                      style={{
                        cursor:
                          "pointer",
                      }}
                      onClick={() => {
                        handleOnClick(
                          id
                        );
                      }}>
                      <img
                        src={
                          gifId !==
                          id
                            ? `/${item.img}?w=248&fit=crop&auto=format`
                            : gifs[
                                id
                              ] ??
                              `/${item.img}?w=248&fit=crop&auto=format`
                        }
                        srcSet={
                          gifId !==
                          id
                            ? `/${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`
                            : gifs[
                                id
                              ] ??
                              `/${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`
                        }
                        alt={
                          item.title
                        }
                        loading='lazy'
                      />
                    </ImageListItem>

                    <Typography
                      id='modal-modal-description'
                      variant='h6'
                      sx={{
                        mt: 1,
                        position:
                          "absolute",
                        left: "10px",
                        bottom:
                          "10px",
                        transform:
                          "translate(0%, 0%)",
                        color:
                          "white",
                        fontWeight:
                          "bold",
                        lineHeight: 0.9,
                        fontSize:
                          matches3col
                            ? "2.25rem"
                            : "1.35rem",
                      }}>
                      {
                        item.title
                      }
                      <br />
                      {
                        item.genre
                      }
                    </Typography>
                  </span>
                </Link>
              )
            )}
          </ImageList>
          {isfullScreen && (
            <FullScreenImage
              image={
                itemData[
                  displayedImage
                ]
              }
              closeModal={() =>
                setIsfullScreen(
                  false
                )
              }
              changeScreenImage={
                handleChangeFullScreenImage
              }
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
