import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.module.css';
import FormPage from './pages/formulario/FormPage';
import Header from './components/Header';
import Home from './pages/Home';
import HotelForm from "./pages/formulario/HotelForm";
import CruzeirosForm from "./pages/formulario/CruzeirosForm";
import PasseiosForm from "./pages/formulario/PasseiosForm";
import PacoteForm from "./pages/formulario/PacoteForm";
import Footer from './components/Footer';

function App() {
  return (
   <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/passagens" element={<FormPage />} />
        <Route path="/form/hotel" element={<HotelForm />} />
        <Route path="/form/cruzeiros" element={<CruzeirosForm />} />
        <Route path="/form/passeios" element={<PasseiosForm />} />
        <Route path="/form/pacote" element={<PacoteForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;