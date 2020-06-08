import React, { useState, useReducer, useEffect } from 'react';
import './App.scss';

import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';

import tasksReducer from '../../reducers/tasksReducer';


export default function App () {

    const [state, dispatch] = useReducer(tasksReducer, []);
    const [formTask, setFormTask] = useState('');


    /* Storage */
    // --------------------------------------------------------------------------------------

    // Returns parsed data read from local storage, or returns null if key is not found
    function pullStorage (key) {
        return JSON.parse(localStorage.getItem(key));
    }


    // Saves a key-value pair in local storage
    function pushStorage (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }


    /* Actions on tasks */
    // --------------------------------------------------------------------------------------

    function handleFormChange (event) {
        setFormTask(event.target.value);
    }

    function handleFormSubmit (event) {
        event.preventDefault();

        dispatch({type: 'ADD', payload: formTask});

        // clear form field
        setFormTask('');
    }

    function handleResetTasks (event) {
        event.preventDefault();
        dispatch({type: 'RESET'});
    }

    function handleDeleteTask (event, task) {
        event.preventDefault();
        dispatch({type: 'DELETE', task});
    }

    function handleToggleCompleted (event, task) {
        dispatch({type: 'TOGGLE_COMPLETED', task});
    }

    
    /* useEffect hook */
    // --------------------------------------------------------------------------------------

    // Load all tasks from local storage on first render
    useEffect(() => {
        dispatch({
            type: 'PULL',
            payload: pullStorage('tasks')
        });
    }, []);


    // Save state in the local storage
    useEffect(() => {
        pushStorage('tasks', state);
    }, [state]);


    return (
        <div className="container">
            <h1>Tasks</h1>

            <TaskList
                tasks={state}
                handleDeleteTask={handleDeleteTask}
                handleToggleCompleted={handleToggleCompleted}
            />

            <TaskForm
                formTask={formTask}
                handleFormChange={handleFormChange}
                handleFormSubmit={handleFormSubmit}
            />

            <div>
                <a href="/#" onClick={handleResetTasks} className="clear-all">Clear All Tasks</a>
            </div>
        </div>
    );
}