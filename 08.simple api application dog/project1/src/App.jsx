import { useEffect, useState } from "react";
import Imagecard from "./Imagecard";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((response) => response.json())
      .then((data) => setDogs(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Dog Gallery</h1>

      {dogs.map((dog, index) => (
        <Imagecard
         
          src={dog}
          
        />
      ))}
    </div>
  );
}

export default App;
