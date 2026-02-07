import React from 'react';
import { useNavigate } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import fundadoras from '../assets/fundadoras.jpeg';
import disney from '/src/assets/disney.jpg';
import itacare from '/src/assets/itacare.jpg';
import paris from '/src/assets/paris.jpg';




export default function Home() {
  const navigate = useNavigate();
   const destinos = [
    {
      nome: "Orlando",
      img  : disney,
    },
      {
      nome: "Punta Cana",
      img:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      nome: "Paris",
      img: paris,
    },
      {
      nome: "Itacaré",
        img: itacare,
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
    nome: 'Pacote completo',
    img: '/src/assets/categorias/malas.jpg',
    tipo: 'pacote',
    cor: '#b88a30'
  }
];

  return (
    <>
 <section className="relative bg-home-hero bg-cover bg-center h-screen flex items-center justify-center">
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 text-white text-center p-8 rounded-2xl">
    <h1 className="text-4xl font-bold mb-4">
      A vida é agora, viaje!
    </h1>
    <p className="text-lg">
      Descubra os melhores destinos com a Nayah Travel.
    </p>
  </div>
</section>



    <section id="destino" className="text-center bg-amber-50 py-16 px-8">
         <h2 className="text-amber-700 text-4xl mb-8">Destinos Populares</h2>
<div className="flex justify-center items-stretch gap-8 flex-wrap max-w-5xl mx-auto">
    {destinos.map((destino, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl w-80 h-56 cursor-pointer transition-all duration-300 bg-black group hover:shadow-2xl">
              <img src={destino.img} alt={destino.nome} className="w-full h-full object-cover transition-transform duration-400 brightness-80 group-hover:brightness-60 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              <h3 className="absolute bottom-5 left-5 right-5 text-white text-2xl font-semibold z-10 drop-shadow-lg group-hover:translate-y-1 transition-transform duration-300">{destino.nome}</h3>
            </div>
          ))}
</div>

    </section>

 <section id="categorias" className="text-center bg-amber-50 py-16 px-8">
      <h2 className="text-teal-900 text-4xl mb-10">Monte sua viagem</h2>
      
      <div className="flex justify-center flex-wrap gap-6">
         {categorias.map((c, i) => (
          <div
            key={i}
            className="relative rounded-lg w-56 h-80 overflow-hidden cursor-pointer transition-all duration-300 group hover:shadow-2xl hover:-translate-y-1.5"
            onClick={() => navigate(`/form/${c.tipo}`)}
          >
            <img src={c.img} alt={c.nome} className="w-full h-full object-cover opacity-90 group-hover:opacity-70 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-5 flex justify-between items-center transition-all duration-300">
              <h3 className="text-lg font-semibold text-white text-left">{c.nome}</h3>
              <span className="absolute bottom-4 right-4 text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
            </div>
   
          </div>
        ))}
      </div>
    </section>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl mb-12 text-teal-900"
  >
    Depoimentos
  </motion.h2>

  <div className="flex justify-center flex-wrap gap-8 mb-10">
    {[
      {
        texto: "Faço minhas viagens com a Nassira desde 2019, super atenciosa, me ajuda a organizar as minhas viagens mirabolantes, atendimento impecável! Recomendo a todos!!!",
        autor: "Roberta Passos",
      },
      {
        texto: "Melhores agentes de viagens, confiança, dedicação, são o diferencial dessa agência!",
        autor: "Idenize Cruz",
      },
      {
        texto: "Atendimento realmente diferenciado, sempre atencioso, ágil e personalizado. suporte do do início ao fim da viagem.",
        autor: "Marilia Moura",
      },
    ].map((d, i) => (
      <motion.div
        key={i}
        className="bg-white rounded-2xl shadow-md max-w-sm p-6 text-left transition-transform duration-300 hover:-translate-y-1.5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 mb-4">"{d.texto}"</p>
        <h4 className="text-teal-900 font-semibold">- {d.autor}</h4>
      </motion.div>
    ))}
  </div>

  <motion.a
    href="https://share.google/Nclw20LiQzUpkvEb4"
    target="_blank"
    className="inline-block px-6 py-3 bg-amber-600 text-white rounded-full font-semibold transition-colors duration-300 hover:bg-amber-700"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
  >
    Ver mais depoimentos
  </motion.a>
<section id="sobre" className="bg-gradient-to-b from-slate-900 via-teal-950 to-slate-900 py-32 px-8 text-white relative overflow-hidden">
  {/* Animações de fundo elegantes */}
  <motion.div
    animate={{ opacity: [0.3, 0.5, 0.3] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute top-0 left-0 w-96 h-96 bg-amber-600/15 rounded-full -top-48 -left-48 blur-3xl"
  ></motion.div>
  <motion.div
    animate={{ opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
    className="absolute bottom-0 right-0 w-80 h-80 bg-teal-400/15 rounded-full -bottom-32 -right-32 blur-3xl"
  ></motion.div>
  
  <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Coluna Esquerda - Texto */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-left"
    >
      {/* Título principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl lg:text-6xl font-black mb-2 tracking-tight">
          Sobre a 
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-100 via-amber-500 to-amber-600 bg-clip-text text-transparent">Nayah Travel</span>
        </motion.div>
        
        {/* Linha decorativa animada */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 w-32 bg-gradient-to-r from-amber-400 to-amber-600 mt-6 mb-8 rounded-full origin-left"
        ></motion.div>
      </motion.div>

      {/* Descrição com animação de fade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-lg leading-relaxed mb-6 font-light text-gray-200">
          Nasceu com o propósito de transformar viagens em 
          <span className="font-semibold text-amber-300"> experiências únicas</span>.
        </p>

        <p className="text-base leading-relaxed mb-8 font-light text-gray-300">
          Somos apaixonadas por descobrir o mundo e ajudar você a viver cada momento com 
          <span className="font-medium text-golden-100"> tranquilidade</span>,
          <span className="font-medium text-golden-100"> segurança</span> e 
          <span className="font-medium text-amber-300"> emoção</span>.
          <br /><br />
          Oferecemos os melhores 
          <span className="font-medium text-amber-300"> pacotes</span>, 
          <span className="font-medium text-amber-300"> cruzeiros</span>, 
          <span className="font-medium text-amber-300"> hospedagens</span> e 
          <span className="font-medium text-amber-300"> experiências exclusivas</span> — 
          tudo planejado com cuidado para que sua viagem seja inesquecível.
        </p>
      </motion.div>

      {/* Card do Typewriter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className=" rounded-3xl p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Efeito de borda animada */}
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, rgba(251, 146, 60, 0.1), transparent, rgba(251, 146, 60, 0.1))',
            backgroundSize: '200% 200%',
          }}
        ></motion.div>

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-amber-300 mb-3 uppercase"
          >
            Nossa Essência
          </motion.p>
          
          <p className="text-3xl font-black mb-1 tracking-tight">
            Somos
          </p>
          
          <p className="text-5xl font-black text-amber-300 min-h-20 flex items-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Typewriter
                words={['Confiança!', 'Prontidão!', 'Dedicação!', 'Profissionalismo!', 'Nayah Travel!']}
                loop={0}
                cursor
                cursorStyle="|"
                cursorColor="#fbbf24"
                typeSpeed={75}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </motion.span>
          </p>
        </div>
      </motion.div>
    </motion.div>

    {/* Coluna Direita - Imagem */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-2xl opacity-30"></div>
        <img 
          src={fundadoras} 
          alt="Fundadoras Nayah Travel" 
          className="relative w-full max-w-md rounded-3xl object-cover shadow-2xl border border-amber-500/50"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl"
        ></motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>

   </>
  );
}
