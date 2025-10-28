import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logo from '../assets/nayah.png';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaFacebook  } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoContainer}>
          <img src={logo} alt="Nayah Travel" className={styles.logo} />
        </Link>

        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#destino">Destinos</a>
          <a href="#categorias">Monte sua Viagem</a>
          <a href="#sobre">Sobre</a>
          <a
            href="https://wa.me/55013988734836"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGold}
          >
            Contato
          </a>
        </nav>
  <div className={styles.socialsMobile}>
            <a href="https://instagram.com/nayahtravel/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/profile.php?id=61577865727758" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://youtube.com/@NayahTravel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        <div className={styles.social}>
          <a href="https://instagram.com/nayahtravel/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com/profile.php?id=61577865727758" target="_blank" rel="noopener noreferrer"><FaFacebook  /></a>
          <a href="https://youtube.com/@NayahTravel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
