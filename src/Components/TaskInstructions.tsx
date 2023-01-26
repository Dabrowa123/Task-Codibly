import * as React from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

const StyledModalBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 220,
  backgroundColor: "white",
  border: "2px solid #000",
  padding: "45px",

  "@media (min-width: 500px)": {
    width: 300,
  },
}));

export default React.forwardRef((props: BoxProps, ref) => (
  <StyledModalBox {...props} ref={ref} />
));
