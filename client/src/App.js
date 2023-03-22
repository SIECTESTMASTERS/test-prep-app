import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './components/global/sidebar/Sidebar';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/signup' element={<SignUp />}/>
              <Route path='/user' element={<AdminDashboard />}/>
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
