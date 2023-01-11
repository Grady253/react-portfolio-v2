import { ThemeProvider } from "@emotion/react";
import { Container, createTheme } from "@mui/material";
// import background from './photos/background.jpg';
import "./App.css";
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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth>
          <Home />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
