function MovieComponent({item}) {
    return (
        <div>
            <span>{item.backdrop_path}</span>
            <h6>{item.title}</h6>

        </div>
    );
}

export {MovieComponent};