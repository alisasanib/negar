import React, {
  useState,
} from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import FullScreenImage from "./FullScreenImage";

export default function MasonryImageList() {
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
        lg={8}>
        <Box>
          <ImageList
            variant='masonry'
            cols={
              matches3col
                ? 3
                : matches2col
                ? 2
                : 1
            }
            gap={8}>
            {itemData.map(
              (item, id) => (
                <ImageListItem
                  key={
                    item.img
                  }>
                  <img
                    style={{
                      cursor:
                        "pointer",
                    }}
                    onClick={() =>
                      handleFullScreen(
                        id
                      )
                    }
                    src={`/${item.img}`}
                    // src={`${item.img}?w=248&fit=crop&auto=format`}
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

const itemData = [
  {
    img: "babydragontooth.jpg",
    title: "Bed",
  },
  {
    img: "chinese jelousy.jpg",
    title: "chinese ",
  },
  {
    img: "Emigration.jpg",
    title: "Emigration",
  },
  {
    img: "FEDUAL JAPAN.jpg",
    title: "FEDUAL JAPAN",
  },
  {
    img: "Imprisoned-Designed for a mural.jpg",
    title:
      "Imprisoned-Designed for a mural",
  },
  {
    img: "in the train.jpg",
    title: "in the train",
  },
  {
    img: "last smile.jpg",
    title: "last smile",
  },
  {
    img: "MODERN LITTLE PRINCE.jpg",
    title:
      "MODERN LITTLE PRINCE",
  },
  {
    img: "naked girl.jpg",
    title: "naked girl",
  },
  {
    img: "Oldman.jpg",
    title: "Oldman",
  },
  {
    img: "Samak Ayar.jpg",
    title: "Samak Ayar",
  },
  {
    img: "space.jpg",
    title: "space",
  },
  // {
  //   img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
  //   title: "Bed",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
  //   title: "Books",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  //   title: "Sink",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
  //   title: "Kitchen",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
  //   title: "Blinds",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
  //   title: "Chairs",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
  //   title: "Laptop",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
  //   title: "Doors",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
  //   title: "Coffee",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
  //   title: "Storage",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
  //   title: "Candle",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  //   title: "Coffee table",
  // },
];
