import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import axios from 'axios';

const BASE_MOVIE_PATH = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=8c079aa9925b3fc45546af53c0d30371';

const Upcoming = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getMovieList = async () => {
        try {
            const res = await axios.get(`${BASE_MOVIE_PATH}upcoming?${API_KEY}`);
            console.log(res.data.results);
            setMovies(res.data.results);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        } 
    };
    useEffect(() => {
        getMovieList();
    }, []);
    return (
        <>
        <h1>Upcoming Movies</h1>
        {movies.map(movieName => {
                return (
                    <>
                    {/* <Card > */}
                        <Movie
                            title={movieName.title}
                            overview={movieName.overview}
                            poster={movieName.poster_path}
                            released={movieName.release_date}
                        />
                    {/* </Card> */}
                    </>
    );
})}
        </>
    );
};
export default Upcoming;