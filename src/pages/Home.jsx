import React from 'react';
import styles from './Home.module.css';

export default function Home() {
   const destinos = [
    {
      nome: "Rio de Janeiro",
      imagem:
        "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    },
    {
      nome: "Paris",
      imagem:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    },
    {
      nome: "Cancún",
      imagem:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}>
        <h1>A vida é agora, viaje!</h1>
        <p>Descubra os melhores destinos com a Nayah Travel.</p>
        <div className={styles.buttons}>
          <button className={styles.btnGold}>Conheça nossos pacotes</button>
          <button className={styles.btnGold}>Fale conosco</button>
        </div>
      </div>
    </section>

    <section id="destino" className={styles.destinos}>
<div className={styles.destino}>
   <h3>Destinos Principais</h3>
    {destinos.map((destino, index) => (
            <div key={index} className={styles.card}>
              <img src={destino.imagem} alt={destino.nome} />
              <h3>{destino.nome}</h3>
            </div>
          ))}
</div>
    </section>

     <section id="sobre" className={styles.sobre}>
<div  className={styles.fundo}>
    <h3>Sobre nós</h3>
</div>
    </section>
   </>
  );
}
