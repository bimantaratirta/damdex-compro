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
          width: { sm: "20vw", xs: "25vw" },
          height: "5.664vh",
          borderRadius: "64px",
          fontSize: { xs: 8, sm: 12, lg: 16, xl: 24 },
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
          width: { xs: "25vw", sm: "20vw" },
          height: "5.664vh",
          borderRadius: "64px",
          fontSize: { xs: 10, lg: 16, xl: 24 },
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
