import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { RootState, searchId, addIdToURL } from "../store/index";

export default function SearchForm() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => {
    return state.searchedId;
  });

  const handleSearchTermChange = (event: any) => {
    dispatch(searchId(event.target.value));
    // dispatch(addIdToURL(event.target.value));
    // window.location.hash = event.target.value;
  };

  return (
    <FormControl>
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
  );
}
