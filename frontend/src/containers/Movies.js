import React from 'react';
import SingleMovie from '../components/SingleMovie';
import { gql, useQuery } from '@apollo/client';

const getMovies = gql`
    query GetMovies {
        getMovies {
            name
            genre
            year
            image
        }
    }
`;

const Movies = () => {
    const { loading, error, data } = useQuery(getMovies);

    if (loading) return <p className='loading'>We are loading the movies...</p>;
    if (error) return <p className='error'>Cannot fetch the movies!: {error.message}</p>;
    if (data.getMovies.length === 0) return <p className='no-movies'>No movies found!</p>

    return ( 
        <div className='movies'>
            {data.getMovies.map((movie) => {
                return <SingleMovie
                    movieName={movie.name}
                    movieGenre={movie.genre}
                    movieYear={movie.year}
                    movieImage={movie.image}
                />
            })}
        </div>
    );
}
 
export default Movies;