import React from 'react';
import './TaskList.scss';

import Task from '../Task/Task';

export default function TaskList (props) {
    const { tasks, handleDeleteTask, handleToggleCompleted } = props;

    return (
        <ul className="TaskList">
        {
            tasks && tasks.map(task => {
                return (
                    <Task 
                        task={task}
                        key={task.id}
                        handleDeleteTask={handleDeleteTask}
                        handleToggleCompleted={handleToggleCompleted}
                    />
                );
            })
        }
        </ul>
    );
}