import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import DataTable from "./Components/DataTable";
import Grid from "@mui/material/Grid";
import SearchForm from "./Components/SearchForm";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ p: 2, border: "1px dashed grey", margin: 5 }}>
          <Stack
            spacing={2}
            sx={{
              bgcolor: "",
            }}
          >
            <SearchForm />
            <DataTable />
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default App;
