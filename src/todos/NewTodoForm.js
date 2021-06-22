import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';

// connect()(NewTodoForm)

const NewTodoForm = ( { todos, onCreatedPressed } ) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button 
                onClick={() => {
                    const isDuplicatedText = todos.some(todo => todo.text === inputValue);

                    if(!isDuplicatedText) {
                        onCreatedPressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="new-todo-button">Create Todo</button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatedPressed: text => dispatch(createTodo(text)),
});

export default NewTodoForm;