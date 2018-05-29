import {TOGGLE_TODO} from './actions'

const todos = (state = [{id: 1, text: 'Hello'}], action) => {
    switch (action.type) {
        case TOGGLE_TODO:
            return state.map(todo => {
                return todo.id = action.id ? {...todo, completed: !todo.completed} : todo
            });
        default:
            return state;
    }
};

export default todos;