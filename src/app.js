import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";



import configureStore from './store/configureStore'
import {DashBoardPage} from './components/DashBoardPage'

import { addItem } from "./actions/items";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addItem({type: "helmet", masterWork: true, 
mobility: 0,resilience: 10,recovery:20,discipline:30,intellect:10,strength:10}))

store.dispatch(addItem({type: "chest", masterWork: true, 
mobility: 0,resilience: 10,recovery:20,discipline:30,intellect:10,strength:10}))

store.dispatch(addItem({type: "chest", masterWork: true, 
mobility: 0,resilience: 10,recovery:10,discipline:10,intellect:10,strength:10}))

store.dispatch(addItem({type: "gauntlets", masterWork: true, 
mobility: 0,resilience: 10,recovery:20,discipline:10,intellect:10,strength:10}))
store.dispatch(addItem({type: "legs", masterWork: true, 
mobility: 0,resilience: 10,recovery:20,discipline:10,intellect:20,strength:10}))
store.dispatch(addItem({type: "classItem", masterWork: true, 
mobility: 0,resilience: 10,recovery:20,discipline:30,intellect:10,strength:10}))

const state = store.getState();

console.log(state)

const jsx = (
    <Provider store = {store}>
        <DashBoardPage />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
    