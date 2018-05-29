import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from "../actions";

class AddTodo extends React.Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    };

    static initialState = {
        text: ''
    };

    state = AddTodo.initialState;

    handleFormSubmit = (event) => {
        event.preventDefault();
        let todoText = this.state.text.trim();
        if (todoText.length > 0) {
            this.props.addTodo(this.state.text);
        }
        this.setState(AddTodo.initialState);
    };

    handleInputChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        return (
            <form className='form-inline' onSubmit={this.handleFormSubmit}>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" value={this.state.text}
                           onChange={this.handleInputChange} id="addTodo" placeholder="Todo"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                    Add Todo
                </button>
            </form>
        );
    }

}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(addTodo(text))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);