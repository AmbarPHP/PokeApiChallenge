
import ListaPokemon from './components/ListaPokemon';
import Pagination from './components/Pagination';

function Home() {


    return (
        <div className='Container'>
            <div className="row align-items-center">

                <div className="col-6  bg-succes ">Vista</div>
                <div className="col-6 "><ListaPokemon></ListaPokemon></div>
            </div>
            {/*   <div className="row">
                <Pagination></Pagination>

            </div> */}
        </div>
    )
}

export default Home