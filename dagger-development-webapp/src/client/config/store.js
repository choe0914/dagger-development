import {createStore, combineReducers} from 'redux'
import  playerReducer  from "../components/GamePlayer/reducer";


const rootReducer = combineReducers({
    player: playerReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)

export default store;