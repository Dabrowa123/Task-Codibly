import { createTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: { main: blueGrey[900] },
  },
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
