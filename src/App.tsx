import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import DataTable from "./Components/DataTable";
import SearchForm from "./Components/SearchForm";

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ p: 2, border: "1px dashed grey", margin: 5, padding: 5 }}>
          <Stack
            spacing={4}
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
