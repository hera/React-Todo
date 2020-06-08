import React from 'react';
import './TaskForm.scss';

export default function TaskForm (props) {
    const { formTask, handleFormChange, handleFormSubmit } = props;

    return (
        <form className="TaskForm" onSubmit={handleFormSubmit} autoComplete="off">
            <input type="text" value={formTask} onChange={handleFormChange} id="taskTitle" placeholder="Add Task..." />
            <input type="submit" value="Add" id="taskSubmit" />
        </form>
    );
}