import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/nayah.png'; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import { Link } from 'react-router-dom';


const Header = () => (
  <header className={styles.header}>
<Link to="/">
        <img src={logo} alt="Nayah Travel" className={styles.logo} />
      </Link>
    <nav>
      <a href='#home'>Home</a>
      <a href='#destino'>Destinos</a>
      <a href='#categorias'>Monte sua Viagem</a>
      <a href='#sobre'>Sobre</a>
   <a
  href="https://wa.me/55013988734836"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.btnGold}
>
  Contato
</a>
    </nav>
    <div class="sociais">
      <button><i class="fa-brands fa-instagram"></i></button>
      <button><i class="fa-brands fa-youtube"></i></button>
      <button><i class="fa-brands fa-tiktok"></i></button>
    </div>
  </header>
);

export default Header;
