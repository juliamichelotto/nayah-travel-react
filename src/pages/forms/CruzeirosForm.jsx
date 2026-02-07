import React from "react";

const CruzeirosForm = () => {
  return (
    <div className="max-w-3xl mx-auto my-16 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl text-teal-900 text-center mb-8 font-semibold">Solicite seu Cruzeiro</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nome" required className="p-3 border border-gray-300 rounded-lg text-base" />
        <input type="email" placeholder="E-mail" required className="p-3 border border-gray-300 rounded-lg text-base" />
        <input type="tel" placeholder="Celular" required className="p-3 border border-gray-300 rounded-lg text-base" />
        <div className="flex gap-4">
          <select required className="flex-1 p-3 border border-gray-300 rounded-lg text-base">
            <option value="">Destino</option>
            <option>Nacional</option>
            <option>Internacional</option>
          </select>
          <select required className="flex-1 p-3 border border-gray-300 rounded-lg text-base">
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
        <select required className="p-3 border border-gray-300 rounded-lg text-base">
          <option value="">Tipo de cabine</option>
          <option>Interna</option>
          <option>Externa</option>
          <option>Com varanda</option>
          <option>Suíte</option>
        </select>
        <div className="flex gap-4">
          <input type="number" placeholder="Nº de adultos (acima de 12 anos)" className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
          <input type="number" placeholder="Nº de crianças (2 a 11 anos)" className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
        </div>
        <input type="number" placeholder="Nº de bebês (até 23 meses)" className="p-3 border border-gray-300 rounded-lg text-base" />
        <textarea placeholder="Observações" className="p-3 border border-gray-300 rounded-lg text-base"></textarea>
        <button type="submit" className="bg-teal-900 text-white border-none p-4 rounded-lg cursor-pointer mt-4 hover:bg-amber-600 transition">Enviar</button>
      </form>
    </div>
  );
};

export default CruzeirosForm;
