import { ThemeProvider } from "@emotion/react";
import { Container, createTheme } from "@mui/material";
import "./App.css";
import About from "./pages/About";
// import About from "./pages/About";
import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F2AF29",
    },
    secondary: {
      main: "#7E7F83",
    },
  },
});

function App() {
  return (
      <div className="App">
    <ThemeProvider theme={theme}>
        <Container maxWidth>
          <Home />
          <About />
        </Container>
    </ThemeProvider>
      </div>
  );
}

export default App;
