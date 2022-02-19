import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageAdd from '../pages/PageAdd';
import PageNote from '../pages/PageNote';

function AppRouter() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/add" element={<PageAdd />} />
          <Route path="/note" element={<PageNote />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default AppRouter;
