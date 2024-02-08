

import { useEffect, useState } from "react";
import { getPokemonDefaultImg } from "../helpers/index";
import { getPokemon } from "../services/pokemons";
import { IPokemon } from '../redux/slices/pokemon.interface';
import background from "../assets/pokeball2.svg";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

interface IParams {
    event: Event;
    url: string
}
interface IPokemonCard {
    data: IPokemon;
}

function PokemonCard({ data }: IPokemonCard) {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    //const [dataImagen, setDataImagen] = <any[]> useState({});

    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const res = await getPokemon(data.name);
                const other = res.data;
                setPokemonData(other);
                console.log(pokemonData);
                getColors();
            } catch (error) {
                console.log(error);
            }
        }
        fetchPokemon();
    }, [pokemonData, data.name]);

    const handleClick = (url: string) => {
        console.log(url);
        console.log('double click', data.name);
        navigate("/single-pokemon/");

    };




    return (


        <article className="h-auto w-full">

            <button
                onClick={() => handleClick(data.url)}
                type="button"
                className={`  h-full
                shadow-lg     hover:-translate-y-3
                transition duration-300  
                p-4 w-full  
                rounded-lg  bg-${pokemonData?.types[0].type.name} shadow-${pokemonData?.types[0].type.name}   overflow-hidden`}
            >
                <div className="flex justify-between content-center relative">
                    <div className="absolute top-[-100%] right-[-60%] h-40 w-auto ">
                        <img
                            src={background}
                            alt="pokemon back"
                            className="w-[300px] h-[300px]"
                        />
                    </div>

                    <div className="text-left w-full">

                        <h6 className="text-xl text-contrastText font-bold w-full capitalize">
                            {data?.name}
                        </h6>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {pokemonData?.types?.map(({ type }) => (
                                <span
                                    key={type.name}
                                    className={`py-0.5 px-1   rounded-md text-xs
                  border border-white/50
                   text-contrastText  capitalize ${`bg-${type.name}`}`}
                                >
                                    {type.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <img
                        src={getPokemonDefaultImg(pokemonData?.sprites)}
                        alt="pokemon back"
                        className=" relative w-[150px] h-[80px]"
                        objectFit="contain"
                    />
                </div>
            </button>
        </article>



    )
}

export default PokemonCard