import Pagination from "../../components/Pagination";
import MovieCard from "../../components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";

function Listing() {

    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response => {
        console.log(response.data);
    });



    return (
        <>
            <Pagination />,

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 mb-3">   
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">   
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">   
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">   
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">   
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-3">   
                        <MovieCard />
                    </div>
                </div>
            </div>


        </>
    );
}

export default Listing;