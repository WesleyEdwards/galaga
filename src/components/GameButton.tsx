import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

interface GameButtonProps extends ButtonProps {
  text: string;
  onClick: () => void;
}
export const GameButton: FC<GameButtonProps> = (props) => {
  const { text, onClick } = props;

  const { sx, ...rest } = props;

  return (
    <Button
      sx={{ width: "12rem", ...sx }}
      {...rest}
      variant="outlined"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
