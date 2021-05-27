import { MOVIE_LOADING_REQUEST, MOVIE_LOADING_SUCCESS, MOVIE_LOADING_FAILURE, MOVIE_SEARCH_REQUEST, MOVIE_SEARCH_SUCCESS,  MOVIE_SEARCH_FAILURE} from './actionType'

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

export const searchMovie = (value) => {
    return (dispatch) => {
        dispatch(movieSearchRequest())
        fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=8c079aa9925b3fc45546af53c0d30371`)
            .then(response => response.json())
            .then(response => {
                dispatch(movieSearchSuccess(response.results))
            }).catch(err => {
                dispatch(movieSearchFailure())
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

export const movieSearchRequest = () => {
    return {
        type: MOVIE_SEARCH_REQUEST
    }
}

export const movieSearchSuccess = (movie) => {
    return {
        type: MOVIE_SEARCH_SUCCESS,
        payload: movie
    }
}

export const movieSearchFailure = () => {
    return {
        type: MOVIE_SEARCH_FAILURE,
    }
}
