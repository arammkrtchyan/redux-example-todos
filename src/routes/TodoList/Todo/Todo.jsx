import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({text, completed, toggleTodo}) => {
    return (
        <li className='list-group-item'
            onClick={toggleTodo}
            style={
                {
                    textDecoration: completed ? 'line-through' : 'none'
                }
            }>
            {text}
        </li>
    );
};

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    toggleTodo: PropTypes.func.isRequired
};

export default Todo;