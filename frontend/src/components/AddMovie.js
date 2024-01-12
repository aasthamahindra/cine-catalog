import React, { useState } from 'react';
import { MessageSquareDiff } from 'lucide-react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const addMovie = gql`
    mutation addMovie($name: String!, $genre: String!, $image: String!, $year: String) {
        addMovie(name: $name, genre: $genre, image: $image, year: $year) {
            name
            genre
            year
            image
        }
    }
`;

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

const AddMovie = () => {

    const navigate = useNavigate();

    const newMovie = (e) => {
        e.preventDefault();
        movieData({
            variables: {
                name: movieName,
                genre: movieGenre,
                year: movieYear,
                image: movieImage,
            },
            refetchQueries: [{
                query: getMovies
            }]
        });
        navigate('/');
    }

    const [movieName, setMovieName] = useState('');
    const [movieGenre, setMovieGenre] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [movieImage, setMovieImage] = useState('');

    const [movieData, { loading, error }] = useMutation(addMovie);

  if (loading) return <p className='loading'>Adding the movie...</p>;
  if (error) return <p className='error'>Cannot add movie movie! ${error.message}</p>;

    return ( 
        <div className='addMovie' id='addmovie'>
            <div className='form-card'>
                <MessageSquareDiff style={{ marginTop: '10px'}} color='#ffffff' size={48}/>
                <form onSubmit={newMovie}>
                    <h1> Help us add more movies !</h1>
                    <input type='text' placeholder='Name' required onChange={(e) => setMovieName(e.target.value)}/>
                    <br/>
                    <input type='text' placeholder='Genre' required onChange={(e) => setMovieGenre(e.target.value)}/>
                    <br/>
                    <input type='text' placeholder='Year of Release' onChange={(e) => setMovieYear(e.target.value)}/>
                    <br/>
                    <input type='text' placeholder='Image URI (e.g., ending with .jpg or .png)' required onChange={(e) => setMovieImage(e.target.value)}/>
                    <br/>
                    <button style={{ marginBottom: '10px'}}> Add Movie </button>
                </form>
            </div>
        </div>
     );
}
 
export default AddMovie;