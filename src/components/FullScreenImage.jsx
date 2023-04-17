import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform:
    "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FullScreenImage({
  image,
  closeModal,
  changeScreenImage,
}) {
  const [
    loading,
    setLoading,
  ] = React.useState(true);
  const [open, setOpen] =
    React.useState(false);
  const handleOpen = () =>
    setOpen(true);
  const handleClose = () =>
    closeModal(false);

  const imageLoaded = () => {
    setLoading(false);
  };
  React.useEffect(() => {
    setLoading(true);
  }, [image]);

  return (
    <div>
      <Modal
        disablePortal
        open
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        sx={{
          width: "100vw",
          height: "100vh",
          background: "black",
          justifyContent:
            "center",
          alignItems:
            "center",
          display: "flex",
        }}
        aria-describedby='modal-modal-description'>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent:
              "center",
            alignItems:
              "center",
          }}>
          <Typography
            onClick={
              handleClose
            }
            id='server-modal-title'
            variant='h6'
            component='h2'
            sx={{
              width: "40px",
              color: "white",
              position:
                "fixed",
              top: "25px",
              right: "25px",
              fontSize:
                "30px",
              lineHeight:
                "40px",
              cursor:
                "pointer",
              textAlign:
                "center",
            }}>
            X
          </Typography>
          <ArrowBackIosIcon
            sx={{
              color: "white",
              width: "40px",
              height: "40px",
              position:
                "fixed",
              left: "25px",
              cursor:
                "pointer",
            }}
            onClick={() => {
              setLoading(
                true
              );
              changeScreenImage(
                -1
              );
            }}
          />
          <ArrowForwardIosIcon
            sx={{
              color: "white",
              width: "40px",
              height: "40px",
              position:
                "fixed",
              right: "25px",
              cursor:
                "pointer",
            }}
            onClick={() => {
              setLoading(
                true
              );
              changeScreenImage(
                1
              );
            }}
          />
          {loading && (
            <CircularProgress />
          )}
          <img
            src={
              image.large
                ? `${image.large}?w=248&fit=crop&auto=format`
                : `${image.img}?w=248&fit=crop&auto=format`
            }
            srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={image.title}
            loading='lazy'
            style={{
              maxHeight:
                "100vh",
              maxWidth:
                "100vw",
              display:
                loading
                  ? "none"
                  : "block",
            }}
            onLoad={
              imageLoaded
            }
          />
        </Box>
        {/* </Box> */}
      </Modal>
    </div>
  );
}
