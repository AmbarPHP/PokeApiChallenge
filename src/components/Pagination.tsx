

import { useState } from "react";
import { extraerOffset } from "../utils/extrarValor";
import './Pagination.css';

interface IPagination {
    prev: string;
    next: string;
    setUrl: (url: string) => void;
}

function Pagination({ setUrl, prev, next }: IPagination) {


    const [togleButtonNext, setToggleButtonNext] = useState(true);

    const handleClickPrev = () => {
        const offset = extraerOffset(prev);
        console.log("el previ", prev)

        //setUrl(prev);
        setUrl("https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=20");


    }
    const handleClickNext = () => {
        console.log("next ", next)
        if (next) {

            const offset = extraerOffset(next);
            if (offset != undefined && offset >= 140) {
                alert("cambiar url");
                setUrl("https://pokeapi.co/api/v2/pokemon/?offset=140&limit=11");

                setToggleButtonNext(false);
            }
            else {
                setToggleButtonNext(true);
                setUrl("https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=20");
                //setUrl(next);
            }
        }
    }


    return (
        <div className="row justify-content-center my-3">
            <div className={`col-2 text-primary h5 `}> <a onClick={handleClickPrev}>Prev </a></div>
            <div className="col-2 ">
            </div>
            <div className={`col-2 text-primary h5 ${togleButtonNext ? "able" : "disable"}`}> <a onClick={handleClickNext}>Next </a></div>
        </div >
    )
}

export default Pagination