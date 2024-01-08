
import { Button } from 'react-bootstrap'
import { IPokemon } from '../redux/slices/pokemon.interface';
import { setCurrentPokemonUrl } from "../redux/slices/pokemonImagenSlice";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";

interface IParams {
    event: Event;
    url: string
}
interface IPokemonCard {
    data: IPokemon;
}



function PokemonCard({ data }: IPokemonCard) {

    const dispatch = useDispatch<AppDispatch>();

    const handleClick = (event: { detail: any; } | undefined, url: string) => {
        console.log(event?.detail, url);


        switch (event?.detail) {
            case 1: {
                console.log('single click');
                dispatch(setCurrentPokemonUrl(url))
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
        <Button className="btn  btn-primary" onClick={(event) => handleClick(event, data.url)} >
            {data.name}
        </Button>
    )
}

export default PokemonCard