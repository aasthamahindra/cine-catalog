import React from 'react';
import SingleMovie from '../components/SingleMovie';

const movies = [
    {name: 'Vikram Veda', genre: 'Crime', year: 2023},
    {name: 'Gumraah', genre: 'Action', year: 2023},
    {name: 'Cirkus', genre: 'Comedy', year: 2022},
    {name: 'Gehraiyaan', genre: 'Romantic', year: 2022 },
];

const Movies = () => {
    return ( 
        <div className='movies'>
            {movies.map((movie) => {
                return <SingleMovie
                    movieName={movie.name}
                    movieGenre={movie.genre}
                    movieYear={movie.year}
                />
            })}
        </div>
    );
}
 
export default Movies;