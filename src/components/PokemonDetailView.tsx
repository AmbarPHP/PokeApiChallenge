import { useSelector } from "react-redux"; //useDispatch,
import { RootState } from "../redux/slices/pokemon.interface";
import { useNavigate } from 'react-router-dom';
import banner from "../../src/assets/banner.png";


interface IAbilities {
    ability: {
        name: string;
    }
}
interface IStats {
    stat: {
        name: string;
    }
    base_stat: number;
}

interface IPokemonDetail {
    name: string
    abilities: IAbilities[];
    stats: IStats[];
}

function DetailView() {
    const navigate = useNavigate();
    //debugger;
    //obtener datos del slice imagen
    const pokemonDetail = useSelector((state: RootState) => state.imagen.singlePokemonData);
    //debugger;
    console.log("pokemon: ", pokemonDetail);

    const handleClick = () => {
        navigate("/pokemon-list/");
    }


    return (



        <div className="container " style={{ fontSize: "1.5rem" }} >
            {/* <div className="row justify-content-center">
                <div className="col-lg-6">
                    <img src={banner} alt="Banner" className="img-fluid" style={{ height: "20vh", width: "100%" }} />
                    <img src={pokemonDetail.sprites?.front_default} alt="Pokemon" className="img-fluid" style={{ height: "80vh" }} />
                </div>
                <div className="col-lg-6">
                    <h1>{pokemonDetail.name}</h1>
                    <p>Height: {pokemonDetail.height}</p>
                    <p>Experience: {pokemonDetail.base_experience}</p>
                    <button className="btn btn-primary" onClick={handleClick}>Return back to list</button>
                    <div className="abilities my-5">
                        <div>
                            <h4>Abilities</h4>
                        </div>
                        <div className="d-flex flex-wrap">
                            {pokemonDetail.abilities.map((data, index) => (
                                <div className="badge bg-secondary m-1 p-4" key={index}>
                                    {data.ability.name}
                                </div>
                            ))}
                        </div>
                        <div>
                            <h4>Stats</h4>
                        </div>
                        <div>
                            {pokemonDetail.stats.map((data, index) => (
                                <div className="d-flex align-items-center" key={index}>
                                    <div className="flex-grow-1">{data.stat.name}</div>
                                    <div className="bg-primary text-white px-1 my-1 justify-content-start"
                                        style={{ width: `${data.base_stat * 2}px` }} >{data.base_stat}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default DetailView