import { useDispatch, useSelector } from "react-redux";
import { IPokemon, RootState } from "../redux/slices/pokemon.interface";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../redux/slices/pokemonSlice";

import { AppDispatch } from "../redux/store";
import Pagination from '../components/Pagination';
import PokemonCard from "../components/PokemonCard";
import { PageHeader } from "../components/PageHeader";



function ListaPokemon() {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");



    const dispatch = useDispatch<AppDispatch>();
    const pokemonList = useSelector((state: RootState) => state.pokemon.pokemonData);


    const [prev, setPrev] = useState("");
    const [next, setNext] = useState("");



    const load = useSelector((state: RootState) => state.pokemon.loading);
    const error = useSelector((state: RootState) => state.pokemon.error);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (url) {
            dispatch(fetchPokemons(url));
        }
    }, [dispatch, url]);



    useEffect(() => {
        if (pokemonList.results && pokemonList.results.length > 0)
            setLoaded(true);
        setPrev(pokemonList.previous);
        setNext(pokemonList.next);
    }, [pokemonList.results]
    );





    return (
        <div className="container">

            <PageHeader
                title="Pokedex"
                subtitle="Aqui podras encontrar todos lo pokemones"
            />
            <div className="d-flex flex-row   flex-wrap align-items-stretch p-2  justify-content-between" >

                {pokemonList.results && pokemonList.results.length > 0 &&
                    pokemonList.results.map((data: IPokemon) => (
                        <div key={data.name}
                            className="col-sm-6 col-md-6 col-lg-6 justify-content-center p-2 my-2"
                        >
                            <PokemonCard data={data} />
                        </div>
                    ))}
            </div>

            <Pagination setUrl={setUrl} prev={prev} next={next} >

            </Pagination>
        </div>
    );
}

export default ListaPokemon;