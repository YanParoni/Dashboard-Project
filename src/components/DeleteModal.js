import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { deleteUser } from "../services/company";
import { useDispatch } from "react-redux";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
function DeleteModal({ id, name }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const handleDelete = ()=>{
    dispatch(deleteUser(id))
}
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <IconButton sx={{textDecoration: 'none', color:'inherit'}}onClick={handleOpen}><DeleteForeverOutlinedIcon/></IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h3">
            Are you sure you want to delete {name} register from the dash?
          </Typography>
          <Button onClick={handleDelete}>Yes</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteModal;
