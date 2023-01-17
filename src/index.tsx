import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StatefulURL from "./Components/StatefulURL";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import { CssBaseline, GlobalStyles } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              backgroundImage:
                "linear-gradient(45deg, #98b2d1 10%, #c74375 10%, #c74375 20%, #bf1932 20%, #bf1932 30%, #7bc4c4 30%, #7bc4c4 40%, #e2583e 40%, #e2583e 50%, #98b2d1 50%, #98b2d1 60%, #c74375 60%, #c74375 70%, #bf1932 70%, #bf1932 80%, #7bc4c4 80%, #7bc4c4 90%, #e2583e 90%, #e2583e 100%)",
              backgroundSize: "141.42px 141.42px",
              // "linear-gradient(#98B2D1, #C74375, #BF1932, #7BC4C4,  #E2583E)",
            },
          }}
        />
        <App />
      </ThemeProvider>
      <Router>
        <Routes>
          <Route path="*" element={<StatefulURL />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
