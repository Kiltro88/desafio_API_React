// Buscador.jsx
import React, { useState } from "react";

const Buscador = ({ onSearch }) => {
  const [selectedValue, setSelectedValue] = useState("uf");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    console.log(`se selecciona ${value}`);
  };

  const handleSubmit = () => {
    
    onSearch(selectedValue);
    console.log(`se envia ${selectedValue}`);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="uf">UF</option>
        <option value="ivp">IVP</option>
        <option value="dolar">Dólar</option>
        <option value="dolar_intercambio">Dólar Intercambio</option>
        <option value="euro">Euro</option>
        <option value="ipc">IPC</option>
        <option value="utm">UTM</option>
        <option value="imacec">Imacec</option>
        <option value="tpm">TPM</option>
        <option value="libra_cobre">Libra de Cobre</option>
        <option value="tasa_desempleo">Tasa de Desempleo</option>
        <option value="bitcoin">Bitcoin</option>
      </select>
      <button onClick={handleSubmit}>Buscar</button>
    </div>
  );
};

export default Buscador;
