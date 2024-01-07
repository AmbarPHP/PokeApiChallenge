
import { Button } from 'react-bootstrap'
import { IPokemon } from '../redux/slices/pokemon.interface'
interface IParams {
    event: Event;
    url: string
}
interface IPokemonCard {
    data: IPokemon;
    handleClick: ({ event, url }: IParams) => void;
}

function PokemonCard({ data, handleClick }: IPokemonCard) {
    return (
        <Button className="btn  btn-primary" onClick={(event) => handleClick(event, data.url)} >
            {data.name}
        </Button>
    )
}

export default PokemonCard