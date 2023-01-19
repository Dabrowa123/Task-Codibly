import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import StyledTableCell from "./StyledTableCell";
import {
  useFetchIdQuery,
  RootState,
  setModalData,
  openModal,
} from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../../store/apis/productsApi";

export default function SearchedIdTableBody() {
  const { data } = useFetchIdQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  const rowData = data?.data || null;

  const dispatch = useDispatch();
  const handleShowModal = (rowData: Product | null) => {
    dispatch(setModalData(rowData));
    dispatch(openModal(true));
  };

  return (
    <TableBody>
      <TableRow
        data-testid="tableRow"
        key={rowData?.name}
        sx={{
          backgroundColor: `${rowData?.color}`,
        }}
        onClick={() => handleShowModal(rowData)}
      >
        <StyledTableCell width="5%">{rowData?.id}</StyledTableCell>
        <StyledTableCell width="70%" align="left">
          {rowData?.name}
        </StyledTableCell>
        <StyledTableCell width="25%" align="right">
          {rowData?.year}
        </StyledTableCell>
      </TableRow>
    </TableBody>
  );
}
