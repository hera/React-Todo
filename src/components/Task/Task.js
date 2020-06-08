import React from 'react';
import './Task.scss';


export default function Task (props) {
    const { task, handleDeleteTask } = props;
    const { title, completed, id } = task;

    return (
        <li className={ completed ? 'Task Task--completed' : 'Task'}>
            <span className="Task__title">{ title }</span>
            <div className="Task__controls">
                <a href="#" onClick={(event) => handleDeleteTask(event, task)} className="Task__delete">Delete</a>
                <input type="checkbox" className="Task__checkbox" />
            </div>
        </li>
    );
}