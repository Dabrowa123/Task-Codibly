import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setId } from "../store/index";
import LinearProgress from "@mui/material/LinearProgress";
import useFetchData from "../hooks/useFetchData";
import Stack from "@mui/material/Stack";

export default function SearchForm() {
  const dispatch = useDispatch();
  const [data, isError, isFetching] = useFetchData();
  const searchTerm = useSelector((state: RootState) => {
    return state.idAndPageParams.id;
  });

  const handleSearchTermChange = (event: any) => {
    dispatch(setId(event.target.value));
  };

  return (
    <Stack sx={{ height: 110 }}>
      <FormControl sx={{ marginTop: 3, paddingBottom: 5, height: 40 }}>
        <InputLabel htmlFor="component-outlined">Filter by ID</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Filter by ID"
          type="number"
          endAdornment={<SearchIcon sx={{ marginLeft: 2 }} />}
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </FormControl>
      {isFetching && <LinearProgress />}
    </Stack>
  );
}
