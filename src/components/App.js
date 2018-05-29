import React from 'react';
import Footer from "../routes/TodoList/Footer/Footer";
import VisibleTodoList from "../routes/TodoList/VisibleTodoList";
import AddTodo from "../routes/TodoList/Todo/AddTodo";

const App = () => {

    return (
        <Main>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </Main>
    );

};

const Main = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-5'>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default App;