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
           <h3>Data de CheckIn</h3> 
          <input type="date" placeholder="Data de CheckIn" required />
          <h3>Data de CheckOut</h3> 
          <input type="date" placeholder="Data de CheckOut" required />
        </div>
            <select required>
          <option value="">Refeições</option>
          <option>Café da manhã</option>
          <option>Meia Pensão</option>
          <option>Pensão Completa</option>
          <option>All Inclusive</option>
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
