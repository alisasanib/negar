import React, {
  useState,
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

export default function MasonryImageList({
  itemData,
  handleOnClick,
}) {
  const matches2col =
    useMediaQuery(
      "(min-width:600px)"
    );
  const matches3col =
    useMediaQuery(
      "(min-width:769px)"
    );

  const [
    isfullScreen,
    setIsfullScreen,
  ] = useState(false);
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
            }}
            cols={3}>
            {itemData.map(
              (item, id) => (
                <ImageListItem
                  key={
                    item.img
                  }
                  style={{
                    cursor:
                      "pointer",
                  }}
                  onClick={
                    () =>
                      handleOnClick(
                        id
                      )
                    // handleFullScreen(
                    //   id
                    // )
                  }>
                  <img
                    // src={`/${item.img}`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={
                      item.title
                    }
                    loading='lazy'
                  />
                </ImageListItem>
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
