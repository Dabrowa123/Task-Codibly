import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import SearchResults from "./Components/SearchResults";
import SearchForm from "./Components/SearchForm";
import StatefulURL from "./hooks/StatefulURL";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      {/* <StatefulURL />; */}
      <Container maxWidth="sm">
        <Fade>
          <Paper elevation={7}>
            <Box sx={{ margin: 5, padding: 5, height: 530 }}>
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
