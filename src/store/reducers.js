import {combineReducers} from 'redux';
import visibilityFilter from "../routes/TodoList/FilterLink/reducers";
import todos from "../routes/TodoList/Todo/reducers";

export const makeRootReducer = () => {
    return combineReducers({
        visibilityFilter,
        todos
    });

};