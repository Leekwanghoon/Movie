import React from 'react';
import Movie from '../components/Movie';


function Main({data}) {
    const Movies = data.data.data.movies;
    return (
        <div>
            {Movies.map(movie => (
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    title={movie.title}
                    runtime={movie.runtime}
                    rating={movie.rating}
                />
            ))}
        </div>
    )
}

export default Main
