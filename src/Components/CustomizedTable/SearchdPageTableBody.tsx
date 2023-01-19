import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import StyledTableCell from "./StyledTableCell";
import {
  useFetchPageQuery,
  RootState,
  setModalData,
  openModal,
} from "../../store";
import { Product } from "../../store/apis/productsApi";
import { useSelector, useDispatch } from "react-redux";

export default function SearchedPageTableBody() {
  const { data } = useFetchPageQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  const rows = data?.data || [];

  const dispatch = useDispatch();
  const handleShowModal = (rowData: Product) => {
    dispatch(setModalData(rowData));
    dispatch(openModal(true));
  };

  return (
    <TableBody>
      {rows.slice(0, 5).map((rowData: Product) => (
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
      ))}
    </TableBody>
  );
}
