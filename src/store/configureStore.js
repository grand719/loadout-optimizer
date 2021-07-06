import {createStore, combineReducers} from 'redux';
import itemsReducer from '../reducers/items'
import itemStats from '../reducers/itemStats';
import itemStatsReducer from '../reducers/itemStats'
import loadoutsReducer from '../reducers/loadouts'

export default ()=> {
    const store = createStore(
        combineReducers({
            items: itemsReducer,
            itemStats: itemStatsReducer,
            loadouts: loadoutsReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}