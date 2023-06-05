import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



class MyGallery extends React.Component {
  render() {
    return (
      <ImageGallery
        style={{ padding: 0 }}
        showPlayButton={false}
        useTranslate3D={false}
        items={this.props.images}
      />
    );
  }
}

export default MyGallery;
