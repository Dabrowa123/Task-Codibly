import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import DataContent from "./Components/DataContent";
import SearchForm from "./Components/SearchForm";
// import ProductsList from "./Components/ProductsList";
import useStatefulURL from "./hooks/useStatefulURL";

function App() {
  useStatefulURL();
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
            <DataContent />
          </Stack>
        </Box>
      </Container>
      {/* <ProductsList /> */}
    </div>
  );
}

export default App;
