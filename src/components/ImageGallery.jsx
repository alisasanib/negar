import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class MyGallery extends React.Component {
  render() {
    console.log(
      "this",
      this.props
    );
    if (
      !this.props.images ||
      !this.props.images
        .length
    ) {
      return null;
    }

    return (
      <ImageGallery
        style={{ padding: 0 }}
        showPlayButton={false}
        useTranslate3D={false}
        items={
          this.props.images
        }
        slideDuration={1}
      />
    );
  }
}

export default MyGallery;
