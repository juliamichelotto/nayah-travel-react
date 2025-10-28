import React from "react";
import styles from "./FormPage.module.css";

const PacoteForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Solicite sua Viagem</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <input type="tel" placeholder="Celular" required />
        <div className={styles.row}>
          <h3>Data de embarque</h3>
          <input type="date" placeholder="Data de embarque" required />
          <h3>Data de retorno</h3>
          <input type="date" placeholder="Data de retorno" required />
        </div>
         <div className={styles.row}>
                  <input type="text" name="origem" placeholder="Origem" required />
                  <input type="text" name="destino" placeholder="Destino" required />
                </div>
                  <select required>
                    <option value="">Tipo de voo</option>
                    <option>Ida</option>
                    <option>Ida e volta</option>
                  </select>
                <div className={styles.row}>
                  <select required>
                    <option value="">Classe</option>
                    <option>Econômica</option>
                    <option>Executiva</option>
                    <option>Primeira Classe</option>
                  </select>
                </div>
        <div className={styles.row}>
          <input type="number" placeholder="Nº de adultos (acima de 12 anos)" />
          <input type="number" placeholder="Nº de crianças (2 a 11 anos)" />
        </div>
        <input type="number" placeholder="Nº de bebês (até 23 meses)" />
                  <input type="text" name="hospedagem" placeholder="Hotel - Cidade" required />
                 <div className={styles.row}>
                   <h3>Data de CheckIn</h3> 
                          <input type="date" placeholder="Data de CheckIn" required />
                    <h3>Data de CheckOut</h3> 
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
        <textarea placeholder="Observações"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default PacoteForm;
