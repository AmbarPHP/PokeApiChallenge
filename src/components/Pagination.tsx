


interface IPagination {
    prev: string;
    next: string;
    setUrl: (url: string) => void;
}

function Pagination({ setUrl, prev, next }: IPagination) {



    const handleClickPrev = () => {
        //debugger
        console.log(prev)
        setUrl(prev);
    }
    const handleClickNext = () => {
        //debugger
        console.log(next)
        setUrl(next);
    }

    return (
        <div className="row justify-content-center my-3">
            <div className="col-2 text-primary h5">   <a onClick={handleClickPrev}>Prev </a></div>
            <div className="col-2 ">


            </div>
            <div className="col-2 text-primary h5"> <a onClick={handleClickNext}>Next </a></div>
        </div >
    )
}

export default Pagination