import { Alert, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";

function SnackbarMessage({ message, alertProps, snackbarProps }) {
  const [open, setOpen] = useState(true);
  return (
    <Snackbar open={open} {...snackbarProps}>
      <Alert
        severity="success"
        sx={{ width: "100%" }}
        onClose={(e) => setOpen(false)}
        {...alertProps}
      >
        <Typography variant="p" component="p" color="inherit">
          {message}
        </Typography>
      </Alert>
    </Snackbar>
  );
}

export default SnackbarMessage;