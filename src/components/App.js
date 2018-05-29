import React from 'react';
import Footer from "../routes/TodoList/Footer/Footer";
import VisibleTodoList from "../routes/TodoList/VisibleTodoList";

const App = () => {

    return (
        <Main>
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