import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const fetchMovies = async (searched, apiKey, baseApiUrl, authHeader) => {
    try {
        const url = `${baseApiUrl}/search/movie?query=${searched}&api_key=${apiKey}`;
        const config = {
            headers: { 'Content-Type': 'application/json', Authorization: authHeader },
        };
        const response = await axios.get(url, config);
        return response.data.results;
    } catch (err) {
        throw new Error('Error fetching the data.');
    }
};

const MovieItem = ({ movie }) => (
    <section className='search-container'>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster of ${movie.original_title}`} />
        <p>{movie.original_title}</p>
        <section className='description'>
            <p>{movie.overview}</p>
            <p id='movieDate'>Release date: {movie.release_date}</p>
        </section>
    </section>
);

export default function Medium() {
    const apiKey = '11fa9db824921e67b4c44cf46972d86d';
    const baseApiUrl = 'https://api.themoviedb.org/3';
    const authHeader = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjZkNDYwMmRkMjRkMzNkYjY2NTVjMmFjZTBmZGExOCIsInN1YiI6IjY1N2Y3NmViMzIzZWJahNjIzMTg3YTkyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QDtbzAhjs286zSE2zBc-2bih4vp5UymxmTpi2FwHzdk';

    const [movies, setMovies] = useState([]);
    const [searched, setSearched] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searched) {
                    const data = await fetchMovies(searched, apiKey, baseApiUrl, authHeader);
                    setMovies(data);
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [searched, apiKey, baseApiUrl, authHeader]);

    const handleInput = (e) => {
        setSearched(e.target.value);
    };

    return (
        <div>
            <Link to="/">
                <p>Home</p>
            </Link>
            <section className='searchBar'>
                <input
                    type='text'
                    value={searched}
                    onChange={handleInput}
                />
            </section>

            {error && <p className="error">{error}</p>}

            <section className='grid'>
                {movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
            </section>
        </div>
    );
}