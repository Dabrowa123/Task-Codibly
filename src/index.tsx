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
import DynamicBacground from "./Components/DynamicBackground";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DynamicBacground />
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
