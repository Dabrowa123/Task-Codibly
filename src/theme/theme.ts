import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    background: {
      default: "linear-gradient(0.33turn, #3f87a6, #ebf8e1, #ebf8e1, #3f87a6)",
    },
  },
  /* background: linear-gradient(0.33turn, #3f87a6, #ebf8e1, #ebf8e1, #3f87a6); */
});
