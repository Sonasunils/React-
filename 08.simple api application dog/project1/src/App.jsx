
import { useEffect, useState } from "react";
import Imagecard from "./Imagecard";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((response) => response.json())
      .then((data) => setDogs(data.message));

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
