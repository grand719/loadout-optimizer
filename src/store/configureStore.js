import {createStore, combineReducers} from 'redux';
import itemsReducer from '../reducers/items'
import itemStatsReducer from '../reducers/itemStats'
import loadoutsReducer from '../reducers/loadouts'
import filtersReducer from '../reducers/filters'

export default ()=> {
    const store = createStore(
        combineReducers({
            items: itemsReducer,
            itemStats: itemStatsReducer,
            loadouts: loadoutsReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}