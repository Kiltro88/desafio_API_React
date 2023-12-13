import React, { useState, useEffect } from "react";

function MiApi({ searchQuery }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    consultarApi(searchQuery);
  }, [searchQuery]);

  const consultarApi = async (query) => {
    try {
      const url = `https://www.mindicador.cl/api/${query}`;
      const response = await fetch(url);
      const data = await response.json();
      
      const sortedData = data.serie
      ? [...data.serie].sort((b, a) => {
          const dateA = new Date(a.fecha);
          const dateB = new Date(b.fecha);
        })
      : [];

      setInfo({ ...data, serie: sortedData });
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>{info.nombre}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {info.serie && info.serie.map((entry, index) => (
            <tr key={index}>
              <td>{new Date(entry.fecha).toLocaleDateString()}</td>
              <td>{entry.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MiApi;
