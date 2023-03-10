import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { Container, createTheme } from "@mui/material";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

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
          <Portfolio />
          <Contact />
        </Container>
    </ThemeProvider>
      </div>
  );
}

export default App;
