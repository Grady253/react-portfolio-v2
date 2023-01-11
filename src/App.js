import { ThemeProvider } from '@emotion/react';
import { Container, Paper, createTheme } from '@mui/material';
import background from './photos/background.jpg';
import './App.css';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    primary: {
      main:'#F2AF29',
    },
    secondary:{
      main:'#7E7F83',
    },
  },
});

const style = {
  paperContainer:{
    backgroundImage: `url(${background})`,
    backgroundSize:'cover',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper style={style.paperContainer}>
        <Container maxWidth>
          <div className='App'>
            <Home/>
          </div>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
