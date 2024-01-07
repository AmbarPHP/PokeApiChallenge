import { useDispatch, useSelector } from "react-redux";
import { IPokemon, RootState } from "../redux/slices/pokemon.interface";
import { useEffect, useState } from "react";
import { fetchPokemons } from "../redux/slices/pokemonSlice";
import { AppDispatch } from "../redux/store";
import { Button } from "react-bootstrap";
import Pagination from './Pagination';



function ListaPokemon() {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
    //lee el parametro de la ruta 
    debugger



    const dispatch = useDispatch<AppDispatch>();
    const pokemonList = useSelector((state: RootState) => state.pokemons.pokemonData);


    const [prev, setPrev] = useState("");
    const [next, setNext] = useState("");


    const load = useSelector((state: RootState) => state.pokemons.loading);
    const error = useSelector((state: RootState) => state.pokemons.error);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (url) {
            dispatch(fetchPokemons(url));
        }


    }, [dispatch, url]
    );



    useEffect(() => {
        if (pokemonList.results && pokemonList.results.length > 0)
            setLoaded(true);
        setPrev(pokemonList.previous);
        setNext(pokemonList.next);
    }, [pokemonList.results]
    );

    const handleClick = (event: { detail: any; } | undefined, url: string) => {
        console.log(event?.detail, url);
        switch (event?.detail) {
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
            <div className="d-flex flex-row bg-primary  flex-wrap align-items-stretch p-2  justify-content-between" >

                {pokemonList.results && pokemonList.results.length > 0 &&
                    pokemonList.results.map((data: IPokemon) => (
                        <div key={data.name} className="col-sm-6 col-md-6 col-lg-6 justify-content-center p-2 my-2" style={{ backgroundColor: "#45aa87" }}>
                            {/* <PokemonCard product={data} /> */}
                            <Button className="btn  btn-primary" onClick={(event) => handleClick(event, data.url)} >
                                {data.name}
                            </Button>

                        </div>
                    ))}
            </div>

            <Pagination setUrl={setUrl} prev={prev} next={next} >

            </Pagination>
        </div>
    );
}

export default ListaPokemon;