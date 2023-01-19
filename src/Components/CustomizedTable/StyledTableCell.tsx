import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontWeight: 'bold'
    },
    [`&.${tableCellClasses.body}`]: {
      fontWeight: 'bold',
      border: 0
    },
  }));

export default StyledTableCell;