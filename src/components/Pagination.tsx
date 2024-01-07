

function Pagination() {
    const pages = [{
        url: "",
        number: 1
    }];
    return (
        <div className="row justify-content-center my-5">
            <div className="col-2">   <a href="">Prev </a></div>
            <div className="col-2">


            </div>
            <div className="col-2"> <a href="">Next</a></div>
        </div>
    )
}

export default Pagination