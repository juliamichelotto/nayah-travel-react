import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>A vida é agora, viaje!</h1>
        <p>Descubra os melhores destinos com a Nayah Travel.</p>
        <div className={styles.buttons}>
          <button className={styles.btnGold}>Conheça nossos pacotes</button>
          <button className={styles.btnGold}>Fale conosco</button>
        </div>
      </div>
    </section>
  );
}
