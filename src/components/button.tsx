import { Button } from "@mui/material";
import { MouseEventHandler } from "react";

export const OutlinedButton = ({
  onClick,
  label,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label: string;
}) => {
  return (
    <Button
      variant="outlined"
      sx={{
        "&.MuiButtonBase-root": {
          color: "#FFF",
          borderColor: "#FFF",
          width: { xs: "50vw", sm: "14.097vw" },
          height: "5.664vh",
          borderRadius: "64px",
          fontSize: { xs: 12, lg: 24 },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
          },
        },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export const FilledButton = ({ onClick, label }: { onClick?: MouseEventHandler<HTMLButtonElement>; label: string }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        "&.MuiButtonBase-root": {
          color: "#FFF",
          borderColor: "#000",
          backgroundColor: "rgba(0,0,0,1)",
          width: { xs: "50vw", sm: "14.097vw" },
          height: "5.664vh",
          borderRadius: "64px",
          fontSize: { xs: 12, lg: 24 },
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.75)",
          },
        },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
