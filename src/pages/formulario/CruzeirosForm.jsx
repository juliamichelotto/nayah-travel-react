import React from "react";
import styles from "./FormPage.module.css";

const CruzeirosForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Solicite seu Cruzeiro</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <input type="tel" placeholder="Celular" required />
        <div className={styles.row}>
           <select required>
          <option value="">Destino</option>
          <option>Nacional</option>
          <option>Internacional</option>
        </select>
        <select required>
          <option value="">Mês de Embarque</option>
          <option>Janeiro</option>
          <option>Fevereiro</option>
          <option>Março</option>
          <option>Abril</option>
          <option>Maio</option>
          <option>Junho</option>
          <option>Julho</option>
          <option>Agosto</option>
          <option>Setembro</option>
          <option>Outubro</option>
          <option>Novembro</option>
          <option>Dezembro</option>
        </select>
        </div>
        <select required>
          <option value="">Tipo de cabine</option>
          <option>Interna</option>
          <option>Externa</option>
          <option>Com varanda</option>
          <option>Suíte</option>
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

export default CruzeirosForm;
