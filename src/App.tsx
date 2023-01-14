import "./App.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import DataContent from "./Components/DataContent";
import SearchForm from "./Components/SearchForm";
import useStatefulURL from "./hooks/useStatefulURL";

function App() {
  useStatefulURL();
  return (
    <div className="App">
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "background.default",
          minHeight: "100%",
        }}
      >
        <Paper elevation={7}>
          <Box sx={{ margin: 5, padding: 5 }}>
            <Stack
              spacing={3}
              sx={{
                bgcolor: "",
              }}
            >
              <SearchForm />
              <DataContent />
            </Stack>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
