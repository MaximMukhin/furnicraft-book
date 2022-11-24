import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

import { Snackbar, Alert } from "@mui/material";
import { notificationState } from "@/states/notification";

export function Notifier() {
  const [notification, setNotification] = useRecoilState(notificationState);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (notification.text) {
      setOpen(true);
    }
  }, [setOpen, notification]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setNotification({ text: "", severity: notification.severity });
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={notification.severity}
        sx={{ width: "100%" }}
      >
        {notification.text}
      </Alert>
    </Snackbar>
  );
}
