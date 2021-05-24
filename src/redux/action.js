import { MOVIE_LOADING_REQUEST, MOVIE_LOADING_SUCCESS, MOVIE_LOADING_FAILURE } from './actionType'

export const fetchMovie = (movieAction) => {
    return (dispatch) => {
        dispatch(movieLoadingRequest())
        fetch(`https://api.themoviedb.org/3/movie/${movieAction}?api_key=8c079aa9925b3fc45546af53c0d30371`)
            .then(response => response.json())
            .then(response => {
                dispatch(movieLoadingSuccess(response.results))
            }).catch(err => {
                dispatch(movieLoadingFailure())
            })
    }
}


export const movieLoadingRequest = () => {
    return {
        type: MOVIE_LOADING_REQUEST
    }
}

export const movieLoadingSuccess = (movies) => {
    return {
        type: MOVIE_LOADING_SUCCESS,
        payload: movies
    }
}

export const movieLoadingFailure = () => {
    return {
        type: MOVIE_LOADING_FAILURE,
    }
}