import React from "react";
import { Box, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import dialogimg from "@/../public/dialogImage.jpg";
import CloseIcon from "@mui/icons-material/Close";

export const AdvantageDialog = ({
  open,
  onClose,
  img,
  title,
  description,
}: {
  open: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
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
      <IconButton
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <Box sx={{ backgroundColor: "#F0F0F0", minHeight: "40vh", p: 2 }}>
          <div
            className="text-lg md:text-xl lg:text-2xl"
            dangerouslySetInnerHTML={{ __html: description as string }}
          />
        </Box>
        {img && img !== undefined && (
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ position: "relative", width: "100%", height: "300px" }}>
              <Image
                src={dialogimg}
                alt="Building Construction"
                fill
                objectFit="cover"
                priority
                unoptimized
              />
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};
