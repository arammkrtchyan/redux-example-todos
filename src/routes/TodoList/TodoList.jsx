import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo'


const TodoList = (props) => {

    return (
        <ul className='list-group'>
            {
                props.todos.map(todo => (
                        <Todo
                            key={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            toggleTodo={() => props.toggleTodo(todo.id)}/>
                    )
                )
            }
        </ul>
    );

};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default TodoList;