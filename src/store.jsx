import {createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import loadingreducer from './redux/Loadingreducer'
import searchreducer from "./redux/Searchreducer";

const rootReducer = combineReducers({
    LR:loadingreducer,
    SR:searchreducer
})

const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store