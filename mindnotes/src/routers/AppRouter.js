import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageAdd from '../pages/PageAdd';
import PageNote from '../pages/PageNote';
import Footer from '../components/Footer';

function AppRouter() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#478caa',
      },
    },
  });
  
  return (
    <div className="wrapper">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/add" element={<PageAdd />} />
            <Route path="/note" element={<PageNote />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default AppRouter;
