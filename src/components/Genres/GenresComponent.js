import {useEffect, useState} from "react";

import {getGenres} from "../../services";
import {GenreComponent} from "./GenreComponent";


function GenresComponent() {
    const [genres, setGenres] = useState();

    useEffect(() =>{
        getGenres().then(value => setGenres([...value]))
    }, [])
    return (
        <div>
            {genres.map(value => <GenreComponent item={value} key={value.id}/>)}
        </div>
    )
}

export {GenresComponent};