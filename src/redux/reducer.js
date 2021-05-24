import { MOVIE_LOADING_REQUEST, MOVIE_LOADING_SUCCESS, MOVIE_LOADING_FAILURE} from './actionType'

const initialState = {
    loading: true,
    movieList: [],
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_LOADING_REQUEST:
            return {
                ...state,
                loading: true,
                movieList: [],
                error: false
            }
        case MOVIE_LOADING_SUCCESS:
            return {
                ...state,
                loading: false,
                movieList: action.payload,
                error: false
            }
        case MOVIE_LOADING_FAILURE:
            return {
                ...state,
                loading: false,
                movieList: [],
                error: true
            }
        default: return state

    }
}

export default reducer