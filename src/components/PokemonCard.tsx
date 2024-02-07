
import { Button } from 'react-bootstrap'
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

    const handleClick = (event: { detail: any; } | undefined, url: string) => {
        //console.log(event?.detail, url);


        switch (event?.detail) {
            case 1: {
                console.log('single click');
                dispatch(setCurrentPokemonUrl(url))
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
    return (
        <div className="bg-primary text-light text-center p-2" onClick={(event) => handleClick(event, data.url)} >
            {data.name}
        </div>
    )
}

export default PokemonCard