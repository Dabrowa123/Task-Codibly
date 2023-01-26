import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import SearchResults from "./Components/SearchResults";
import SearchForm from "./Components/SearchForm";
import TaskInfo from "./Components/TaskInfo";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Stack sx={{ height: "100%", justifyContent: "center" }}>
          <Fade>
            <Paper elevation={20}>
              <Box
                sx={{ margin: 2, padding: 5, paddingBottom: 2, minHeight: 555 }}
              >
                <Stack spacing={3}>
                  <TaskInfo />
                  <SearchForm />
                  <SearchResults />
                </Stack>
              </Box>
            </Paper>
          </Fade>
        </Stack>
      </Container>
      {/* <LiveHelpIcon
        sx={{
          position: "absolute",
          bottom: 50,
          left: 50,
          width: 40,
          height: 40,
          color: "white",
        }}
      /> */}
    </div>
  );
}

export default App;
