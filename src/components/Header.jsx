import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/nayah.png'; 

const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="Nayah Travel" className={styles.logo} />
    <nav>
      <a href='#'>Home</a>
      <a href='#'>Destinos</a>
      <a href='#'>Monte sua Viagem</a>
      <a href='#'>Sobre</a>
      <a href='#'>Contato</a>
    </nav>
  </header>
);

export default Header;
