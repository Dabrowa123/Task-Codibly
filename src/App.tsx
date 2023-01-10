import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import DataTable from "./Components/DataTable";

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
            <FormControl>
              <InputLabel htmlFor="component-outlined">Search by ID</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue="please, type just numbers"
                label="Search by ID"
              />
            </FormControl>
            <DataTable />
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default App;
