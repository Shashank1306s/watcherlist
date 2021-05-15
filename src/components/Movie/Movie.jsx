import React from 'react';
import './MovieList.scss';
import { BASE_POSTER_PATH } from '../../constants/Constants';

const Movie = (props) => {

    return (
        <>
            <div className="movie-details-mobile">
                <h1 className="movie-title">{props.title}</h1>
            </div>

            <div className="movie-component">
                {props.poster && (<img
                    src={`${BASE_POSTER_PATH}w300/${props.poster}`}
                    alt="movie poster"
                    className="movie-poster"
                />
                )}
            </div>

            <div className="movie-details">
                <h1 className="movie-title">{props.title}</h1>
                <p className="movie-overview">
                    <strong>Synopsis:</strong>
                    {props.overview}
                </p>
                <p className="movie-released"> <strong>Release Date</strong> {props.released} </p>
            </div>
        </>
    );
}


export default Movie;