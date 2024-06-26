import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Projetos from "./pages/Projetos/Projetos";
import Contatos from "./pages/Contatos/Contatos";
import Page404 from "./pages/Page404/Page";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Sobre" element={<Sobre />}></Route>
          <Route path="Projetos" element={<Projetos />}></Route>
          <Route path="Contatos" element={<Contatos />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
