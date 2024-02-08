

import { useEffect, useState } from "react";
import { padNumber } from "../helpers/index"
import { IPokemon } from '../redux/slices/pokemon.interface';
import { setCurrentPokemonUrl } from "../redux/slices/pokemonImagenSlice";
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



    const handleClick = (event: { detail: any; } | undefined, url: string) => {
        //console.log(event?.detail, url);

        switch (event?.detail) {
            case 1: {
                console.log('single click');
                dispatch(setCurrentPokemonUrl(data.url));
                break;
            }
            case 2: {
                console.log('double click', data.name);

                navigate("/single-pokemon/");
                break;
            }
            default: {
                break;
            }
        }
    };
    const ListTypes = [

        { type: { name: "grass" } },
        { type: { name: "poison" } }

    ]
    const pokemonTypeBg = `bg-${ListTypes[0].type.name}`;
    const pokemonTypeShadow = `shadow-${ListTypes[0].type.name}`;

    return (


        <article className="h-auto w-full">
            <button
                onClick={(event) => handleClick(event, data.url)}
                type="button"
                className={`  h-full
                shadow-lg     hover:-translate-y-3
                transition duration-300  
                p-4 w-full  
                rounded-lg  ${pokemonTypeShadow} ${pokemonTypeBg}   overflow-hidden`}
            >
                <div className="flex justify-between content-center relative">
                    <div className="absolute top-[-100%] right-[-60%] h-40 w-auto ">
                        <img
                            src="/assets/pokeball2.svg"
                            alt="pokemon back"
                            className="w-[300px] h-[300px]"
                        />
                    </div>

                    <div className="text-left w-full">

                        <h6 className="text-xl text-contrastText font-bold w-full capitalize">
                            {data?.name}
                        </h6>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {ListTypes?.map(({ type }) => (
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

                    {/* <img
                        src={getPokemonDefaultImg(pokemon.sprites)}
                        alt="pokemon back"
                        className=" relative w-[150px] h-[80px]"
                        objectFit="contain"
                    /> */}
                </div>
            </button>
        </article>



    )
}

export default PokemonCard