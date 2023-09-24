import fs from "fs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "@mui/material";

const CustomizedModal = ({
  open,
  handleClose,
  children,
}) => {
  const isMobile =
    useMediaQuery(
      "(max-width:800px)"
    );
  const style = {
    position: "absolute",
    borderRadius: "10px",
    height: isMobile
      ? "80vh"
      : "90vh",
    overflow: "auto",
    top: "50%",
    left: "50%",
    transform:
      "translate(-50%, -50%)",
    width: isMobile
      ? "85vw"
      : "65vw",
    bgcolor:
      "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: isMobile ? 1 : 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box
        className='App_Content'
        sx={style}>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomizedModal;
