// App.jsx
import React, { useState } from "react";
import "./App.css";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="landing-page">
      <header>
        <h1>Bienvenido al Desafio API</h1>
        <p>
          Explora y sigue varios indicadores financieros como UF, IVP, Dólar,
          Euro, y más, con datos históricos.
        </p>
      </header>

      <main>
        <Buscador onSearch={handleSearch} />

        {searchQuery && <MiApi searchQuery={searchQuery} />}
      </main>

      <footer>
        <p>&copy; Desafio API. Todos los derechos reservados bla bla bla.</p>
      </footer>
    </div>
  );
}

export default App;
