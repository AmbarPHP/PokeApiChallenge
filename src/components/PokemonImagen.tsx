import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/slices/pokemon.interface";
import { useEffect, useState } from "react";
import { fetchPokemonImagen } from '../redux/slices/pokemonImagenSlice';
import { AppDispatch } from "../redux/store";



function PokemonImagen() {
    //obtner imagen
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png
    const [imagen, setImagen] = useState("https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/04/Logo-Pokebola-Pok%C3%A9mon-PNG.png");
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/22/");



    const dispatch = useDispatch<AppDispatch>();
    //  variable de estado llamada 'currentPokemonUrl' que contiene la URL
    const pokemonUrl = useSelector((state: any) => state.currentPokemonUrl);


    useEffect(() => {
        if (url) {
            dispatch(fetchPokemonImagen(pokemonUrl));
        }


    }, [dispatch, url]
    );
    return (
        <div>
            <img src={imagen} alt="" className="img-fluid " style={{ height: "100vh" }} />
        </div>
    )
}

export default PokemonImagen