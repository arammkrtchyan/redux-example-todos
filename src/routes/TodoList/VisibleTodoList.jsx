import React from 'react';
import {connect} from 'react-redux';
import TodoList from "./TodoList";
import {toggleTodo} from './Todo/actions'
import {VisibilityFilters} from './FilterLink/actions'

const VisibleTodoList = (props) => {

    return (
        <TodoList todos={props.todos} toggleTodo={props.toggleTodo}/>
    );

};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ALL:
        default:
            return todos;
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleTodoList);