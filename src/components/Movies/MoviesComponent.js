import {useEffect, useState} from "react";

import {MovieComponent} from "./MovieComponent";
import {getMovies} from "../../services";


function MoviesComponent() {
    const [movies, setMOvies] = useState();

    useEffect(() =>{
        getMovies().then(value => setMOvies([...value]))
    }, [])
    return (
        <div>
            {movies.map(value => <MovieComponent item={value} key={value.id}/>)}
        </div>
    )
}

export {MoviesComponent};