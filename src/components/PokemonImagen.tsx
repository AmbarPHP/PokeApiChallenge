import { useState } from "react";


function PokemonImagen() {
    //obtner imagen
    const [imagen, setImagen] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png");

    return (
        <div>
            <img src={imagen} alt="" className="img-fluid " style={{ height: "100vh" }} />
        </div>
    )
}

export default PokemonImagen