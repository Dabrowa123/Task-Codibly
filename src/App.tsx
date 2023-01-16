import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import SearchResults from "./Components/SearchResults";
import SearchForm from "./Components/SearchForm";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Stack sx={{ height: "100vh", justifyContent: "center" }}>
          <Fade>
            <Paper elevation={20}>
              <Box sx={{ margin: 2, padding: 5, height: 520 }}>
                <Stack spacing={3}>
                  <SearchForm />
                  <SearchResults />
                </Stack>
              </Box>
            </Paper>
          </Fade>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
