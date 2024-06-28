import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [characaters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(rs => setCharacters(rs.data.results))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      {characaters?.map(characater => (
        <div key={characater.id}>
          <h2>{characater.name}</h2>
          <p>Especie: {characater.species}</p>
          <img src={characater.image} alt={characater.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
