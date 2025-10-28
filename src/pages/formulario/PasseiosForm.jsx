import React from "react";
import styles from "./FormPage.module.css";

const PasseiosForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Solicite seu Passeio</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <input type="tel" placeholder="Celular" required />
        <input type="text" placeholder="Cidade ou destino do passeio" required />
        <input type="text" placeholder="Tipo de passeio" required />
        <input type="date" placeholder="Data do passeio" required />
        <div className={styles.row}>
          <input type="number" placeholder="Nº de adultos" />
          <input type="number" placeholder="Nº de crianças" />
        </div>
        <textarea placeholder="Observações"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PasseiosForm;
