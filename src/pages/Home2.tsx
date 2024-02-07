import { GiPokerHand } from 'react-icons/gi';
import {
    BsFillDiagram3Fill,
    BsFillHeartFill,
    BsFillPeaceFill,
} from 'react-icons/bs';

import SectionBox from '../components/SectionBox'

function Home2() {
    return (

        <div className="flex lg:flex-col gap-8 h-full  flex-wrap justify-center items-end py-[10%]">
            <SectionBox
                color="grass"
                title="Pokedex"
                description="Encuentra todos los pokemones"
                Icon={GiPokerHand}
                href="/pokemons"
            />

            <SectionBox
                color="ice"
                title="Tipos"
                description="Descubre todos los tipos pokemones"
                Icon={BsFillPeaceFill}
                href="/types"
            />
            <SectionBox
                color="electric"
                title="Generaciones"
                description="Ve todas las generaciones de pokemones"
                Icon={BsFillDiagram3Fill}
                href="/generations"
            />
            <SectionBox
                color="fairy"
                title="Favoritos"
                description="Guarda y colecciona tus pokemones favoritos"
                Icon={BsFillHeartFill}
                href="/favorites"
            />
        </div>
    )
}

export default Home2