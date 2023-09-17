import fs from "fs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  borderRadius: "10px",
  height: "90vh",
  overflow: "auto",
  top: "50%",
  left: "50%",
  transform:
    "translate(-50%, -50%)",
  width: "65vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CustomizedModal = ({
  open,
  handleClose,
  children,
}) => {
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
