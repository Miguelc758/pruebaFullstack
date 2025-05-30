import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './assets/theme';
import Dashboard from './pages/Dashboard';
import Vehiculos from './pages/Vehiculos';
import Revisiones from './pages/Revisiones';
import Layout from './components/common/Layout';
import './assets/global.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vehiculos" element={<Vehiculos />} />
            <Route path="/revisiones/:vehiculoId" element={<Revisiones />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;