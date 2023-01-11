import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchForm() {
  return (
    <FormControl>
      <InputLabel htmlFor="component-outlined">Filter by ID</InputLabel>
      <OutlinedInput
        id="component-outlined"
        label="Filter by ID"
        type="number"
        endAdornment={<SearchIcon sx={{ marginLeft: 2 }} />}
      />
    </FormControl>
  );
}
