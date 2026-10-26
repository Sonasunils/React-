
import { useEffect, useState } from "react";
import Imagecard from "./Imagecard";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => setDogs(data.results));

    }, []);

  return (
    <div>
      <h1>Dog Gallery</h1>

      <div className="dog-gallery">
        {dogs.map((dog, index) => (
          <Imagecard key={index} img={dog} />
        ))}
      </div>
    </div>
  );
}

export default App;
