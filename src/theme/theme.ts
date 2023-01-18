import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  components: {
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: "75px",
          cursor: "pointer",
          "&:hover": {
            filter: "brightness(110%)",
          },
          "@media (min-width: 380px)": {
            height: "auto",
          },
        },
        head: {
          height: "75px",
          "@media (min-width: 380px)": {
            height: "auto",
          },
        },
      },
    },
  },
});
