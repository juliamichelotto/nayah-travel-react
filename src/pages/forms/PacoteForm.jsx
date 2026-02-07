import React from "react";

const PacoteForm = () => {
  return (
    <div className="max-w-3xl mx-auto my-16 mt-25 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl text-teal-900 text-center mb-8 font-semibold">Solicite sua Viagem</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nome" required className="p-3 border border-gray-300 rounded-lg text-base" />
        <input type="email" placeholder="E-mail" required className="p-3 border border-gray-300 rounded-lg text-base" />
        <input type="tel" placeholder="Celular" required className="p-3 border border-gray-300 rounded-lg text-base" />
        <div className="flex gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Data de CheckIn</h3>
            <input type="date" placeholder="Data de CheckIn" required className="w-full p-3 border border-gray-300 rounded-lg text-base" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Data de CheckOut</h3>
            <input type="date" placeholder="Data de CheckOut" required className="w-full p-3 border border-gray-300 rounded-lg text-base" />
          </div>
        </div>
        <div className="flex gap-4">
          <input type="text" name="origem" placeholder="Origem" required className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
          <input type="text" name="destino" placeholder="Destino" required className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
        </div>
        <select required className="p-3 border border-gray-300 rounded-lg text-base">
          <option value="">Tipo de voo</option>
          <option>Ida</option>
          <option>Volta</option>
          <option>Ida e volta</option>
        </select>
        <div className="flex gap-4">
          <select required className="flex-1 p-3 border border-gray-300 rounded-lg text-base">
            <option value="">Classe</option>
            <option>Econômica</option>
            <option>Executiva</option>
            <option>Primeira Classe</option>
          </select>
        </div>
        <div className="flex gap-4">
          <input type="number" placeholder="Nº de adultos (acima de 12 anos)" className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
          <input type="number" placeholder="Nº de crianças (2 a 11 anos)" className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
        </div>
        <input type="number" placeholder="Nº de bebês (até 23 meses)" className="p-3 border border-gray-300 rounded-lg text-base" />
        <select required className="p-3 border border-gray-300 rounded-lg text-base">
          <option value="">Refeições</option>
          <option>Café da manhã</option>
          <option>Meia Pensão</option>
          <option>Pensão Completa</option>
          <option>All Inclusive</option>
        </select>
        <textarea placeholder="Observações" className="p-3 border border-gray-300 rounded-lg text-base"></textarea>
        <button type="submit" className="bg-teal-900 text-white border-none p-4 rounded-lg cursor-pointer mt-4 hover:bg-amber-600 transition">Enviar</button>
      </form>
    </div>
  );
};

export default PacoteForm;
