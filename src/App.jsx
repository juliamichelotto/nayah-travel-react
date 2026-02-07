import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import FormOrcamento from './pages/forms/FormOrcamentos';
import Header from './components/Header';
import Home from './pages/Home';
import HotelForm from "./pages/forms/HotelForm";
import CruzeirosForm from "./pages/forms/CruzeirosForm";
import PacoteForm from "./pages/forms/PacoteForm";
import Footer from './components/Footer';

function App() {
  return (
   <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/passagens" element={<FormOrcamento />} />
        <Route path="/form/hotel" element={<HotelForm />} />
        <Route path="/form/cruzeiros" element={<CruzeirosForm />} />
        <Route path="/form/pacote" element={<PacoteForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;