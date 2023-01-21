import * as React from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

const StyledModalBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  backgroundColor: "white",
  border: "2px solid #000",
  padding: "25px",

  "@media (min-width: 500px)": {
    width: 400,
  },
}));

export default React.forwardRef((props: BoxProps, ref) => (
  <StyledModalBox {...props} ref={ref} />
));
