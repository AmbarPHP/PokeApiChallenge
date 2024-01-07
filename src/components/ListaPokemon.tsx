import { useDispatch, useSelector } from "react-redux";
import { IPokemon, RootState } from "../redux/slices/pokemon.interface";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../redux/slices/pokemonSlice";
import { AppDispatch } from "../redux/store";
import { Button } from "react-bootstrap";


function ListaPokemon() {

    const dispatch = useDispatch<AppDispatch>();
    const pokemonList = useSelector((state: RootState) => state.pokemons.pokemonData);
    const load = useSelector((state: RootState) => state.pokemons.loading);
    const error = useSelector((state: RootState) => state.pokemons.error);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log("first")
        dispatch(fetchPokemons());
        console.log("then")

    }, [dispatch]
    );



    useEffect(() => {
        if (pokemonList.results && pokemonList.results.length > 0)
            setLoaded(true);
    }, [pokemonList.results]
    );

    const handleClick = (event: { detail: any; } | undefined, url: string) => {
        console.log(event.detail, url);
        switch (event.detail) {
            case 1: {
                console.log('single click');
                break;
            }
            case 2: {
                console.log('double click');
                break;
            }
            default: {
                break;
            }
        }
    };



    return (
        <div className="container">
            <h1>PokemonList</h1>
            <div className="row p-2 bd-highlight justify-content-center">

                {pokemonList.results && pokemonList.results.length > 0 &&
                    pokemonList.results.map((data: IPokemon) => (
                        <div key={data.name} className="col-12 col-sm-6 col-md-4 col-lg-3 justify-content-start">
                            {/* <PokemonCard product={data} /> */}
                            <Button onClick={(event) => handleClick(event, data.url)} >
                                {data.name}
                            </Button>

                        </div>
                    ))}
            </div>

        </div>
    );
}

export default ListaPokemon;