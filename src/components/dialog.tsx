import React from "react";
import { Box, Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export const AdvantageDialog = ({
  open,
  onClose,
  img,
  title,
  description,
}: {
  open: boolean;
  onClose?: (reason: "backdropClick" | "escapeKeyDown") => void;
  img?: StaticImageData | string;
  title?: string;
  description?: string;
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          padding: 1,
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "left", fontWeight: "bold" }}>{title}</DialogTitle>
      <DialogContent>
        <Box sx={{ backgroundColor: "#F0F0F0", minHeight: "40vh", p: 2 }}>
          <Typography variant="h5">{description}</Typography>
        </Box>
        {img && img !== undefined && (
          <Box sx={{ textAlign: "center" }}>
            <Image
              src={img ?? ""}
              alt="Building Construction"
              height={300}
              objectFit="cover"
              style={{ width: "100%" }}
            />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};
