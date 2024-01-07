


interface IPagination {
    prev: string;
    next: string;
    setUrl: (url: string) => void;
}

function Pagination({ setUrl, prev, next }: IPagination) {



    const handleClickPrev = () => {
        debugger
        setUrl(prev);
    }
    const handleClickNext = () => {
        debugger
        setUrl(next);
    }

    return (
        <div className="row justify-content-center my-5">
            <div className="col-2">   <a onClick={handleClickPrev}>Prev </a></div>
            <div className="col-2">


            </div>
            <div className="col-2"> <a onClick={handleClickNext}>Next </a></div>
        </div >
    )
}

export default Pagination