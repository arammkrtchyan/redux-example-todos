import React from 'react';
import {connect} from 'react-redux';
import TodoList from "./TodoList";
import {toggleTodo} from './Todo/actions'

const VisibleTodoList = (props) => {

    return (
        <TodoList todos={props.todos} toggleTodo={props.toggleTodo}/>
    );

};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
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