import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/slices/pokemon.interface";
import { useNavigate } from 'react-router-dom';


interface IAbilities {
    ability: {
        name: string;
    }
}
interface IStats {
    stat: {
        name: string;
    }
}

interface IPokemonDetail {
    name: string
    abilities: IAbilities[];
    stats: IStats[];
}

function DetailView() {
    const navigate = useNavigate();

    const pokemonDetail = useSelector((state: RootState) => state.imagen.singlePokemonData);

    const handleClick = () => {
        navigate("/pokemon-list/");
    }


    return (
        <div className="d-flex flex-row">
            <div className="flex-col col-6">
                <img src={pokemonDetail.sprites.front_default} alt="" className="img-fluid " style={{ height: "100vh" }} />
            </div>
            <div className="flex-col col-6 mx-5" >

                <h2 style={{ backgroundColor: "#876543", fontSize: "28px" }}>
                    {pokemonDetail.name}
                </h2>

                <h4 onClick={handleClick}>regresar</h4>
                <div className="abilities">

                    <h2>abilities</h2>
                    <div className="flex-col  ">
                        {pokemonDetail && pokemonDetail.abilities.map((data: IAbilities) => {
                            <div className="flex-col col-3" key={data.ability.name} >
                                {data.ability.name}</div>
                        })}</div >
                    <h2>stats</h2>
                    < div className="stats" >
                        {pokemonDetail && pokemonDetail.stats.map((data: IStats) => {
                            <div className="flex-col col-3" key={data.stat.name}>
                                {data.stat.name}</div>
                        })}
                    </div >
                </div>



            </div>
        </div>
    )
}

export default DetailView