
import logo from './logo.svg';
import './App.css';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import routes from './routes';
import { useRoutes } from 'react-router-dom';

/**
 * {
  palette: {
    mode: 'dark',
  },
}
 */

const mdTheme = createTheme();

function App() {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={mdTheme}>
      {routing}
    </ThemeProvider>

  );
}

export default App;
