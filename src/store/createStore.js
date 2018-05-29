import {createStore} from 'redux';
import {makeRootReducer} from "./reducers";


const createAppStore = (initialState = {}) => {

    return createStore(
        makeRootReducer(),
        initialState
    );

};

export default createAppStore;