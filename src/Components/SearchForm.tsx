import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setId, useFetchProductsQuery } from "../store";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

export default function SearchForm() {
  const dispatch = useDispatch();

  const { isFetching } = useFetchProductsQuery(
    useSelector((state: RootState) => state.idAndPageParams)
  );

  const searchTerm = useSelector((state: RootState) => {
    return state.idAndPageParams.id;
  });

  const handleSearchNumbersOnly = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch(setId(event.target.value.replace(/\D/g, "")));
  };

  return (
    <Stack sx={{ height: 110 }}>
      <FormControl sx={{ marginTop: 3, paddingBottom: 5, height: 40 }}>
        <InputLabel htmlFor="component-outlined">Filter by ID</InputLabel>

        <OutlinedInput
          id="component-outlined"
          label="Filter by ID"
          type="text"
          endAdornment={<SearchIcon sx={{ marginLeft: 2 }} />}
          value={searchTerm}
          onChange={handleSearchNumbersOnly}
        />
      </FormControl>

      {isFetching && <LinearProgress />}
    </Stack>
  );
}