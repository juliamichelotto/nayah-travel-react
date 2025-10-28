import React, { useState } from "react";
import styles from "./FormOrcamento.module.css";

export default function FormOrcamento({ tipo }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    embarque: "",
    retorno: "",
    origem: "",
    destino: "",
    tipoVoo: "",
    classe: "",
    adultos: "",
    criancas: "",
    bebes: "",
    observacoes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className={styles.container}>
      <h2>Peça seu orçamento de {tipo}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="nome" placeholder="Nome" onChange={handleChange} />
        <div className={styles.row}>
          <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
          <input type="text" name="celular" placeholder="Celular" onChange={handleChange} />
        </div>
        <div className={styles.row}>
          <input type="date" name="embarque" placeholder="Data de embarque" onChange={handleChange} />
          <input type="date" name="retorno" placeholder="Data de retorno" onChange={handleChange} />
        </div>
        <div className={styles.row}>
          <input type="text" name="origem" placeholder="De" onChange={handleChange} />
          <input type="text" name="destino" placeholder="Para" onChange={handleChange} />
        </div>
        <div className={styles.row}>
          <select name="tipoVoo" onChange={handleChange}>
            <option value="">Tipo de voo</option>
            <option value="ida">Ida</option>
            <option value="ida-volta">Ida e volta</option>
          </select>
          <select name="classe" onChange={handleChange}>
            <option value="">Classe</option>
            <option value="economica">Econômica</option>
            <option value="executiva">Executiva</option>
            <option value="primeira">Primeira classe</option>
          </select>
        </div>
        <div className={styles.row}>
          <input type="number" name="adultos" placeholder="Nº de Adultos (acima de 12 anos)" onChange={handleChange} />
          <input type="number" name="criancas" placeholder="Nº de Crianças (2 a 11 anos)" onChange={handleChange} />
        </div>
        <input type="number" name="bebes" placeholder="Nº de Bebês (até 23 meses)" onChange={handleChange} />
        <textarea name="observacoes" placeholder="Observações" onChange={handleChange}></textarea>
        <button type="submit" className={styles.btnEnviar}>Enviar mensagem</button>
      </form>
    </div>
  );
}
