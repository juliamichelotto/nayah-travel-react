import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const navigate = useNavigate();
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

const categorias = [
  {
    nome: 'Passagem aérea',
    img: '/src/assets/categorias/aviao.jpg',
    tipo: 'passagens',
    cor: '#cfa052'
  },
  {
    nome: 'Cruzeiros',
    img: '/src/assets/categorias/navio.jpg',
    tipo: 'cruzeiros',
    cor: '#0b3b3c'
  },
  {
    nome: 'Hotel',
    img: '/src/assets/categorias/hotel.jpg',
    tipo: 'hotel',
    cor: '#d1b27c'
  },
  {
    nome: 'Passeios',
    img: '/src/assets/categorias/ingressos.jpg',
    tipo: 'passeios',
    cor: '#145b5a'
  },
  {
    nome: 'Pacote completo',
    img: '/src/assets/categorias/malas.jpg',
    tipo: 'pacote',
    cor: '#b88a30'
  }
];

  return (
    <>
    <section id="home" className={styles.hero}>
      <div className={styles.overlayHome}>
        <h1>A vida é agora, viaje!</h1>
        <p>Descubra os melhores destinos com a Nayah Travel.</p>
        <div className={styles.buttons}>
          <button className={styles.btnGold}>Conheça nossos pacotes</button>
          <button className={styles.btnGold}>Fale conosco</button>
        </div>
      </div>
    </section>


    <section id="destino" className={styles.destinos}>
    
         <h2>Destinos Populares</h2>
<div className={styles.destino}>
    {destinos.map((destino, index) => (
            <div key={index} className={styles.card}>
              <img src={destino.imagem} alt={destino.nome} />
              <h3>{destino.nome}</h3>
            </div>
          ))}
</div>

    </section>

 <section id="categorias" className={styles.categorias}>
      <h2>Monte sua viagem</h2>
      
      <div className={styles.cardsContainer}>
         {categorias.map((c, i) => (
          <div
            key={i}
            className={styles.card}
            onClick={() => navigate(`/form/${c.tipo}`)}
          >
            <img src={c.img} alt={c.nome} />
            
            <h3>{c.nome}</h3>
   
          </div>
        ))}
      </div>
    </section>


    <section id="sobre" className={styles.sobre}>
  <div className={styles.fundo}>
    <h2>Sobre a <span>Nayah Travel</span></h2>

    <p className={styles.texto}>
      A <strong>Nayah Travel</strong> nasceu com o propósito de transformar viagens em experiências únicas.
      Somos apaixonadas por descobrir o mundo e em ajudar você a viver cada momento com <b>tranquilidade</b>,
      <b> segurança</b> e <b>emoção</b>.
    </p>

    <p className={styles.texto}>
      Oferecemos os melhores <b>pacotes</b>, <b>cruzeiros</b>, <b>hospedagens</b> e <b>experiências exclusivas</b>
      — tudo planejado com cuidado para que sua viagem seja inesquecível.
    </p>

    <div className={styles.frase_box}>
      <div className={styles.frase}>
        Somos <br />
        <b>
          <Typewriter
            words={['Confiança!', 'Cuidado!', 'Nayah Travel!']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </b>
      </div>
    </div>
  </div>
</section>

   </>
  );
}
