import React from "react";
import { Box } from "@mui/system";
import { Button, Modal } from "@mui/material";
import Close from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translateX(-50%)",
  width: { xs: "96%", md: "80%", lg: "60%" },
  //   bgcolor: "background.paper",
  border: "2px solid #eaeaea",
  boxShadow: 24,
  // p: 4,
  // backgroundColor: "rgba(0, 0, 0, 0.1)",
  // color: "#666666",
  borderRadius: 5,
};

export const FormModal = ({ isFormOpen, handleClose, children }) => {
  return (
    <Box sx={{ position: "relative",  }}>
      <Modal
        open={isFormOpen}
        onClose={handleClose}
        aria-labelledby="add-income-or-expense"
        aria-describedby="add-income-or-expense"
        BackdropProps={{ invisible: true }}
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              paddingBottom: 2,
              paddingTop: 2,
              padding: "2 auto",
              cursor: "pointer",
              color: "rgb(255, 99, 71)",
              "&:hover": {
                backgroundColor: "rgb(255, 99, 71)",
                color: "white",
              },
            }}
          >
            <Close />
          </Button>
          {children}
        </Box>
      </Modal>
    </Box>
  );
};

export default FormModal;
