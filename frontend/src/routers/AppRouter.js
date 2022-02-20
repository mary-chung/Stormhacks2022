import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageAdd from '../pages/PageAdd';
import PageEdit from '../pages/PageEdit';
import PageNote from '../pages/PageNote';

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
            <Route path="/edit/:id" element={<PageEdit />} />
            <Route path="/note/:id" element={<PageNote />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default AppRouter;
