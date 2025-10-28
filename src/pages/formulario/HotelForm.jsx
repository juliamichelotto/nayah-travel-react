import React from "react";
import styles from "./FormPage.module.css";

const HotelForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Solicite sua Hospedagem</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <input type="tel" placeholder="Celular" required />
        <input type="text" placeholder="Cidade" required />
        <div className={styles.row}>
          <input type="date" placeholder="Data de CheckIn" required />
          <input type="date" placeholder="Data de CheckOut" required />
        </div>
        <select required>
          <option value="">Categoria</option>
          <option>1 estrela</option>
          <option>2 estrelas</option>
          <option>3 estrelas</option>
          <option>4 estrelas</option>
          <option>5 estrelas</option>
        </select>
            <select required>
          <option value="">Refeições</option>
          <option>Somente Hospedagem</option>
          <option>Café da manhã incluso</option>
        </select>
        <div className={styles.row}>
          <input type="number" placeholder="Nº de adultos (acima de 12 anos)" />
          <input type="number" placeholder="Nº de crianças (2 a 11 anos)" />
        </div>
        <input type="number" placeholder="Nº de bebês (até 23 meses)" />
        <textarea placeholder="Observações"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default HotelForm;
