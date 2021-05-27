import { MOVIE_SEARCH_REQUEST, MOVIE_SEARCH_SUCCESS, MOVIE_SEARCH_FAILURE} from './actionType'

const initialState = {
    movies: [],
    error: false,
    loading: false
}

const searchreducer = (state = initialState, action) =>{
    switch (action.type){
        case MOVIE_SEARCH_REQUEST:
            return{
                ...state,
                movies: [],
                loading: true,
                error: false
            }
        case MOVIE_SEARCH_SUCCESS:
            return{
                ...state,
                movies: action.payload,
                loading: false,
                error: false
            }
        case MOVIE_SEARCH_FAILURE:
            return{
                ...state,
                movies: [],
                loading: false,
                error: true
            }
        default: return state;
    }
}

export default searchreducer