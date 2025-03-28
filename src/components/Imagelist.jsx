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
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              350: 1,
              750: 2,
              900: 3,
            }}>
            <Masonry gutter='10px'>
              {itemData.map(
                (
                  item,
                  id
                ) => (
                  <img
                    key={id}
                    style={{
                      cursor:
                        "pointer",
                      minWidth:
                        "100%",
                      minHeight:
                        "auto",
                    }}
                    onClick={() =>
                      handleFullScreen(
                        id
                      )
                    }
                    // src={`/${item.img}`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={
                      item.title
                    }
                    loading='lazy'
                  />
                )
              )}
            </Masonry>
          </ResponsiveMasonry>
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

// const itemData = [
//   {
//     img: "babydragontooth.jpg",
//     title: "Bed",
//   },
//   {
//     img: "chinese jelousy.jpg",
//     title: "chinese ",
//   },
//   {
//     img: "Emigration.jpg",
//     title: "Emigration",
//   },
//   {
//     img: "FEDUAL JAPAN.jpg",
//     title: "FEDUAL JAPAN",
//   },
//   {
//     img: "Imprisoned-Designed for a mural.jpg",
//     title:
//       "Imprisoned-Designed for a mural",
//   },
//   {
//     img: "in the train.jpg",
//     title: "in the train",
//   },
//   {
//     img: "last smile.jpg",
//     title: "last smile",
//   },
//   {
//     img: "MODERN LITTLE PRINCE.jpg",
//     title:
//       "MODERN LITTLE PRINCE",
//   },
//   {
//     img: "naked girl.jpg",
//     title: "naked girl",
//   },
//   {
//     img: "Oldman.jpg",
//     title: "Oldman",
//   },
//   {
//     img: "Samak Ayar.jpg",
//     title: "Samak Ayar",
//   },
//   {
//     img: "space.jpg",
//     title: "space",
//   },
// ];
