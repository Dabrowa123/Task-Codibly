import "./App.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import SearchResults from "./Components/SearchResults";
import SearchForm from "./Components/SearchForm";
import useStatefulURL from "./hooks/useStatefulURL";
import { Fade } from "react-awesome-reveal";

function App() {
  useStatefulURL();
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Fade>
          <Paper elevation={7}>
            <Box sx={{ margin: 5, padding: 5, height: 510 }}>
              <Stack spacing={3}>
                <SearchForm />
                <SearchResults />
              </Stack>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </div>
  );
}

export default App;
