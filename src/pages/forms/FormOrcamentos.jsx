import React, { useState } from "react";

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
    <div className="max-w-3xl mx-auto my-16 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl text-teal-900 text-center mb-8 font-semibold">Solicite sua Passagem Aérea</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="nome" placeholder="Nome" onChange={handleChange} className="p-3 border border-gray-300 rounded-lg text-base" />
        <div className="flex gap-4">
          <input type="email" name="email" placeholder="E-mail" onChange={handleChange} className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
          <input type="text" name="celular" placeholder="Celular" onChange={handleChange} className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Data de embarque</h3>
            <input type="date" name="embarque" placeholder="Data de embarque" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-base" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Data de retorno</h3>
            <input type="date" name="retorno" placeholder="Data de retorno" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg text-base" />
          </div>
        </div>
        <div className="flex gap-4">
          <input type="text" name="origem" placeholder="Origem" onChange={handleChange} className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
          <input type="text" name="destino" placeholder="Destino" onChange={handleChange} className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
        </div>
        <div className="flex gap-4">
          <select name="tipoVoo" onChange={handleChange} className="flex-1 p-3 border border-gray-300 rounded-lg text-base">
            <option value="">Tipo de voo</option>
            <option value="ida">Ida</option>
            <option value="ida">Volta</option>
            <option value="ida-volta">Ida e volta</option>
          </select>
          <select name="classe" onChange={handleChange} className="flex-1 p-3 border border-gray-300 rounded-lg text-base">
            <option value="">Classe</option>
            <option value="economica">Econômica</option>
            <option value="executiva">Executiva</option>
            <option value="primeira">Primeira classe</option>
          </select>
        </div>
        <div className="flex gap-4">
          <input type="number" name="adultos" placeholder="Nº de Adultos (acima de 12 anos)" onChange={handleChange} className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
          <input type="number" name="criancas" placeholder="Nº de Crianças (2 a 11 anos)" onChange={handleChange} className="flex-1 p-3 border border-gray-300 rounded-lg text-base" />
        </div>
        <input type="number" name="bebes" placeholder="Nº de Bebês (até 23 meses)" onChange={handleChange} className="p-3 border border-gray-300 rounded-lg text-base" />
        <textarea name="observacoes" placeholder="Observações" onChange={handleChange} className="p-3 border border-gray-300 rounded-lg text-base"></textarea>
        <button type="submit" className="bg-teal-900 text-white border-none p-4 rounded-lg cursor-pointer mt-4 hover:bg-amber-600 transition">Enviar</button>
      </form>
    </div>
  );
}
